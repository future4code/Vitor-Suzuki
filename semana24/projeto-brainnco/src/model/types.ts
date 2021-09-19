export type Contest = {
    data: string
    id: string
    loteria: number
    numeros: string[]
  }
  
export type LotteriesContests = {
    concursoId: string
    loteriaId: string
  }

export type Props = {
    color: string
}