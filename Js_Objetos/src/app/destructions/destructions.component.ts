import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destructions',
  templateUrl: './destructions.component.html',
 
})
export class DestructionsComponent implements OnInit {
  nome!:string;
  pais!:string;
  idade: number = 0;
  destructuring = '';

  usuarios = [{
    nome: 'tony',
    idade: 48,
    pais: 'Brasil',
    conhecimentos: {
      tecnologias: ['java','js', 'docker'],
      tooth: ['Spring', 'visual Studio Code'],

    }
  }, {
    nome: 'debora',
    idade: 43,
    pais: 'Portugal',
    conhecimentos: {
      tecnologias: ['java','js', 'docker'],
      tooth: ['Spring', 'visual Studio Code'],

    }
  }, {
    nome: 'juan',
    idade: 14,
    pais: 'França',
    conhecimentos: {
      tecnologias: ['java','js', 'docker'],
      tooth: ['Spring', 'visual Studio Code'],

    }
  }];
  constructor() {
    // LOOPs para interar Objetos

   }

  ngOnInit(): void {
    //atribuindo valores a VAR de forma tradicional sem destructurin
    this.nome = this.usuarios[0].nome;
    this.pais = this.usuarios[0].pais;

    /** usando o Destruction, Não aceita usar VARIAVEIS  GLOBAIS, ex: this.idade 
     * DESTRUCTION é a forma mais curta de pegar um valor de um OBJETO e por em uma CONST ou LET
      */
    const {nome: nome,idade: idade, pais: pais } = this.usuarios[0];
    const {nome: nome2, idade: idade2, pais: pais2, conhecimentos:{tecnologias:valorAninhado }} = this.usuarios[0];
    
   console.log('Idade via Destruction',nome, idade, pais);
   console.log('DESTRUCTURIM com objetos aninhados', nome2, idade2, pais2, valorAninhado );
  // Metodo Object.keys retorna uma array do Objecto
  const arrayObjeto = Object.keys(this.usuarios);
  console.log('Este é o Object.KEYS',arrayObjeto); // retorna uma array com quantidade de objeto por INDEX
  // temos o Object.Values que retorna um ARRAY de OBJETOS
  const arrayObjetoValue = Object.values(this.usuarios);
  console.log('Este é o Object.VALUES',arrayObjetoValue); 


  }

}
