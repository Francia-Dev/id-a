import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  post: Post = new Post(0,"","","","", null, null, null);
  id: number;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  alterar(){
    if (this.post.idPostagem != 0){
      this.postService.update(this.post).subscribe((postOut: Post) =>{
      this.post = postOut;
      
      console.log(this.post);
      alert("Postagem alterada com sucesso!");
      this.router.navigate(['/postAll']);
      })
    } 
    
  }

  // keyUp(){
  //   if (this.post.idPostagem == 0) {
  //     document.getElementById("erroId").style.visibility = "visible";
  //   } else {
  //     document.getElementById("erroId").style.visibility = "hidden";
  //     this.postService.getById(this.post.idPostagem).subscribe((postOut: Post) =>{
  //     this.post = postOut;
  //     console.log(this.post);
  //     if (this.post == null){
  //       alert(`Id não encontrado`);
  //       this.router.navigate(['/postAll']);
  //     }
  //     }, err =>{
  //       alert(`Id não encontrado`);
  //       this.router.navigate(['/postAll']);
      
  //     })
  //   }
  // }
}