import { Router } from '@angular/router';
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
  constructor(private postService: PostService, private router: Router, private fb: FormBuilder) { }

  createForm() {
    this.angForm = this.fb.group({
         idPostagem: ['', Validators.required ],
         titulo: ['', Validators.required ],
         texto: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  alterar(){
    if (this.post.idPostagem != 0){
      this.postService.update(this.post).subscribe((postOut: Post) =>{
      this.post = postOut;
      alert("Postagem alterada com sucesso!");
      this.router.navigate(['/homeusuario/postAll']);
      }, err => {
        alert(`Erro ao atualizar postagem`);
      })
    } 
    
  }
}