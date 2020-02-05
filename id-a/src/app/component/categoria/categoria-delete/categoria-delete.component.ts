import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = new Categoria(0,"","",null)
  id: number;
  mensagem: String
  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit() {
  }

  btnClick(){
    this.categoriaService.delete(this.id).subscribe((mensagemOut: String) => {
      this.mensagem = mensagemOut;
      
    })

    alert("Categoria Deletada");
      this.mudarpag();
  }

  mudarpag(){
    this.router.navigate(['/homeusuario/categoriaAll']);
  }
}
