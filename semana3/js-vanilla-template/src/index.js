//INTERPRETAÇÃO - EXERCÍCIO 1: PRIMEIRO SERÁ IMPRESSO 10, DEPOIS 10 5 
//INTERPRETAÇÃO - EXERCÍCIO 2: SERÁ IMPRESSO 10, 20, 10

//ESCRITA DE CÓDIGO - EXERCÍCIO 1:

let nome
let idade

console.log(typeof nome, typeof idade) // Foi impresso undefined pois as variáveis não possuem valor definido.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome, typeof idade) // Analisando o console, agora os valores passaram de undefined para string.

console.log("Olá " + nome +  ", você tem "  + idade + " anos.")


//ESCRITA DE CÓDIGO - EXERCÍCIO 2:

let endereço
let cor
let música
let filme
let livro

endereço = prompt("Qual o seu endereço?")
cor = prompt("Qual a sua cor favorita?")
música = prompt("Qual a sua música favorita?")
filme = prompt("Qual o seu filme favorito?")
livro = prompt("Qual o seu livro favorito?")

console.log("Qual o seu endereço? " + "Resposta: " + endereço)
console.log("Qual a sua cor favorita? " + "Resposta: " + cor)
console.log("Qual a sua música favorita? " + "Resposta: " + música)
console.log("Qual o seu filme favorito? " + "Resposta: " + filme)
console.log("Qual o seu livro favorito? " + "Resposta: " + livro)

//ESCRITA DE CÓDIGO - EXERCÍCIO 3:

let comidasFavoritas = ["feijoada", "pudim", "doritos", "picanha", "shimeji"]
console.log(comidasFavoritas)

console.log("Essas são minhas comidas preferidas: " )
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

let comida
comida = prompt("Qual a sua comida preferida?")
comidasFavoritas[1] = comida

console.log(comida)

//ESCRITA DE CÓDIGO - EXERCÍCIO 4:

const perguntas = ["Você é dev?", "O clima está bom hoje?", "Você está de preto?"]
let respostas = [true, false, true] 

console.log([perguntas[0]] + " " + [respostas[0]])
console.log([perguntas[1]] + " " + [respostas[1]])
console.log([perguntas[2]] + " " + [respostas[2]])