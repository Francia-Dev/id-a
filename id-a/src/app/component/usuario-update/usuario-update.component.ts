import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "", "", null, null, null)
  id: number;
  constructor(private usuarioService: UsuarioService, private router: Router) { }

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
  alterar(){
    if (this.usuario.idUsuario != 0){
      this.usuarioService.update(this.usuario).subscribe((usuarioOut: Usuario) =>{
      this.usuario = usuarioOut;
      
      console.log(this.usuario);
      alert("Usuario alterado com sucesso!");
      Globals.USUARIO = this.usuario;
      localStorage.setItem("usuarioNome", String(Globals.USUARIO.nome));
      this.router.navigate(['/homeusuario/usuarioAll']);
      })
    } 
    
  }
}
