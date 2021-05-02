//Exercício 1

function inverteArray(array) {
   let arrInvertido = array.reverse()
   return arrInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   let aoQuadrado = [];

   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         aoQuadrado.push((array[i] * array[i]));
      }
   }
   return aoQuadrado;
}

//Exercício 3

function retornaNumerosPares(array) {
   let numerosPares = [];

   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         numerosPares.push(array[i]);
      }
   }
   return numerosPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = []

   for (let i = 0; i < array.length; i++) {
      if (array[i] > maiorNumero) {
         maiorNumero = array[i]
      }
   }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const respostas = [false, false, true, true, true]
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   let arr = []
   for (i = 0; arr.length < n; i++) {
      if (i % 2 === 0) {
         arr.push(i)
      }
   }

   return arr
}

// Exercício 8

function checaTriangulo(a, b, c) {
   return (a === b && b === c) && 'Equilátero' ||
      (a === b || a === c || b === c) && 'Isósceles' ||
      'Escaleno';
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   const doisNumeros = {}

   if (num1 > num2) {
      doisNumeros.maiorNumero = num1
      doisNumeros.diferenca = num1 - num2
   } else {
      doisNumeros.maiorNumero = num2
      doisNumeros.diferenca = num2 - num1
   }

   if (((num1 > num2) && (num1 % num2 === 0)) || ((num2 > num1) && (num2 % num1 === 0))) {
      doisNumeros.maiorDivisivelporMenor = true
   }


   return doisNumeros

}

// Exercício 10

function segundoMaiorEMenor(array) {
   let maiorNumero = Infinity;
   let menorNumero = 0;
   for (let numero of array) {
      if (numero > menorNumero) {
         maiorNumero = numero
      }
      if (numero < maiorNumero) {
         menorNumero = numero;
      }
   }

   let segundoMaiorNumero = 0;
   let segundoMenorNumero = Infinity;
   for (let numero of array) {
      if (numero !== menorNumero) {
         if (numero < segundoMenorNumero) {
            segundoMenorNumero = numero
         }
      }
      if (numero !== maiorNumero) {
         if (numero > segundoMaiorNumero) {
            segundoMaiorNumero = numero;
         }
      }
   }

   return [segundoMaiorNumero, segundoMenorNumero]

}

//Exercício 11

function ordenaArray(array) {
   let len = array.length;
   for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
         if (array[j] > array[j + 1]) {
            let tmp = array[j]; //20
            array[j] = array[j + 1]; //13
            array[j + 1] = tmp; //20
         }
      }
   }
   return array;
}

// Exercício 12

function filmeFavorito() {
   const filmeInfo = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   return filmeInfo
}

// Exercício 13

function imprimeChamada() {
   const filmeInfo = filmeFavorito()
   return `Venha assistir ao filme ${filmeInfo.nome}, de ${filmeInfo.ano}, dirigido por ${filmeInfo.diretor} e estrelado por${filmeInfo.atores.map(ator => (` ${ator}`))}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   return {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   pessoa.nome = 'ANÔNIMO'

   return pessoa
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   return arrayDePessoas.filter(pessoa => (pessoa.idade >= 20))
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   return arrayDePessoas.filter(pessoa => (pessoa.idade < 20))
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   return array.map(numero => numero * 2)
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   return array.map(numero => String(numero * 2))
}

// Exercício 17, letra C

function verificaParidade(array) {
   return array.map(numero => numero % 2 === 0 ? `${numero} é par` : `${numero} é ímpar`)
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   return pessoas.filter(pessoa => (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5))
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   return pessoas.filter(pessoa => !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5))
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

//Exercício 19, letra A

function ordenaPorNome() {
   for(let i = 0; i < consultasNome.length; i++) {
      for(let j = 0; j < consultasNome.length; j++) {
        if(consultasNome[j]?.nome > consultasNome[j + 1]?.nome) {
          const temp = consultasNome[j]
          consultasNome[j] = consultasNome[j + 1]
          consultasNome[j + 1] = temp
        }
      }
    }
    return consultasNome
  }

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {
   for(let i = 0; i < consultasData.length; i++) {
      for(let j = 0; j < consultasData.length - i - 1; j++) {
  
        const arrayData1 = consultasData[j].dataDaConsulta.split('/')
        const dia1 = Number(arrayData1[0])
        const mes1 = Number(arrayData1[1])
        const ano1 = Number(arrayData1[2])
  
        const arrayData2 = consultasData[j + 1].dataDaConsulta.split('/')
        const dia2 = Number(arrayData2[0])
        const mes2 = Number(arrayData2[1])
        const ano2 = Number(arrayData2[2])
  
        const data1 = new Date(ano1, mes1 -1, dia1).getTime()
        const data2 = new Date(ano2, mes2-1, dia2).getTime()
  
        if(data1 > data2) {
          const temp = consultasData[j]
          consultasData[j] = consultasData[j + 1]
          consultasData[j + 1] = temp
        }
      }
    }
    return consultasData
}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   contas.forEach((conta) => {
      let totalDeCompras = 0
      conta.compras.forEach((valor) => {
        totalDeCompras += valor
      })
      conta.saldoTotal -= totalDeCompras
    })
    return contas
}