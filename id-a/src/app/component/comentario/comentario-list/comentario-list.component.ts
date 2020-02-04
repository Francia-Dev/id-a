import { Component, OnInit } from '@angular/core';
import { ComentarioService } from 'src/app/service/comentario/comentario.service';
import { Comentario } from 'src/app/model/comentario';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {

  constructor(private comentarioService: ComentarioService) { }

  comentario: Comentario[];

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.comentarioService.getAll().subscribe((comentarioOut: Comentario[]) => {
      this.comentario = comentarioOut;
    });
  }

}
