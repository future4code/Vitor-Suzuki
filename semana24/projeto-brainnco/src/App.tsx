import React, { useEffect, useState } from 'react';
import { Container, Title, LoadingContainer } from "./styles"
import api from './api'
import logo from "./assets/logo.png"
import { LotteriesContests, Contest } from "./model/types"
import Sidebar from "./components/Sidebar"
import CircularProgress from '@mui/material/CircularProgress';

const App: React.FC = () => {
  const [lotteries, setLotteries] = useState([])
  const [contests, setContests] = useState<LotteriesContests[]>([])
  const [currentContest, setCurrentContest] = useState<Contest | undefined>(undefined)
  const [lotteryId, setLotteryId] = useState("")
  const colors = {
    "mega-sena": '#6BEFA3',
    "quina": '#8666EF',
    "lotofacil": '#DD7AC6',
    "lotomania": '#FFAB64',
    "timemania": '#5AAD7D',
    "Dia de sorte": '#BFAF83',
  }
  const transformDate = () => {
    return currentContest?.data.split('T')[0].split('-').reverse().join('/')
  }

  useEffect(() => {
    api('getLotteries').then(res => setLotteries(res.data))
    api('getLotteriesContests').then(res => {
      setContests(res.data)
      api('getContestById', res.data[0].concursoId)
        .then(res => setCurrentContest(res.data))
    })

  }, [])


  useEffect(() => {
    const id = contests.find(item => Number(item.loteriaId) === Number(lotteryId))?.concursoId
    console.log(lotteryId, id)
    api('getContestById', id)
      .then(res => setCurrentContest(res.data))
  }, [lotteryId])

  if (!currentContest) return <LoadingContainer><CircularProgress /></LoadingContainer>

  return (
    <Container>
      <section>
        <Sidebar color={Object.values(colors)[Number(lotteryId)]} />
        <select onChange={e => setLotteryId(e.target.value)}>
          {lotteries.map(({ nome, id }) => <option value={id}>{nome}</option>)}
        </select>
        <Title>
          <img src={logo} alt={"logo"} />
          <h1>{Object.keys(colors)[Number(lotteryId)].toUpperCase()}</h1>
        </Title>
        <div>
          <p>Concurso</p>
          {<p>{currentContest.id} - {transformDate()}</p>}
        </div>
      </section>
      <section>
        {currentContest.numeros.map((num) => <b>{num}</b>)}
      </section>
    </Container>
  );
}

export default App;
