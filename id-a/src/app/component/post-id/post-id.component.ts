import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.css']
})
export class PostIdComponent implements OnInit {

  post: Post = new Post(0,"","","","", null, null, null);
  id: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  btnClick(){
    this.postService.getById(this.id).subscribe((postOut: Post) =>{
      this.post = postOut;
      console.log(this.post);
    })
  }
}