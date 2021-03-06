import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/globals';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ Globals ]
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "", "", null, null, null);

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    let idUsuario: number;
    idUsuario = parseInt(localStorage.getItem("usuarioId"));
    if(idUsuario){
      this.router.navigate(['/homeusuario'])
    }
  }

  verificar() {

    if (this.usuario.email == "") {
      document.getElementById("erroEmail").style.visibility = "visible";
      document.getElementById("erroSenha").style.visibility = "hidden";
    } else if (this.usuario.senha == ""){
      document.getElementById("erroSenha").style.visibility = "visible";
      document.getElementById("erroEmail").style.visibility = "hidden";
    } else {
      document.getElementById("erroSenha").style.visibility = "hidden";
      document.getElementById("erroEmail").style.visibility = "hidden";
      this.usuarioService.verificar(this.usuario).subscribe((usuarioOut: Usuario) => {
        this.usuario = usuarioOut;
        Globals.USUARIO = usuarioOut;

        localStorage.setItem("usuarioId", String(Globals.USUARIO.idUsuario));
        localStorage.setItem("usuarioNome", String(Globals.USUARIO.nome));
        alert("Usuário existente");
        this.router.navigate(['/homeusuario']);
      }, err =>{
        alert(`Email: ${this.usuario.email} não encontrado.`);
      
      })
    }
    
  }
}

