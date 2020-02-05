import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  post: Post = new Post(0,"","","","", null, null, null);
  id: number;
  mensagem: String
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  btnClick(){
    this.postService.delete(this.id).subscribe((mensagemOut: String) => {
      this.mensagem = mensagemOut;
      
    })

    alert("Postagem Deletada");
      this.mudarpag();
  }

  mudarpag(){
    this.router.navigate(['/homeusuario/postAll']);
  }
}
