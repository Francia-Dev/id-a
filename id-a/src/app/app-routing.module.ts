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
import { PostDeleteComponent } from './component/post-delete/post-delete.component';
import { UsuarioIdComponent } from './component/usuario-id/usuario-id.component';
import { UsuarioUpdateComponent } from './component/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './component/usuario-delete/usuario-delete.component';
import { ComunidadeListComponent } from './component/comunidade/comunidade-list/comunidade-list.component';
import { ComunidadeIdComponent } from './component/comunidade/comunidade-id/comunidade-id.component';
import { ComunidadeInsertComponent } from './component/comunidade/comunidade-insert/comunidade-insert.component';
import { ComunidadeUpdateComponent } from './component/comunidade/comunidade-update/comunidade-update.component';
import { ComunidadeDeleteComponent } from './component/comunidade/comunidade-delete/comunidade-delete.component';
import { ComentarioListComponent } from './component/comentario/comentario-list/comentario-list.component';
import { ComentarioIdComponent } from './component/comentario/comentario-id/comentario-id.component';
import { ComentarioInsertComponent } from './component/comentario/comentario-insert/comentario-insert.component';
import { ComentarioUpdateComponent } from './component/comentario/comentario-update/comentario-update.component';
import { ComentarioDeleteComponent } from './component/comentario/comentario-delete/comentario-delete.component';
import { CategoriaListComponent } from './component/categoria/categoria-list/categoria-list.component';
import { CategoriaIdComponent } from './component/categoria/categoria-id/categoria-id.component';
import { CategoriaInsertComponent } from './component/categoria/categoria-insert/categoria-insert.component';
import { CategoriaUpdateComponent } from './component/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './component/categoria/categoria-delete/categoria-delete.component';
import { UsuarioNomeComponent } from './component/usuario-nome/usuario-nome.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ajuda', component: AjudaComponent},

  {path: 'postUpdate', component: PostUpdateComponent},
  {path: 'postInsert', component: PostInsertComponent},
  {path: 'postDelete', component: PostDeleteComponent},
  {path: 'postId', component: PostIdComponent},
  {path: 'postAll', component: PostListComponent},

  
  //{path: 'novoUsuario', component: UsuariosNovoComponent},
  
  {path: 'homeusuario', component: HomeusuarioComponent, 
    children: [
      {path: '', component: PostListComponent},
      {path: 'postUpdate', component: PostUpdateComponent},
      {path: 'homeusuario/postUpdate/:id', component: PostUpdateComponent},
      {path: 'postInsert', component: PostInsertComponent},
      {path: 'postDelete', component: PostDeleteComponent},
      {path: 'homeusuario/postDelete/:id', component: PostDeleteComponent},
      {path: 'postId', component: PostIdComponent},
      {path: 'homeusuario/postId/:id', component: PostIdComponent},
      {path: 'postAll', component: PostListComponent},
    
      {path: 'usuarioAll', component: UsuariosListaComponent},
      {path: 'usuarioId', component: UsuarioIdComponent},
      {path: 'usuarioUpdate', component: UsuarioUpdateComponent},
      {path: 'usuarioUpdate/:id', component: UsuarioUpdateComponent},
      {path: 'usuarioDelete', component: UsuarioDeleteComponent},
      {path: 'usuarioDelete/:id', component: UsuarioDeleteComponent},
      {path: 'usuarioNome', component: UsuarioNomeComponent},

      {path: 'comunidadeAll', component: ComunidadeListComponent},
      {path: 'comunidadeId', component: ComunidadeIdComponent},
      {path: 'comunidadeInsert', component: ComunidadeInsertComponent},
      {path: 'comunidadeUpdate', component: ComunidadeUpdateComponent},
      {path: 'comunidadeUpdate/:id', component: ComunidadeUpdateComponent},
      {path: 'comunidadeDelete', component: ComunidadeDeleteComponent},
      {path: 'comunidadeDelete/:id', component: ComunidadeDeleteComponent},

      {path: 'comentarioAll', component: ComentarioListComponent},
      {path: 'comentarioId', component: ComentarioIdComponent},
      {path: 'comentarioInsert', component: ComentarioInsertComponent},
      {path: 'comentarioUpdate', component: ComentarioUpdateComponent},
      {path: 'comentarioUpdate/:id', component: ComentarioUpdateComponent},
      {path: 'comentarioDelete', component: ComentarioDeleteComponent},
      {path: 'comentarioDelete/:id', component: ComentarioDeleteComponent},

      {path: 'categoriaAll', component: CategoriaListComponent},
      {path: 'categoriaId', component: CategoriaIdComponent},
      {path: 'categoriaInsert', component: CategoriaInsertComponent},
      {path: 'categoriaUpdate', component: CategoriaUpdateComponent},
      {path: 'categoriaUpdate/:id', component: CategoriaUpdateComponent},
      {path: 'categoriaDelete', component: CategoriaDeleteComponent},
      {path: 'categoriaDelete/:id', component: CategoriaDeleteComponent}
    ]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
