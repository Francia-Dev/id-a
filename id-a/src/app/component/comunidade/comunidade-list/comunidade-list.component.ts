import { Component, OnInit } from '@angular/core';
import { ComunidadeService } from 'src/app/service/comunidade/comunidade.service';
import { Comunidade } from 'src/app/model/comunidade';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-comunidade-list',
  templateUrl: './comunidade-list.component.html',
  styleUrls: ['./comunidade-list.component.css'],
  providers: [ Globals ]
})
export class ComunidadeListComponent implements OnInit {

  constructor(private comunidadeService: ComunidadeService, private router: Router) { }

  comunidade: Comunidade[];
  userId: number;
  userName: string;

  ngOnInit() {
    this.findAll();
    this.userId = Globals.USUARIO.idUsuario;
    this.userName = Globals.USUARIO.nome;
  }

  findAll() {
    this.comunidadeService.getAll().subscribe((comunidadeOut: Comunidade[]) => {
      this.comunidade = comunidadeOut;
    }, err => {
      alert(`Erro ao carregar`);
      this.router.navigate(['homeusuario']);
    });
  }

}