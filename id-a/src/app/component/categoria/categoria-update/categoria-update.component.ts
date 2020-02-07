import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  id: number;
  categoria: Categoria = new Categoria(0, "", "", null);

  constructor(private categoriaService: CategoriaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];
    this.categoria.idCategoria= id
    this.categoriaService.getById(id).subscribe((categoriaOut: Categoria) =>{
     this.categoria.nome = categoriaOut.nome;
     this.categoria.descricao = categoriaOut.descricao;
    }, err => {
      alert(`Id não encontrado`);
    })
  }

  alterar(){
    if(this.categoria.idCategoria != 0){
      this.categoriaService.update(this.categoria).subscribe((categoriaOut: Categoria) => {
        this.categoria = categoriaOut;

        alert("Categoria alterada com sucesso!");
        this.router.navigate(['homeusuario/categoriaAll'])
      }, err => {
        alert(`Id não encontrado`);
        this.router.navigate(['homeusuario/categoriaAll']);
      });
    }
  }
}