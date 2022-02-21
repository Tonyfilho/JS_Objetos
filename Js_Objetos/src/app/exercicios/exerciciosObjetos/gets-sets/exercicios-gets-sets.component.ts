import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicios-gets-sets',
  templateUrl: './exercicios-gets-sets.component.html',
})
export class ExerciciosGetsSetsComponent implements OnInit {
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
  usuario: any = {};
  constructor() {    
    this.usuario = {
      localUsuarios:this.usuarios,
      posicao: 0,
      get atual() {
        return this.localUsuarios[this.posicao];
      },
      set atual(localPosicao: number) {
        this.posicao = localPosicao;
      },
      proximo() {
        this.posicao++;
      },
      anterior() {
        this.posicao--;
      },
    };
  }

  ngOnInit(): void {
    console.group('Grupo de Objetos')
    console.log(this.usuarios)
    console.log('Index 0',this.usuario.atual);
    this.usuario.atual = 1
    console.log('Index 1',this.usuario.atual);
    
    this.usuario.atual = 2
    console.log('Index 2',this.usuario.atual);
    this.usuario.anterior();
    console.log('Volta p/Index 1',this.usuario.atual);
    this.usuario.anterior();
    console.log('Volta p/Index 0',this.usuario.atual);
    this.usuario.proximo();
    this.usuario.proximo()
    console.log('Avança p/Index 2',this.usuario.atual);
    this.usuario.atual = 0;
    console.log('inicia no /Index 0',this.usuario.atual);


    console.groupEnd();
  }
}
