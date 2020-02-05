import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { ComentarioService } from 'src/app/service/comentario/comentario.service';
import { Comentario } from 'src/app/model/comentario';
import { Usuario } from 'src/app/model/usuario';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [ Globals ]
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostService, private comentarioService: ComentarioService) { }

  post: Post[];
  comentario: Comentario = new Comentario(0, "", new Usuario(0, "", "", "", "", null, null, null), new Post(0, "", "", "", "", null, null, null));
  novoComentario: string
  localizacao: number;


  ngOnInit() {
    this.findAll();
  
  }

    findAll(){
      this.postService.getAll().subscribe((postOut: Post[]) => {
        this.post = postOut;
      })
    }

    enviarComentario(id: number){
      this.comentario.texto = this.novoComentario;
      this.comentario.usuario.idUsuario = Globals.USUARIO.idUsuario;
      this.comentario.post.idPostagem = id;
      console.log(this.comentario)
      this.comentarioService.insert(this.comentario).subscribe((comentarioOut: Comentario) =>{
        this.comentario = comentarioOut;
        this.findAll();
      });
    }
}
