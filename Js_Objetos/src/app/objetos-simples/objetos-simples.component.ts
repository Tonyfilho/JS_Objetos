import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objetos-simples',
  templateUrl: './objetos-simples.component.html',
  
})
export class ObjetosSimplesComponent implements OnInit {
   pessoas = {
     nome: 'tony Filho',
     ['ultimo-nome']: 'filho', // somente usamos o COCHETES quando precisamos por caracteres especiais nas KEYS
     idade: 48,
     youtube: 'semCanal',
     cidade: 'setubal',
     hobbies: ['wineHouse', 'drones','RC'],
     competencias: {
       linguages: ['Js','Java','typeScript'],
       tools: ['Visual Studio Code', 'Spring-Boot']
     }
    };
    // Criando um Objeto com Função,ou Variaveis como Properties das KEYS
    cor = 'azul';
    idade = 48;
    usuarios = {
      digaOi: function(nome: any) {
         return `Ola ${nome}`;
      },
      cor: this.cor,
      idade: this.idade
    }
    // Aninhando OBJETOS, juntando o Objeto Pessoas e Usuarios*********************************
    // Usaremos um Metodo o Objeto ASSIGN, pode juntar ou alterar um que existe
    objetosJuntados = Object.assign(this.pessoas, this.usuarios);

    //**********SPREAD***************** */ Usando o SPREAD Forma simples Gerar um Objeto novo e  juntar los.

    objetosJuntados2 = { ...this.usuarios, ...this.pessoas}
    // Usar uma Var como KEY e ela ficar DINAMICA;
    keyNomeDinamico = 'estado';
     usuario2 = {
       nome: 'tony',
       [this.keyNomeDinamico]: 'Setúbal',
     }
    
   


  
  constructor() {    
   //  this.pessoas.ano = 2022; No Angula não se aceita adcionar propriedades depois do Objeto criado. Diferentemente do JS.
  // this.localAssign.pro
   
  }
  
  ngOnInit(): void {
    console.table(this.pessoas);
    // ou 
    // console.log(this.pessoas.nome);
    // console.log(this.pessoas['ultimo-nome']); //Quando usamos COCHETES nas KEYS, temos que passar os nomes entre ASPAS
    // console.log(this.pessoas.idade);
    // console.log(this.pessoas.youtube);
    // console.log(this.pessoas.cidade);
    //ou
    // console.log(this.pessoas['nome']);
    // console.log(this.pessoas['ultimo-nome']);
    // console.log(this.pessoas['idade']);
    // console.log(this.pessoas['youtube']);
    // console.log(this.pessoas['cidade']);

    // Imprimindo o Objeto com a função, o Nome da Função é a KEY
  //   console.log(this.usuarios.digaOi('Antonio'));
  //   // Imprimindo os Objetos que foram JUNTADOS
  //  console.log(this.objetosJuntados);
  //  console.log('Com SPREAD',this.objetosJuntados2);
  //  console.log('Objeto com KEY Dinamica ', this.usuario2);

  }
   //Objeto é tipo de dados que permite armazena, uma outra coleção de heys e valores.
}
