import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-usuario-id',
  templateUrl: './usuario-id.component.html',
  styleUrls: ['./usuario-id.component.css']
})
export class UsuarioIdComponent implements OnInit {

  

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

}
