import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObjetosSimplesComponent } from './objetos-simples/objetos-simples.component';
import { GetsSetsNoObjetoComponent } from './gets-sets-no-objeto/gets-sets-no-objeto.component';
import { DestructionsComponent } from './destructions/destructions.component';
import { IteracoesEmObjetosComponent } from './iteracoes-em-objetos/iteracoes-em-objetos.component';
import { ExerciciosGetsSetsComponent } from './exercicios/exerciciosObjetos/gets-sets/exercicios-gets-sets.component';
import { GetsSets2Component } from './exercicios/exerciciosObjetos/gets-sets2/gets-sets2.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjetosSimplesComponent,
    GetsSetsNoObjetoComponent,
    DestructionsComponent,
    IteracoesEmObjetosComponent,
    ExerciciosGetsSetsComponent,
    GetsSets2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
