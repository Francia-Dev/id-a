import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  post: Post = new Post(0,"","","","", null, null, null);
  id: number;
  angForm: FormGroup
  constructor(private postService: PostService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  createForm() {
    this.angForm = this.fb.group({
         idPostagem: ['', Validators.required ],
         titulo: ['', Validators.required ],
         texto: ['', Validators.required ]
    });
  }

  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];
    this.id= id
    this.postService.getById(id).subscribe((postOut: Post) =>{
      this.post.titulo = postOut.titulo;
      this.post.idPostagem = postOut.idPostagem;
      this.post.texto = postOut.texto;
      this.post.linkimg = postOut.linkimg;
    }, err => {
      alert(`Id não encontrado`);
    })
  }

  alterar(){
    if (this.post.idPostagem != 0){
      this.postService.update(this.post).subscribe((postOut: Post) =>{
      this.post = postOut;
      alert("Postagem alterada com sucesso!");
      this.router.navigate(['/homeusuario/']);
      }, err => {
        console.log(this.post)
        alert(`Erro ao atualizar postagem`);
      })
    } 
    
  }
}