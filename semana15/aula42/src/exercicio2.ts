// -- a) As entradas são os números, as saídas são as estatísticas

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]):Estatisticas {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// -- b)  const numerosOrdenados: number[]
 //       let soma: number 
 //       const estatisticas: Estatisticas

// -- c) 


type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (number: number[]) => Estatisticas
  }
  
  const amostraDeIdades: AmostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas
  }
  
