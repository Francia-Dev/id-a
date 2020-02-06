import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-id',
  templateUrl: './usuario-id.component.html',
  styleUrls: ['./usuario-id.component.css']
})
export class UsuarioIdComponent implements OnInit {

  id: number;
  nomeUsuario: string;
  usuario: Usuario = new Usuario(0, "", "", "", "", null, null, null)
  

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  btnClick(){
    this.usuarioService.getById(this.id).subscribe((usuarioOut: Usuario) => {
      this.usuario = usuarioOut;
      console.log(this.usuario)
    }, err => {
      alert(`Id não encontrado`);
      this.router.navigate(['homeusuario/usuarioAll']);
    });
    
  }
  
}
