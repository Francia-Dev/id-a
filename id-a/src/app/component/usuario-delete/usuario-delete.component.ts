import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "", "", null, null, null);
  id: number;
  mensagem: String
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }
  btnClick(){
    this.usuarioService.delete(this.id).subscribe((mensagemOut: String) => {
      this.mensagem = mensagemOut;
      
    })

    alert("Usuario Deletado");
      this.mudarpag();
  }

  mudarpag(){
    this.router.navigate(['/homeusuario/usuarioAll']);
  }
}
