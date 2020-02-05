import { Component, OnInit } from '@angular/core';
import { ComunidadeService } from 'src/app/service/comunidade/comunidade.service';
import { Router } from '@angular/router';
import { Comunidade } from 'src/app/model/comunidade';
import { Usuario } from 'src/app/model/usuario';
import { Categoria } from 'src/app/model/categoria';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-comunidade-insert',
  templateUrl: './comunidade-insert.component.html',
  styleUrls: ['./comunidade-insert.component.css'],
  providers: [ Globals ]
})
export class ComunidadeInsertComponent implements OnInit {

  comunidade: Comunidade = new Comunidade(0, null, new Usuario(0, "", "", "", "", null, null, null), null, new Categoria(0, "", "", null));
  constructor(private comunidadeService: ComunidadeService, private router: Router) { }

  ngOnInit() {
    this.comunidade.usuario.idUsuario = Globals.USUARIO.idUsuario;
  }
  inserir(){
    if(this.comunidade.usuario != null && this.comunidade.categoria != null){
      if(this.comunidade.nome != "" && this.comunidade.usuario.idUsuario != 0 && this.comunidade.categoria.idCategoria != 0){
        this.comunidadeService.insert(this.comunidade).subscribe((comunidadeOut:Comunidade) => {
          this.comunidade = comunidadeOut
          alert("Comunidade criada com sucesso!")
          this.router.navigate(['/comunidadeAll']);
        });
      }
    }
  }
}
