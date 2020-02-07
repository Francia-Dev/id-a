import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css'],
  providers: [ Globals ]
})
export class PostDeleteComponent implements OnInit {

  post: Post = new Post(0,"","","","", null, null, null);
  id: number;
  mensagem: String;
  userName: string;
  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];
    this.id= id
    if (id){
      this.postService.getById(id).subscribe((postOut: Post) =>{
        this.post = postOut;
      }, err => {
        alert(`Id não encontrado`);
      });
    }
    this.userName = Globals.USUARIO.nome;
  }

  btnClick(){
    this.postService.delete(this.id).subscribe((mensagemOut: String) => {
      this.mensagem = mensagemOut;
      alert("Postagem Deletada");
      this.mudarpag();

    }, err => {
      alert(`Id não encontrado`);
      this.router.navigate(['homeusuario/']);
    })

    
  }

  mudarpag(){
    this.router.navigate(['/homeusuario/']);
  }
}
