type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// -- a) Para gerar um arquivo .js, com a extensão instalada eu rodaria o comando tsc ./src/exercicio-4.ts. 
// -- b) O arquivo já se encontra em uma pasta src, logo o comando será o mesmo (tsc ./src/exercicio-4.ts). Caso não estivesse, o comando seria tsc ./exercicio-4.ts .
// -- c) O comando "tsc", sem adições, converte todos os arquivos .ts que encontrar na pasta.