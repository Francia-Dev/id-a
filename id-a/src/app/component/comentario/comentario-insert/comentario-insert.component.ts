import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioService } from 'src/app/service/comentario/comentario.service';
import { Comentario } from 'src/app/model/comentario';
import { Usuario } from 'src/app/model/usuario';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-comentario-insert',
  templateUrl: './comentario-insert.component.html',
  styleUrls: ['./comentario-insert.component.css']
})
export class ComentarioInsertComponent implements OnInit {

  comentario: Comentario = new Comentario(0, "", new Usuario(0, "", "", "", "", null, null, null), new Post(0, "", "", "", "", null, null, null));
  
  constructor(private comentarioService: ComentarioService, private router: Router) { }

  ngOnInit() {
  }
  inserir(){
    if (this.comentario.texto != "" && this.comentario.usuario.idUsuario != 0 && this.comentario.post.idPostagem != 0){
      this.comentarioService.insert(this.comentario).subscribe((comentarioOut: Comentario) =>{
        this.comentario = comentarioOut;
        alert("Comentario inserido com sucesso");
        this.router.navigate(['/comentarioAll']);
      
    })
    }
 }
}
