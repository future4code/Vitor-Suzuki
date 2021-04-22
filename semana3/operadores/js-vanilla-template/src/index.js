// INTERPRETAÇÃO DE CÓDIGO - EXERCÍCIO 1:

a. false
b. false
c. false
e. boolean 

// INTERPRETAÇÃO DE CÓDIGO - EXERCÍCIO 2:

a. undefined
b. null
c. 11
d. 3
e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
f. 9

// ESCRITA DE CÓDIGO - EXERCÍCIO 1:

let idadeUsuario = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo)
console.log(idadeUsuario -  idadeAmigo) 

// ESCRITA DE CÓDIGO - EXERCÍCIO 2:

let numeroPar = prompt("Insira um número par: ")
console.log(numeroPar % 2)  // Nota-se que o resultado impresso será sempre zero. 
                            // Caso o usuário insira um número ímpar, o resultado impresso será um (1).

// ESCRITA DE CÓDIGO - EXERCÍCIO 3:

let listaDeTarefas = []
let resposta1 = prompt("Cite uma tarefa diária: ")
let resposta2 = prompt("Cite outra tarefa diária: ")
let resposta3 = prompt("Cite mais uma tarefa diária: ")

listaDeTarefas.push(resposta1)
listaDeTarefas.push(resposta2)
listaDeTarefas.push(resposta3)
console.log(listaDeTarefas)

let indice = prompt("Digita o índice (0, 1 ou 2) de uma tarefa já realizada: ")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)

ESCRITA DE CÓDIGO - EXERCÍCIO 4: 

let emailDoUsuario = prompt("Digite seu e-mail: ")
let nomeDoUsuario = prompt("Digite o seu nome: ")
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. " + "Seja bem-vindo(a), " + nomeDoUsuario)

// DESAFIO - 1

let a = (77 - 32) * 5 / 9 + 273.15 // 298.15 K
console.log(a)

let b = (80) * 9 / 5 + 32 // 176 F
console.log(b)

let c = (30) * 9 / 5 + 32 // 86 F
console.log(c)

let d = (65.75 - 32) * 5 / 9 + 273.15 // 291.9 K
console.log(d)

let celsius = prompt("Insira uma temperatura em graus Celsius: ")
let fahrenheit = celsius * 9 / 5 + 32
console.log(fahrenheit)





