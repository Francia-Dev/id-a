import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  usuario: Usuario[];

  ngOnInit() {
    this.findAll();
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
