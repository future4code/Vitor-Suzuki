import { Button, Input, TextField, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Header, Img, H1, H2, SearchContainer, List, Container, Pagination, StyledPagination, SelectContainer, Loading } from './styled';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import useForm from '../../hooks/useForm'
import axios from 'axios'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { goToHomePage, goToTheftDetails } from '../../routes/coordinator';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }),
);

const HomePage = () => {
    const classes = useStyles();
    const date = new Date();
    const [form, onChange, clear] = useForm({ search: "", from: -14810451533, to: 32524998067 })
    const [bikes, setBikes] = useState([])
    const [page, setPage] = useState(1)
    const [per_page, setPer_page] = useState(10)
    const [count, setCount] = useState(1)
    const history = useHistory()
    const [error, setError] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        getAllBikes()
    }



    const getAllBikes = () => {
        setBikes(null)
        setCount(null)
        axios.get(`${process.env.REACT_APP_BASE_URL}/v3/search?page=${page}&per_page=${per_page}&query=${form.search}&stolenness=proximity&location=Berlin`)
            .then(res => {
                console.log(res.data.bikes)
                setBikes(res.data.bikes)
                getCount()
            })
            .catch(() => setError(true))
    }

    const getCount = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/v3/search/count?query=${form.search}`)
            .then(res => {
                const totalPages = Math.round((res.data.stolen / per_page))
                setCount(totalPages > 0 ? totalPages : 1)
            })
            .catch(() => setError(true))
    }

    useEffect(() => {
        getAllBikes()
    }, [])

    useEffect(() => {
        getAllBikes()
        console.log(page)
    }, [page, per_page])

    return (
        <Container>
            <Header onClick={() => goToHomePage(history)}>
                <Img src="https://bikeindex.org/assets/revised/logo-b5b90b10f3084a33e26097ffff6528ca15766eaeb008c5a6d0e242605ccad3b8.svg" />
                <H1>Police Department of Berlin</H1>
                <H2>Stolen Bykes</H2>
            </Header>
            {error ? <p>Ooops, something went wrong...</p> : <>
                <SearchContainer>
                    <form className={classes.container} noValidate onSubmit={onSubmitForm}>
                        <Input
                            placeholder="Search Cases"
                            name={"search"}
                            value={form.search}
                            onChange={onChange}
                            className={classes.textField}
                        >
                        </Input>
                        <TextField
                            id="date"
                            label="From"
                            type="date"
                            name={"from"}
                            value={form.from}
                            onChange={onChange}
                            defaultValue={date}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="date"
                            label="To"
                            type="date"
                            name={"to"}
                            value={form.to}
                            onChange={onChange}
                            defaultValue={date}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type={"submit"}
                        >FIND CASES</Button>
                    </form>
                </SearchContainer>

                {count && bikes ? <>
                    <Pagination>
                        <SelectContainer>
                            <p>Resultados por páginas: </p>
                            <select value={per_page} onChange={(e) => setPer_page(e.target.value)}>
                                {[1, 10, 20].map(item => (<option>{item}</option>))}
                            </select>
                        </SelectContainer>
                        <StyledPagination onChange={(e, num) => setPage(num)} count={count} showFirstButton showLastButton />
                    </Pagination>

                    <List>
                        {bikes.length > 0 ? (bikes.map((bike) => {
                            const stolenDate = new Date(bike.date_stolen).toDateString()
                            return (
                                <article onClick={() => goToTheftDetails(history, bike.id)}>
                                    <section>
                                        <div>
                                            {bike.thumb ? <img alt={bike.title} src={bike.thumb} /> :
                                                <DirectionsBikeIcon />}
                                        </div>

                                    </section>
                                    <section>
                                        <h3>
                                            {bike.title}
                                            ({bike.frame_colors.join(', ')})
                                        </h3>
                                        <p>{bike.description}</p>
                                        <p>{stolenDate} - {bike.stolen_location}</p>
                                    </section>
                                </article>
                            )
                        })) : <h1>No results...</h1>
                        }
                    </List>
                </>
                    : <Loading><CircularProgress /></Loading>
                }
            </>}

        </Container>
    )
}

export default HomePage