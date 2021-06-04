import React, { useState, useEffect } from "react";
import axios from "axios"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import DeleteIcon from '@material-ui/icons/Delete';

// ------- ESTILIZAÇÃO -------- // 

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding: 10px;

`

const CardWrap = styled.div`
    padding: 20px 10px;
`

const ButtonMatches = styled.div`
    display: flex;
    justify-content: center;
`
const ButtonSwipe = styled.div`
    display: flex;
    justify-content: space-between;
`
const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    padding: 10px;
`
const ButtonHeart = styled.div`
    &:hover {
        cursor: pointer;
        color: green;
    }
`
const ButtonX = styled.div`
    &:hover {
        cursor: pointer;
        color: red;
    }
`
const Loading = styled.div`
    position: absolute;
    top: 50vh;
    left: 50vw;
`

// ------- FUNCIONALIDADES -------- // 

const Home = (props) => {

    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        setLoading(true)
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitor-suzuki/person`)
            .then((res) => {
                setProfile(res.data.profile)
                setLoading(false)
            })
            .catch(() => alert("Acabaram os perfis :c"))
    };

    const postChoosePerson = (choice) => {
        setLoading(true)
        const header = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const body = {
            "id": profile.id,
            "choice": choice
        }
        const url =
            `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitor-suzuki/choose-person`

        axios
            .post(url, body, header)
            .then(() => {
                getProfileToChoose()
                setLoading(false)
            })

            .catch(() => { alert("Acabaram os perfis :c") })

    }

    const clearMatches = () => {
        const header = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const url =
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitor-suzuki/clear"

        axios
            .put(url, header)
            .then(() => {
                alert("A lista de Matches foi resetada!")
                getProfileToChoose()
            })
            .catch((err) => { console.log(err) })

    }

    return (
        <div>
            {loading ? <Loading><CircularProgress /></Loading> :
                <CardContainer>

                    <Card>
                        <CardWrap>
                            {profile ?
                                <div>
                                    <ButtonMatches>
                                        <Button variant="outlined" onClick={() => props.changePage()}>Matches</Button>
                                    </ButtonMatches>
                                    <ImageWrap>
                                        <Image src={profile.photo}></Image>
                                    </ImageWrap>
                                    <h1>{profile.name}</h1>
                                    <h3>Idade: {profile.age}</h3>
                                    <p>{profile.bio}</p>
                                    <ButtonSwipe>
                                        <ButtonX>
                                            <ClearOutlinedIcon onClick={() => postChoosePerson(false)}></ClearOutlinedIcon>
                                        </ButtonX>
                                        <ButtonHeart>
                                            <FavoriteIcon onClick={() => postChoosePerson(true)}></FavoriteIcon>
                                        </ButtonHeart>
                                    </ButtonSwipe>
                                </div>
                                :
                                <div>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => clearMatches()}>Limpar Lista de Matches!
                                    </Button>
                                </div>
                            }

                        </CardWrap>
                    </Card>
                </CardContainer>}
        </div>
    );
}

export default Home;
