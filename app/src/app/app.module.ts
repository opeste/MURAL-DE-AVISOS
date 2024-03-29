import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './pessoa/consulta/consulta.component';
import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
 
import { routing } from './../app.routes';

import { ConfigService } from './services/config.service';
import { PessoaService } from './services/pessoa.service';
 


import { AppRoutingModule } from './app-routing.module';
 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    FormsModule,
    routing
  ],
  providers: [ConfigService,PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
