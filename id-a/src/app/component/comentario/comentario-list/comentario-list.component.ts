import { Component, OnInit } from '@angular/core';
import { ComentarioService } from 'src/app/service/comentario/comentario.service';
import { Comentario } from 'src/app/model/comentario';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css'],
  providers: [ Globals ]
})
export class ComentarioListComponent implements OnInit {

  constructor(private comentarioService: ComentarioService, private router: Router) { }
  userId: number;
  userName: string;
  comentario: Comentario[];

  ngOnInit() {
    this.findAll();
    this.userId = Globals.USUARIO.idUsuario;
    this.userName = Globals.USUARIO.nome;
  }

  findAll() {
    this.comentarioService.getAll().subscribe((comentarioOut: Comentario[]) => {
      this.comentario = comentarioOut;
    }, err => {
      alert(`Erro ao buscar`);
      this.router.navigate(['homeusuario']);
    });
  }

}
