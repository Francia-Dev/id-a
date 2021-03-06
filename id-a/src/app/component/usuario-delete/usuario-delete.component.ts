import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css'],
  providers: [ Globals ]

})
export class UsuarioDeleteComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "", "", null, null, null);
  id: number;
  mensagem: String

  userName: String;


  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) { }



  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];
    this.id= id
    if (id){
      this.usuarioService.getById(id).subscribe((usuarioOut: Usuario) =>{
        this.usuario.nome = usuarioOut.nome;
        this.usuario.email = usuarioOut.email;
      }, err => {
        alert(`Id não encontrado`);
      });
    }
    this.userName = Globals.USUARIO.nome;
  }
  btnClick(){
    this.usuarioService.delete(this.id).subscribe(() => {
    alert("Usuario Deletado");
    this.mudarpag();
      
    }, err => {
      alert(`Erro ao apagar usuario`);
      this.router.navigate(['/homeusuario/usuarioAll']);
    })

  }

  mudarpag(){
    this.router.navigate(['/homeusuario/usuarioAll']);
  }
}
