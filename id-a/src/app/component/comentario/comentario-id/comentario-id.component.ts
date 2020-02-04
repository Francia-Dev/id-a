import { Component, OnInit } from '@angular/core';
import { ComentarioService } from 'src/app/service/comentario/comentario.service';
import { Comentario } from 'src/app/model/comentario';

@Component({
  selector: 'app-comentario-id',
  templateUrl: './comentario-id.component.html',
  styleUrls: ['./comentario-id.component.css']
})
export class ComentarioIdComponent implements OnInit {

  comentario: Comentario = new Comentario(0,"",null,null)
  id:number;
  
  constructor(private comentarioService: ComentarioService) { }

  ngOnInit() {
  }
  btnClick(){
    this.comentarioService.getById(this.id).subscribe((comentarioOut: Comentario) => {
      this.comentario = comentarioOut;
    })
  }
}
