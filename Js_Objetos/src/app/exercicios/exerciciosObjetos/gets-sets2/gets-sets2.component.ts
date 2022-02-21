import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gets-sets2',
  templateUrl: './gets-sets2.component.html',
  
})
export class GetsSets2Component implements OnInit {
  usuario: any = new Object();

  usuarios = [
    {
      nome: 'tony',
      idade: 48,
    },
    {
      nome: 'debora',
      idade: 43,
    },
    {
      nome: 'juan',
      idade: 14,
    },
  ];
  constructor() {
    this.usuario = {
      localUsuarios:this.usuarios,
      posicao: 0,
      get atual(){
        return this.localUsuarios[this.posicao];
      },
      set atual(index: number){
      this.posicao = index;
      },
      proximo(){this.posicao ++;},
      anterior(){this.posicao--;}
    }
   }

  ngOnInit(): void {
    console.group('Objetos Set e Gets');
    console.log('Posição do Index 0: ',this.usuario);
    console.log('Posição do Index 0: ',this.usuario.atual.nome);
    this.usuario.atual = 2;
    console.log('Posição do Index 2: ',this.usuario.atual.nome);
    this.usuario.anterior();
    console.log('Posição do Index 1: ',this.usuario.atual.nome);
    this.usuario.anterior();
    console.log('Posição do Index 0: ',this.usuario.atual.nome);
    this.usuario.proximo();
    this.usuario.proximo();
    console.log('Posição do Index 2: ',this.usuario.atual.nome);
    this.usuario.atual = 0;
    console.log('Posição do Index 0: ',this.usuario.atual.nome);

    console.groupEnd()
  }

}
