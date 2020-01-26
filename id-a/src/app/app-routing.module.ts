import { ContatoComponent } from './component/contato/contato.component';
import { SobreComponent } from './component/sobre/sobre.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostIdComponent } from './component/post-id/post-id.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { UsuariosListaComponent } from './component/usuarios-lista/usuarios-lista.component';
import { UsuariosNovoComponent } from './component/usuarios-novo/usuarios-novo.component';
import { LoginComponent } from './component/login/login.component';
import { HomeusuarioComponent } from './component/homeusuario/homeusuario.component';
import { AjudaComponent } from './component/ajuda/ajuda.component';
import { PostUpdateComponent } from './component/post-update/post-update.component';
import { PostInsertComponent } from './component/post-insert/post-insert.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'postId', component: PostIdComponent},
  {path: 'postAll', component: PostListComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'usuarios', component: UsuariosListaComponent},
  {path: 'novoUsuario', component: UsuariosNovoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'homeusuario', component: HomeusuarioComponent},
  {path: 'ajuda', component: AjudaComponent},
  {path: 'postUpdate', component: PostUpdateComponent},
  {path: 'postInsert', component: PostInsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
