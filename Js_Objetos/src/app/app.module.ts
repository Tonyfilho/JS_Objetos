import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObjetosSimplesComponent } from './objetos-simples/objetos-simples.component';
import { GetsSetsNoObjetoComponent } from './gets-sets-no-objeto/gets-sets-no-objeto.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjetosSimplesComponent,
    GetsSetsNoObjetoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
