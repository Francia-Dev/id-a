import { Component, OnInit } from '@angular/core';
import { ComunidadeService } from 'src/app/service/comunidade/comunidade.service';
import { Comunidade } from 'src/app/model/comunidade';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comunidade-delete',
  templateUrl: './comunidade-delete.component.html',
  styleUrls: ['./comunidade-delete.component.css']
})
export class ComunidadeDeleteComponent implements OnInit {

  comunidade: Comunidade = new Comunidade(0,"",null,null, null)
  id: number;
  mensagem: String
  constructor(private comunidadeService: ComunidadeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];
    this.id = id
    this.comunidadeService.getById(id).subscribe((comunidadeOut: Comunidade) =>{
      this.comunidade = comunidadeOut;
     
    }, err => {
      alert(`Id não encontrado`);
    })
  }

  btnClick(){
    this.comunidadeService.delete(this.id).subscribe((mensagemOut: String) => {
      this.mensagem = mensagemOut;
      alert("Comunidade Deletada");
      this.mudarpag();

    }, err => {
      alert(`Id não encontrado`);
      this.router.navigate(['homeusuario/comunidadeAll']);
    })

    
  }

  mudarpag(){
    this.router.navigate(['/homeusuario/comunidadeAll']);
  }
}
