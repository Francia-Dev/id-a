import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  constructor(private categoriaService: CategoriaService) { }

  categoria: Categoria[];

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.categoriaService.getAll().subscribe((categoriaOut: Categoria[]) => {
      this.categoria = categoriaOut;
    });
  }

}
