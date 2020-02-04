import { Component, OnInit } from '@angular/core';
import { ComunidadeService } from 'src/app/service/comunidade/comunidade.service';
import { Comunidade } from 'src/app/model/comunidade';

@Component({
  selector: 'app-comunidade-id',
  templateUrl: './comunidade-id.component.html',
  styleUrls: ['./comunidade-id.component.css']
})
export class ComunidadeIdComponent implements OnInit {

  comunidade: Comunidade = new Comunidade(0,"",null,null, null)
  id: number;
  
  constructor(private comunidadeService: ComunidadeService) { }

  ngOnInit() {
  }
  btnClick(){
    this.comunidadeService.getById(this.id).subscribe((comunidadeOut: Comunidade) => {
      this.comunidade = comunidadeOut;
    })
  }
}
