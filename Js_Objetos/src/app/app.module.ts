import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObjetosSimplesComponent } from './objetos-simples/objetos-simples.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjetosSimplesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
