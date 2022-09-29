import React, { useState, useEffect } from 'react'
import GlobalStateContext from './globalStateContext'
import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const GlobalState = (props) => {

    const [games, setGames] = useState([])
    const [selected, setSelected] = useState('')
    const [concursos, setConcursos] = useState([])
    const [resultado, setResultado] = useState([])
    const [luck, setLuck] = useState({ loteriaId: 0, concursoId: '2359' })
    const [name, setName] = useState({ loteriaId: 0, nome: 'mega-sena' })

    useEffect(() => {
        getLoteria()
        getConcurso()
    }, [])

    useEffect(() => {
        jogoLoteria()
    }, [selected])

    const getLoteria = async () => {
        await axios
            .get(`${BASE_URL}/loterias-concursos`)
            .then((res) => {
                setGames(res.data)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    const getConcurso = async () => {
        await axios
            .get(`${BASE_URL}/loterias-concursos`)
            .then((res) => {
                setConcursos(res.data)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    const jogoLoteria = async () => {
        await axios
            .get(`${BASE_URL}/concursos/${luck.concursoId}`)
            .then((res) => {
                setResultado(res.data)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    const data = {
        games,
        setGames,
        concursos,
        setConcursos,
        resultado,
        setResultado,
        selected,
        setSelected,
        luck,
        setLuck,
        name,
        setName
    }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}