import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { Categoria } from 'src/app/model/categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-id',
  templateUrl: './categoria-id.component.html',
  styleUrls: ['./categoria-id.component.css']
})
export class CategoriaIdComponent implements OnInit {

  id: number;
  categoria: Categoria = new Categoria(0,"","",null)
  
  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit() {
  }

  btnClick() {
    this.categoriaService.getById(this.id).subscribe((categoriaOut: Categoria) =>{
      this.categoria = categoriaOut;
    }, err => {
      alert(`Id não encontrado`);
      this.router.navigate(['homeusuario/categoriaAll']);
    })
  }
}
