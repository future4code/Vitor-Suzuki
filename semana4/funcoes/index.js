// --- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ----------------------------------------------------------------------------------


// -- EXERCÍCIO 1: 


// a.No console será impresso o valor da variavel "variavel" multiplicado por 5. Portanto, 10 e 50.
// b. Não apareceria nada no console.


// -- EXERCÍCIO 2:


// a. As saídas impressas no console serão as posições 0 e 1 do array, sendo elas "Darvas" e "Caio".
// b. Ambos os nomes seriam impressos (Amanda e Caio), já que as posições 0 e 1 do array continuam a existir.


// -- EXERCÍCIO 3:


// Esta função está dizendo que todo elemento par dentro do array deve ser inserido no arrayFinal. Um nome melhor para essa função poderia ser: inserirPar.


// --- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------------------------------------------------------------------------------


// -- EXERCÍCIO 4:


// a. function sobreMim() {
//        console.log("Eu sou Vitor, tenho 24 anos, sou músico e estudante da Labenu :) .")
//    }

//    sobreMim()

// b.   function personInfo(nome, idade, cidade, escolaridade) {
//           let info = ("Eu sou " + nome + ", tenho" + idade + " anos, " + "moro em " + cidade + " e" + escolaridade)
//           if (escolaridade = "sou estudante") {
//               true
//              }   else {
//                   false
//               }
       
//           return info; 
//    }


// -- EXERCÍCIO 5: 


// a. function somaDoisNumeros(n1, n2) {
//        const soma = n1 + n2 
//        return soma 
//    }

//    const resultado = somaDoisNumeros(5,2)
//    console.log(resultado)

// b. function maiorIgual(n1,n2) {
//        const igualdade = n1 >= n2 
//        return igualdade 
//    }

// c. function loop() {
//        let i 
//        for (i = 0; i < 10; i++) {
//            console.log("Eu tô em loop!")
//        }
    
//    }
//    loop()


// -- EXERCÍCIO 6:



// a. function arrayLength(array) {
//        for (let i = 0; i < array.length; i++) {
//            console.log(array[i])
//        }
//        return array.length
//    }

//    const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//    const tamanho = arrayLength(array)
//    console.log("Tamanho do array: ", tamanho)

// b. function numberEven(n) {
//        if (n % 2 == 0) {
//            return true
//        } else {
//            return false
//        }
//    }

// c. const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

//    function numeroPar(array) {
//      let quantidadePar = 0;

//      for (let i = 0; i < array.length; i++) {
//        if (array[i] % 2 == 0) {
//          quantidadePar++;
//        } 
//      }
//      return quantidadePar 
//    }

// d. const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

//    function numeroPar(array) {
//        function numberEven(n) {
//            if (n % 2 == 0) {
//                return true
//            } else {
//                return false
//            }
//        }
    
//        for (let i = 0; i < array.length; i++) {
//            if (array[i] % 2 == 0) {
//              quantidadePar++;
//            } 
//          }
//          return quantidadePar 
//    }


// --- DESAFIOS! -------------------------------------------------------------------------------------


// -- EXERCÍCIO 1:


// 1. let arrowFunction = (parametro) => {
//        console.log(parametro)
//    }


// 2. let outraFunction = (8, 9) => {
//        let soma = (8 + 9);
//    }

//    arrowFunction(soma)


// -- EXERCÍCIO 2:


