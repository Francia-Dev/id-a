import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/globals';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-post-insert',
  templateUrl: './post-insert.component.html',
  styleUrls: ['./post-insert.component.css'],
  providers: [ Globals ]
})
export class PostInsertComponent implements OnInit {

  post: Post = new Post(0, "", "", "", "", new Usuario(0, "", "", "", "", null, null, null), null, null);

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.post.usuario.idUsuario = Globals.USUARIO.idUsuario;
  }

  inserir() {
    if (this.post.titulo != "" && this.post.texto != "") {
      this.postService.insert(this.post).subscribe((postOut: Post) =>{
        this.post = postOut;
        console.log(this.post);
        alert("Mensagem postada com sucesso");
        this.router.navigate(['/homeusuario/']);
      }, err => {
        alert(`Erro ao criar`);
        this.router.navigate(['homeusuario/']);
      })
    }
  }

  previa(){
    document.getElementById("previewImagem").innerHTML = `<img src='${this.post.linkimg}'>`;
  }
}