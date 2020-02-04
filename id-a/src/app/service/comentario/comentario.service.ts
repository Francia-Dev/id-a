import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from 'src/app/model/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("http://localhost:8080/comentario");
  }
  getById(id: number){
    return this.http.get(`http://localhost:8080/comentario/${id}`);
  }
  insert(comentario: Comentario){
    return this.http.post("http://localhost:8080/comentario/", comentario);
  }
  update(comentario: Comentario){
    return this.http.put("http://localhost:8080/comentario/", comentario);
  }
  delete(id: number){
    return this.http.delete(`http://localhost:8080/comentario/${id}`);
  }
}
