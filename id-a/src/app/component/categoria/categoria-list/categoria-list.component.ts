import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { Categoria } from 'src/app/model/categoria';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css'],
  providers: [ Globals ]
})
export class CategoriaListComponent implements OnInit {

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  userId: number;
  userName: string;
  categoria: Categoria[];

  ngOnInit() {
    this.findAll();
    this.userId = Globals.USUARIO.idUsuario;
    this.userName = Globals.USUARIO.nome;
  }

  findAll() {
    this.categoriaService.getAll().subscribe((categoriaOut: Categoria[]) => {
      this.categoria = categoriaOut;
    }, err => {
      alert(`Erro ao carregar`);
      this.router.navigate(['homeusuario']);
    });
  }

}
