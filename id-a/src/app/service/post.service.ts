import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("http://localhost:8080/post")
  }
  getById(id: number){
    return this.http.get(`http://localhost:8080/post/${id}`)
  }

  getByPalavra(palavra: string){
    return this.http.get(`http://localhost:8080/post/palavra/${palavra}`)
  }

  insert(post: Post){
    return this.http.post("http://localhost:8080/post", post)
  }

  delete(id: number){
    return this.http.delete(`http://localhost:8080/post/${id}`);
  }

  update(post: Post){
    return this.http.put("http://localhost:8080/post", post)
  }

}
