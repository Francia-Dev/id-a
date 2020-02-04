import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-insert',
  templateUrl: './post-insert.component.html',
  styleUrls: ['./post-insert.component.css']
})
export class PostInsertComponent implements OnInit {

  post: Post = new Post(0,"","","","", null, null, null);

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  inserir() {
    if (this.post.titulo != "" && this.post.texto != "") {
      this.postService.insert(this.post).subscribe((postOut: Post) =>{
        this.post = postOut;
        console.log(this.post);
        alert("Mensagem postada com sucesso");
        this.router.navigate(['/postAll']);
      })
    }
  }

  previa(){
    document.getElementById("previewImagem").innerHTML = `<img src='${this.post.linkimg}' style='max-width:100%;'>`;
  }

}
