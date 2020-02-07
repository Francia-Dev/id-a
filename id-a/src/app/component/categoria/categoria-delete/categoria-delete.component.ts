import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(private categoriaService: CategoriaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];
    this.id= id
    if (id){
      this.categoriaService.getById(id).subscribe((categoriaOut: Categoria) =>{
        this.categoria.nome = categoriaOut.nome;
        this.categoria.descricao = categoriaOut.descricao;
      }, err => {
        alert(`Id não encontrado`);
      });
    }
  }

  btnClick(){
    this.categoriaService.delete(this.id).subscribe((mensagemOut: String) => {
      this.mensagem = mensagemOut;
      alert("Categoria Deletada");
      this.mudarpag();
    }, err => {
      alert(`Id não encontrado`);
      this.router.navigate(['homeusuario/categoriaAll']);
    });

  }

  mudarpag(){
    this.router.navigate(['/homeusuario/categoriaAll']);
  }
}