import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-insert',
  templateUrl: './categoria-insert.component.html',
  styleUrls: ['./categoria-insert.component.css']
})
export class CategoriaInsertComponent implements OnInit {

  categoria: Categoria = new Categoria(0, "", "", null);

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit() {
  }

  inserir(){
    if(this.categoria.nome != "" && this.categoria.descricao != ""){
      this.categoriaService.insert(this.categoria).subscribe((categoriaOut: Categoria) => {
        this.categoria = categoriaOut;
        alert("Categoria criada com sucesso");
        this.router.navigate(['/homeusuario/categoriaAll'])
      });
    }
  }
}