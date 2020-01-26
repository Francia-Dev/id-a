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

  constructor(private router: Router) { }

  ngOnInit() {
    if (Globals.USUARIO == undefined){
      this.router.navigate(['/login']);
      }
      else{
      this.usuario = Globals.USUARIO;
      
      }
  }

}
