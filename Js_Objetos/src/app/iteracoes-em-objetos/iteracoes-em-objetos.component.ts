import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteracoes-em-objetos',
  templateUrl: './iteracoes-em-objetos.component.html',
  
})
export class IteracoesEmObjetosComponent implements OnInit {


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
  constructor() { }

  ngOnInit(): void {
    /**
     * Para iterar em um OBJETO temos que saber o tamanho do mesmo, o laço FOR não faz isto sozinho
     * por isto temos que usar o Objeto.keys() para saber o tamanho do mesmo.
     * **/ 
     const prop = Object.keys(this.usuarios);
     const propValue = Object.values(this.usuarios);
    //  console.log(prop);
    /**Agora ao Inves de iterar sobre sobre o OBJETO, iremos iterar sobre a VAR 
     * PROP, pois nela tem o tamanho do objeto.
     */
    for (let index = 0; index < propValue.length; index++) {
      const element = prop[index];
      console.log(element);
    }

    /**
     * Temos o FOR OF que itera sobre as propriedade de um OBJETO
     */

    for (const iterator of this.usuarios) {
      console.log(`FOR OF ${iterator.nome}`);
      console.log(`FOR OF ${iterator.idade}`);
      console.log(`FOR OF ${iterator.pais}`);
      console.log(`FOR OF ${iterator.conhecimentos.tecnologias}`);
    }
  /**
     * Temos o FOR IN que é o proprio para iterar OBJETOs, onde ele já
     * vem o filtro do prototype.hasOwnProperty.call(this.usuarios, key), que só
     * permite que neste OBJETO venha PROPRIEDADES deste objeto, com isto NÃO vem o PROPETYPE de outros Objetos
     * que protege em caso de não existir o index.
     * são retornado as KEYS E PROPRIEDADES do Objeto
   */
    
    for (const key in this.usuarios) {
      if (Object.prototype.hasOwnProperty.call(this.usuarios, key)) {
        const element = this.usuarios[key];
        console.log(element);
        
      }
    }
  }

}//end class
