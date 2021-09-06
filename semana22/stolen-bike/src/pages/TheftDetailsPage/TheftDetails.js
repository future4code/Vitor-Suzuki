import GoogleMapReact from 'google-map-react';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router'
import { goToHomePage } from '../../routes/coordinator'
import { Header, Img, H1, H2, Container, Map, Title, Description, Loading } from './styled';
import RoomIcon from '@material-ui/icons/Room';
import { CircularProgress } from '@material-ui/core';

const TheftDetails = () => {
    const [bike, setBike] = useState(null)
    const [error, setError] = useState(false)


    const date = new Date(bike?.stolen_record?.date_stolen).toString().split(' ').splice(1, 4).join(' ')

    const getBikeById = () => {
        const queryString = new URLSearchParams(window.location.search)
        const id = queryString.get('id')
        axios.get(`${process.env.REACT_APP_BASE_URL}/v3/bikes/${id}`)
            .then(res => setBike(res.data.bike))
            .catch(() => setError(true))
    }

    useEffect(() => {
        getBikeById()
    }, [])

    const history = useHistory()

    const content = () => {
        if (error) return <p>Ooops, something went wrong...</p>

        if (!bike) return <Loading><CircularProgress /></Loading>

        return <>
            <Title>
                <h1>{bike?.title + ' - ' + bike?.frame_colors}</h1>
                {bike.stolen && <p><b>Stolen</b> {date} <b>at</b> {bike.stolen_record.location}</p>}
            </Title>

            {bike?.stolen_record?.latitude && <Map>
                <GoogleMapReact
                    defaultCenter={{
                        lat: bike?.stolen_record?.latitude,
                        lng: bike?.stolen_record?.longitude
                    }}
                    defaultZoom={15}>
                    <div
                        lat={bike?.stolen_record?.latitude}
                        lng={bike?.stolen_record?.longitude}>
                        <RoomIcon color="secondary" />
                    </div>
                </GoogleMapReact>
            </Map>}

            <Description>
                <h2>DESCRIPTION OF INCIDENT</h2>
                <p>{bike?.stolen_record?.theft_description ? bike.stolen_record.theft_description : 'No description available.'}</p>
            </Description>
        </>
    }

    return (
        <Container>
            <Header onClick={() => goToHomePage(history)}>
                <Img src="https://bikeindex.org/assets/revised/logo-b5b90b10f3084a33e26097ffff6528ca15766eaeb008c5a6d0e242605ccad3b8.svg" />
                <H1>Police Department of Berlin</H1>
                <H2>Stolen Bykes</H2>
            </Header>
            {content()}
        </Container >
    )
}

export default TheftDetails