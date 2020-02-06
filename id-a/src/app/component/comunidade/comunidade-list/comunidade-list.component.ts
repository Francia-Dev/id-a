import { Component, OnInit } from '@angular/core';
import { ComunidadeService } from 'src/app/service/comunidade/comunidade.service';
import { Comunidade } from 'src/app/model/comunidade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunidade-list',
  templateUrl: './comunidade-list.component.html',
  styleUrls: ['./comunidade-list.component.css']
})
export class ComunidadeListComponent implements OnInit {

  constructor(private comunidadeService: ComunidadeService, private router: Router) { }

  comunidade: Comunidade[];

  ngOnInit() {
    this.findAll();
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
