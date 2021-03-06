import { Component, OnInit } from '@angular/core';
import { Comunidade } from 'src/app/model/comunidade';
import { Usuario } from 'src/app/model/usuario';
import { Categoria } from 'src/app/model/categoria';
import { ComunidadeService } from 'src/app/service/comunidade/comunidade.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-comunidade-update',
  templateUrl: './comunidade-update.component.html',
  styleUrls: ['./comunidade-update.component.css'],
  providers: [ Globals ]
})
export class ComunidadeUpdateComponent implements OnInit {

  comunidade: Comunidade = new Comunidade(0, null, new Usuario(0, "", "", "", "", null, null, null), null, new Categoria(0, "", "", null));

  constructor(private comunidadeService: ComunidadeService, private router: Router, private route: ActivatedRoute) { }
  
  userName: String;

  ngOnInit() {
    this.comunidade.usuario.idUsuario = Globals.USUARIO.idUsuario;

    let id:number = this.route.snapshot.params["id"];
    this.comunidade.idComunidade = id
    if (id){
      this.comunidadeService.getById(id).subscribe((comunidadeOut: Comunidade) =>{
      this.comunidade.nome = comunidadeOut.nome;
      this.comunidade.categoria.idCategoria = comunidadeOut.categoria.idCategoria
      }, err => {
        alert(`Id não encontrado`);
      });
    }
    this.userName = Globals.USUARIO.nome;
  }

  alterar(){
    if(this.comunidade.idComunidade != 0){
        this.comunidadeService.update(this.comunidade).subscribe((comunidadeOut: Comunidade) => {
        this.comunidade = comunidadeOut;
        alert("Comunidade atualizada com sucesso!")
        this.router.navigate(['/homeusuario/comunidadeAll']);
      },err =>{
        alert(`Id não encontrado`);
        this.router.navigate(['/homeusuario/comunidadeAll']);
      })
    }
  }
}
