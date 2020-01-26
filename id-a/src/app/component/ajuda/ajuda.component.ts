import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css']
})
export class AjudaComponent implements OnInit {

  constructor() { }
  
  nome: String;
  email: String;
  texto: String;

  erroNome: boolean = false;
  erroEmail: boolean = false;
  erroTexto: boolean = false;

  ngOnInit() {
  }

  enviar() {
    if(this.email == undefined){
      this.erroEmail = true;
    }    
      else if (this.email.indexOf('@') == -1){
        this.erroEmail = true;
      
      } else
        this.erroEmail = false;
    
    if (this.nome == undefined){
      this.erroNome = true
    }
      else if (this.nome.length < 1 ){
        this.erroNome = true
      }
    else
      this.erroNome = false;

      if (this.texto == undefined){
        this.erroTexto = true
      }
        else if (this.texto.length < 1 ){
          this.erroTexto = true
        }
      else
        this.erroTexto = false;

    if (this.erroNome == false && this.erroEmail == false && this.erroTexto == false) {
      alert("Pergunta enviada, em breve retornaremos.")//Função a ser incrementada futuramente.
    }  

  }
  
}


