import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gets-sets-no-objeto',
  templateUrl: './gets-sets-no-objeto.component.html',
  
})
export class GetsSetsNoObjetoComponent implements OnInit {
  // Usaremos os Metodos GET e SET para Atuar sobre um OBJETO
  // Usaremos um ARRAY de Objetos, para index será um objeto
  usuarios = [{
    nome: 'tony',
    idade: 48
  }, {
    nome: 'debora',
    idade: 43
  }, {
    nome: 'juan',
    idade: 14
  }];
  /**Criaremos um Objeto com a Função de adiantar e retorna e voltar na opsição, 
    quando navegarmos  pelo Objeto PESSOAS.**/
  usuario = {
    posicao: 0, //Key para irmos na posição pretendida do array de Objeto
    localUsuarios: this.usuarios,
    /**GET transforma a função em uma PROPRIEDADE, temos que retornar algo, 
     * vom isto não precisa INVOCAR mais como FUNÇÃO(Nao usa-se Parenteses ), mas somente como 
     * PROPRIEDADE console.log(this.usuario.atual); 
     * Quando for para PEGAR e RETORNAR um valor usamos o GET
     */
    get atual(){
      return this.localUsuarios[this.posicao];
    },
    /**SET transforma uma FUNÇÃO em uma PROPRIEDADE,
     *  com isto Não uso Paramentros na hora de tribuir valores
     *  this.usuario.atual = 2; // acessando via SET o Objeto e ATRIBUINDO VALOR.
        console.log(this.usuario.atual);
        Quando for para ATRIBUIR um valor usamos o SET  **/
    set atual(posicao: any){  
      this.posicao = posicao;      
    },
    proximo() {
      this.posicao ++;
    },
    anterior() {
      this.posicao --;
    },


  };
  constructor() { }

  ngOnInit(): void {
    console.log(this.usuarios[0].nome);
    console.log(this.usuarios[1].nome);
    console.log(this.usuarios[2].nome);

    // Imprimindo o Objeto PESSOA com suas funções
    console.log(this.usuario.atual); // Acessamos ATUAL que agora é um PROPRIEDADE por causa do GET
    this.usuario.proximo();
    
    console.log(this.usuario.atual); 
    this.usuario.proximo(); // acessamos o PROXIMO INDEX.
    
    console.log(this.usuario.atual); 
    this.usuario.proximo(); // acessamos o PROXIMO INDEX.
    
    this.usuario.anterior(); // acessamos o ANTERIOR INDEX.
    console.log(this.usuario.atual); 

    this.usuario.anterior(); // acessamos o ANTERIOR INDEX.
    console.log(this.usuario.atual); 

    this.usuario.anterior(); // acessamos o ANTERIOR INDEX.
    console.log(this.usuario.atual); 

    this.usuario.atual = 0; // acessando via SET o Objeto e ATRIBUINDO VALORo.
    console.log(this.usuario.atual); 
    this.usuario.atual = 1; // acessando via SET o Objeto e ATRIBUINDO VALOR.
    console.log(this.usuario.atual); 
    this.usuario.atual = 2; // acessando via SET o Objeto e ATRIBUINDO VALOR.
    console.log(this.usuario.atual); 
  }

}
