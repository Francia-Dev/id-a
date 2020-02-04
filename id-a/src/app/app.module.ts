import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RodapeComponent } from './component/rodape/rodape.component';
import { SobreComponent } from './component/sobre/sobre.component';
import { ContatoComponent } from './component/contato/contato.component';
import { HomeComponent } from './component/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { PostListComponent } from './component/post-list/post-list.component';
import { PostIdComponent } from './component/post-id/post-id.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { UsuariosListaComponent } from './component/usuarios-lista/usuarios-lista.component';
import { UsuariosNovoComponent } from './component/usuarios-novo/usuarios-novo.component';
import { HomeusuarioComponent } from './component/homeusuario/homeusuario.component';
import { AjudaComponent } from './component/ajuda/ajuda.component';
import { PostUpdateComponent } from './component/post-update/post-update.component';
import { PostInsertComponent } from './component/post-insert/post-insert.component';
import { CategoriaIdComponent } from './component/categoria/categoria-id/categoria-id.component';
import { CategoriaInsertComponent } from './component/categoria/categoria-insert/categoria-insert.component';
import { CategoriaListComponent } from './component/categoria/categoria-list/categoria-list.component';
import { CategoriaUpdateComponent } from './component/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './component/categoria/categoria-delete/categoria-delete.component';
import { ComentarioIdComponent } from './component/comentario/comentario-id/comentario-id.component';
import { ComentarioInsertComponent } from './component/comentario/comentario-insert/comentario-insert.component';
import { ComentarioListComponent } from './component/comentario/comentario-list/comentario-list.component';
import { ComentarioUpdateComponent } from './component/comentario/comentario-update/comentario-update.component';
import { ComentarioDeleteComponent } from './component/comentario/comentario-delete/comentario-delete.component';
import { ComunidadeIdComponent } from './component/comunidade/comunidade-id/comunidade-id.component';
import { ComunidadeInsertComponent } from './component/comunidade/comunidade-insert/comunidade-insert.component';
import { ComunidadeListComponent } from './component/comunidade/comunidade-list/comunidade-list.component';
import { ComunidadeUpdateComponent } from './component/comunidade/comunidade-update/comunidade-update.component';
import { ComunidadeDeleteComponent } from './component/comunidade/comunidade-delete/comunidade-delete.component';
import { PostDeleteComponent } from './component/post-delete/post-delete.component';
import { UsuarioIdComponent } from './component/usuario-id/usuario-id.component';
import { UsuarioDeleteComponent } from './component/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './component/usuario-update/usuario-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RodapeComponent,
    SobreComponent,
    ContatoComponent,
    HomeComponent,
    PostListComponent,
    PostIdComponent,
    CadastroComponent,
    LoginComponent,
    UsuariosListaComponent,
    UsuariosNovoComponent,
    HomeusuarioComponent,
    AjudaComponent,
    PostUpdateComponent,
    PostInsertComponent,
    CategoriaIdComponent,
    CategoriaInsertComponent,
    CategoriaListComponent,
    CategoriaUpdateComponent,
    CategoriaDeleteComponent,
    ComentarioIdComponent,
    ComentarioInsertComponent,
    ComentarioListComponent,
    ComentarioUpdateComponent,
    ComentarioDeleteComponent,
    ComunidadeIdComponent,
    ComunidadeInsertComponent,
    ComunidadeListComponent,
    ComunidadeUpdateComponent,
    ComunidadeDeleteComponent,
    PostDeleteComponent,
    UsuarioIdComponent,
    UsuarioDeleteComponent,
    UsuarioUpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
