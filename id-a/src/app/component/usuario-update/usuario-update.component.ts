import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

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
  }
  alterar(){
    if (this.usuario.idUsuario != 0){
      this.usuarioService.update(this.usuario).subscribe((usuarioOut: Usuario) =>{
      this.usuario = usuarioOut;
      
      console.log(this.usuario);
      alert("Usuario alterado com sucesso!");
      this.router.navigate(['/homeusuario/usuarioAll']);
      })
    } 
    
  }
}
