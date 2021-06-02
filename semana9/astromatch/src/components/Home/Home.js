import React, { useState, useEffect } from "react";
import axios from "axios"

const Home = () => {

    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitor-suzuki/person`)
            .then((res) => setProfile(res.data.profile))
            .catch((err) => console.log(err))
    };

    const postChoosePerson = (choice) => {
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
            .then((res) => {console.log(res)})
            .catch((err) => {console.log(err)})

        getProfileToChoose();
    }

    const getMatches = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitor-suzuki/matches")
        .then()
        .catch()
    }


    return (
        <div>
            <button>Match Screen</button>
            {() => getProfileToChoose()}
            <p>{profile.name}</p>
            <p>{profile.age}</p>
            <p>{profile.bio}</p>
            <button onClick={() => postChoosePerson(false)}>No Match</button>
            <button onClick={() => postChoosePerson(true)}>Match</button>
        </div>
    );
}

export default Home;
