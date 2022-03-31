import React from 'react';
import styled from 'styled-components';
import Ribamar from '../Images/ribamar.jpg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Match from '../Images/match.png';
import UnMatch from '../Images/unMatch.png';

const MainContainer = styled.div`
    padding: 20px;
    text-shadow: 0px 0px 5px black;
`
const FotoCapa = styled.img`
    max-height: 35vh;
    max-width: 30vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
`
const Alinhamento = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
`
const Footers = styled.img`
    height: 8vh;
`
function Main() {

    const [profile, setProfile] = useState({})

    const getProfileToChoose = (() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/person')
            .then((response) => {
                setProfile(response.data.profile)
            })
            .catch((error) => {
                console.log(error.message)
            })
    })

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const choosePerson = (() => {
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/choose-person', {
            body: {
                "id": "",
                "choice": true,
            
                    // "isMatch": false
                
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error.message)
            })
    })
    return (
        <div>
            <MainContainer >
                <FotoCapa src={profile.photo} alt='photo'></FotoCapa>
                <h4>{profile.name}, {profile.age}</h4>
                <p>{profile.bio}</p>
            </MainContainer>
            <Alinhamento>
                <Footers onClick={() => choosePerson(false)} src={UnMatch} alt='un Match'></Footers>
                <Footers onClick={() => choosePerson(true)} src={Match} alt='match'></Footers>
            </Alinhamento>
        </div>  
    )
}
export default Main