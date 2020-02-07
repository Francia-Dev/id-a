import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/model/comentario';
import { ComentarioService } from 'src/app/service/comentario/comentario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-comentario-delete',
  templateUrl: './comentario-delete.component.html',
  styleUrls: ['./comentario-delete.component.css']
})
export class ComentarioDeleteComponent implements OnInit {

  comentario: Comentario = new Comentario(0, "", new Usuario(0, "", "", "", "", null, null, null), new Post(0, "", "", "", "", null, null, null));
  id: number;
  mensagem: String
  constructor(private comentarioService: ComentarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];
    this.id = id
    this.comentarioService.getById(this.id).subscribe((comentarioOut: Comentario) =>{
      this.comentario = comentarioOut;
    }, err => {
      alert(`Id não encontrado`);
    
    })
  }

  btnClick(){
    this.comentarioService.delete(this.id).subscribe((mensagemOut: String) => {
      this.mensagem = mensagemOut;
      alert("Comentario Deletado");
      this.mudarpag();
      
    }, err => {
      alert(`Id não encontrado`);
      this.router.navigate(['homeusuario/categoriaAll']);
    })

    
  }

  mudarpag(){
    this.router.navigate(['/homeusuario/comentarioAll']);
  }
}
