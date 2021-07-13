// -- a) O terminal apresenta um erro, dizendo que type number não é atribuível à type string.

let minhaString: string = "Oiii"
// minhaString = 7

// -- b) 

let meuNumero: number | string = 7

// -- c) 

const Vitor = {
    nome: "Vitor",
    idade: 25,
    corFavorita: "preto"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const Guilherme: Pessoa = {
    nome: "Guilherme",
    idade: 15,
    corFavorita: "azul"
}

const Melissa: Pessoa = {
    nome: "Melissa",
    idade: 22,
    corFavorita: "azul"
}

const Mateus: Pessoa = {
    nome: "Mateus",
    idade: 24,
    corFavorita: "vermelho"
}

// -- d) 

enum CORES_ARCO_IRIS {
    VIOLETA = "VIOLETA",
    ANIL = "ANIL",
    AZUL = "AZUL",
    VERDE = "VERDE",
    AMARELO = "AMARELO",
    LARANJA = "LARANJA",
    VERMELHO = "VERMELHO"
}

type PessoaArcoIris = {
    nome: string,
    idade: number,
    corFavorita: CORES_ARCO_IRIS
}

const VitorArcoIris: PessoaArcoIris = {
    nome: "Vitor",
    idade: 25,
    corFavorita: CORES_ARCO_IRIS.LARANJA
}

const GuilhermeArcoIris: PessoaArcoIris = {
    nome: "Guilherme",
    idade: 15,
    corFavorita: CORES_ARCO_IRIS.AMARELO
}

const MelissaArcoIris: PessoaArcoIris = {
    nome: "Melissa",
    idade: 22,
    corFavorita: CORES_ARCO_IRIS.VERMELHO
}

const MateusArcoIris: PessoaArcoIris = {
    nome: "Mateus",
    idade: 24,
    corFavorita: CORES_ARCO_IRIS.AZUL
}

