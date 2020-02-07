import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css'],
  providers: [ Globals ]
})
export class UsuariosListaComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  usuario: Usuario[];
  userId: number;
  userName: string;

  ngOnInit() {
    this.findAll();
    this.userId = Globals.USUARIO.idUsuario;
    this.userName = Globals.USUARIO.nome;
  }

  findAll(){
    this.usuarioService.getAll().subscribe((usuarioOut: Usuario[]) => {
      this.usuario = usuarioOut;
    }, err => {
      alert(`Erro ao buscar`);
      this.router.navigate(['homeusuario']);
    })
  }
}