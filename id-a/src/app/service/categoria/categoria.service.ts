import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("http://localhost:8080/categoria");
  }
  getById(id: number){
    return this.http.get(`http://localhost:8080/categoria/${id}`);
  }
  insert(categoria: Categoria){
    return this.http.post("http://localhost:8080/categoria/", categoria);
  }
  update(categoria: Categoria){
    return this.http.put("http://localhost:8080/categoria/", categoria);
  }
  delete(id: number){
    return this.http.delete(`http://localhost:8080/categoria/${id}`);
  }
}
