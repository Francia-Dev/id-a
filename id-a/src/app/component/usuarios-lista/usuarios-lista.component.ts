import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  usuario: Usuario[];

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.usuarioService.getAll().subscribe((usuarioOut: Usuario[]) => {
      this.usuario = usuarioOut;
    })
  }
}
