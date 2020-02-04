import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostService) { }

  post: Post[];

  ngOnInit() {
    this.findAll();
  }

    findAll(){
      this.postService.getAll().subscribe((postOut: Post[]) => {
        this.post = postOut;
      })
    }
}
