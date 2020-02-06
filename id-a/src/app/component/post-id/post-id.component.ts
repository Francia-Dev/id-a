import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { Globals } from 'src/app/model/globals';
import { Comentario } from 'src/app/model/comentario';
import { Usuario } from 'src/app/model/usuario';
import { ComentarioService } from 'src/app/service/comentario/comentario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.css'],
  providers: [ Globals ]
})
export class PostIdComponent implements OnInit {

  post: Post = new Post(0,"","","","", null, null, null);
  id: number;
  posts: Post[];
  comentario: Comentario = new Comentario(0, "", new Usuario(0, "", "", "", "", null, null, null), new Post(0, "", "", "", "", null, null, null));
  novoComentario: string
  novoComentario2: string
  localizacao: number;
  palavra: string;

  constructor(private postService: PostService, private comentarioService: ComentarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];

    console.log(id);

  
    if(id == undefined){
      
    } else {
      this.id = id;
      this.btnClick();
    }
  }
  btnClick(){
    document.getElementById("listaPosts").style.display = "none";
    document.getElementById("unicoPost").style.display = "block";
    this.postService.getById(this.id).subscribe((postOut: Post) =>{
      this.post = postOut;
    }, err => {
      alert(`Id não encontrado`);
      this.router.navigate(['homeusuario/postAll']);
    })
  }
  btnClickPalavra(){
    document.getElementById("listaPosts").style.display = "block";
    document.getElementById("unicoPost").style.display = "none";
    this.postService.getByPalavra(this.palavra).subscribe((postsOut: Post[]) => {
      this.posts = postsOut;
    }, err => {
      alert(`Palavra não encontrada`);
      this.router.navigate(['homeusuario/postAll']);
    });
    
  }


  enviarComentario(id: number){
    this.comentario.texto = this.novoComentario;
    this.comentario.usuario.idUsuario = Globals.USUARIO.idUsuario;
    this.comentario.post.idPostagem = id;
    this.comentarioService.insert(this.comentario).subscribe((comentarioOut: Comentario) =>{
      this.btnClick();
    }, err => {
      alert(`Erro ao criar comentario`);
    });
  }
  enviarComentario2(id: number){
    this.comentario.texto = this.novoComentario2;
    this.comentario.usuario.idUsuario = Globals.USUARIO.idUsuario;
    this.comentario.post.idPostagem = id;
    this.comentarioService.insert(this.comentario).subscribe((comentarioOut: Comentario) =>{
      this.btnClickPalavra();
    }, err => {
      alert(`Erro ao criar comentario`);
    });
  }
}