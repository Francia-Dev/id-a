import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Globals } from 'src/app/model/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeusuario',
  templateUrl: './homeusuario.component.html',
  styleUrls: ['./homeusuario.component.css'],
  providers: [ Globals ]
})
export class HomeusuarioComponent implements OnInit {

  usuario: Usuario
  adm: Boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    
    let idUsuario: number;
    idUsuario = parseInt(localStorage.getItem("usuarioId"));
    if(idUsuario){
      let usuario = new Usuario(0, "", "", "", "", null, null, null)
      Globals.USUARIO = usuario;
      Globals.USUARIO.idUsuario = idUsuario;
      Globals.USUARIO.nome = localStorage.getItem("usuarioNome");
    }
    if (Globals.USUARIO == undefined){
      this.router.navigate(['/login']);
      } else{
      this.usuario = Globals.USUARIO;
      
      }
  }
}
