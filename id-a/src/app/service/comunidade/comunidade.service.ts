import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comunidade } from 'src/app/model/comunidade';

@Injectable({
  providedIn: 'root'
})
export class ComunidadeService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("http://localhost:8080/comunidade");
  }
  getById(id: number){
    return this.http.get(`http://localhost:8080/comunidade/${id}`);
  }
  insert(comunidade: Comunidade){
    return this.http.post("http://localhost:8080/comunidade/", comunidade);
  }
  update(comunidade: Comunidade){
    return this.http.put("http://localhost:8080/comunidade/", comunidade);
  }
  delete(id: number){
    return this.http.delete(`http://localhost:8080/comunidade/${id}`);
  }


}
