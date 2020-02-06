import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-nome',
  templateUrl: './usuario-nome.component.html',
  styleUrls: ['./usuario-nome.component.css']
})
export class UsuarioNomeComponent implements OnInit {

  nomeUsuario: string;
  usuarios: Usuario[];
  usuario: Usuario = new Usuario(0, "", "", "", "", null, null, null)
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  btnClickNome(){
    this.usuarioService.getByName(this.nomeUsuario).subscribe((usuarioOut: Usuario[]) => {
      this.usuarios = usuarioOut;
    }, err => {
      alert(`Usuario não encontrada`);
      this.router.navigate(['homeusuario/usuarioAll']);
    });
  }

}
