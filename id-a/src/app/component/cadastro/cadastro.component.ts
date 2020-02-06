import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "", "", null, null, null);
  senhaConfirm: string;
  usuarios = []
  find: boolean;

  title = 'Projeto Angular';
   angForm: FormGroup;
   constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ],
       tel: ['', Validators.required ],
       password: ['', Validators.required ],
       passwordValidate: ['', Validators.required ],
    });
  }

  ngOnInit() {
  }
  btnClickComment(){
    if(this.usuario.senha == this.senhaConfirm && this.usuario.senha != null){
      document.getElementById("BotaoConfirma").style.visibility = "visible";
      document.getElementById("BotaoConfirma2").style.visibility = "visible";
      document.getElementById("BotaoVerifica").style.visibility = "hidden";
    };
  }

  cadastrar(){
    this.usuarioService.getAll().subscribe((usuarioOut: Usuario[]) => {
      this.usuarios = usuarioOut;

      this.validarCadastro();

    }, err =>{
      console.log(`Erro cod:  ${err.status}`);
    })
    
  }

  private validarCadastro() {
    this.find = false;
    this.usuarios.forEach(element => {
      if (element.email == this.usuario.email) {
        document.getElementById("statusLogin").style.visibility = "visible";
        this.find = true;
      }
    });
    if (this.find == false) {
      this.usuarioService.insert(this.usuario).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        document.getElementById("statusLogin").style.visibility = "hidden";
        alert("Usuario cadastrado com sucesso");
        this.router.navigate(['/login']);
      });
    } else {
        alert("Email em uso, escolha outro ou efetue o login");
        this.router.navigate(['/login']);
    }
  }

  atualizar(){
    this.usuarioService.getAll().subscribe((usuarioOut: Usuario[]) => {
      this.usuarios = usuarioOut;

      this.validarAtualizacao();
      
    }, err =>{
      console.log(`Erro cod:  ${err.status}`);
    })
    
  }

  private validarAtualizacao(){
    this.find = false
    this.usuarios.forEach(element => {
      if (element.email == this.usuario.email){
        this.usuario.idUsuario = element.idUsuario
        this.usuarioService.update(this.usuario).subscribe((usuario: Usuario) => {
          this.usuario = usuario
          
        }, err => {
          alert(`Erro ao atualizar usuario`);
        })
        document.getElementById("statusLogin").style.visibility = "visible";
        alert("Usuario alterado com sucesso");
        this.router.navigate(['/login']);
        this.find = true;
      }
    });
    if (this.find == false){
      document.getElementById("statusLogin").style.visibility = "visible";
      alert("Usuario não encontrado");
      document.getElementById("statusLogin").innerText = "Usuario não encontrado"
    }
  }
}

