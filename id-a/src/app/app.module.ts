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
    PostInsertComponent
    
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
