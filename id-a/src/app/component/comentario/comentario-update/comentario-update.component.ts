import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/model/comentario';
import { Usuario } from 'src/app/model/usuario';
import { Post } from 'src/app/model/post';
import { ComentarioService } from 'src/app/service/comentario/comentario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-comentario-update',
  templateUrl: './comentario-update.component.html',
  styleUrls: ['./comentario-update.component.css'],
  providers: [ Globals ]
})
export class ComentarioUpdateComponent implements OnInit {

  comentario: Comentario = new Comentario(0, "", new Usuario(0, "", "", "", "", null, null, null), new Post(0, "", "", "", "", null, null, null));

  constructor(private comentarioService: ComentarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.comentario.usuario.idUsuario = Globals.USUARIO.idUsuario;

    let id:number = this.route.snapshot.params["id"];
    this.comentario.idComentario = id
    this.comentarioService.getById(id).subscribe((comentarioOut: Comentario) =>{
      this.comentario = comentarioOut;
    }, err => {
      alert(`Id não encontrado`);
    
    })
  }

  alterar(){

    if (this.comentario.idComentario != 0){
      this.comentarioService.update(this.comentario).subscribe((comentarioOut: Comentario) =>{
      this.comentario = comentarioOut;
      alert("Comentario atualizado com sucesso!");
      this.router.navigate(['homeusuario/comentarioAll']);
      }, err => {
        alert(`Id não encontrado`);
        this.router.navigate(['homeusuario/comentarioAll']);
      })
    }
    else {
      alert(`Inserir id`);
      this.router.navigate(['homeusuario/comentarioAll']);

    }
  }

}