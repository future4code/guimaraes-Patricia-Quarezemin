import React, { useContext } from 'react'
import GlobalStateContext from '../../context/globalStateContext'
import { MainDiv, SelectLotto, BallsContainer, AllBalls, LeftSection, RightSection, Text, InfoContainer, Header, MiddleContainer, GameName } from './styled'

export const HomePage = () => {

    const {
        games,
        selected,
        setSelected,
        concursos,
        resultado,
        setLuck,
        luck,
        name,
        setName
    } = React.useContext(GlobalStateContext)

    React.useEffect(() => {
        getSelected()
    }, [selected])

    const dropDown = games && games.map((game) => {
        return (
            <option key={game.nome} value={game.id}>
                {game.nome.toUpperCase()}
            </option>
        )
    })

    const numeros = resultado && resultado.numeros && resultado.numeros.map((number) => {
        return <BallsContainer>{number}</BallsContainer>
    })

    const getSelected = (event) => {
        setSelected(event ? event.target.value : 0)
    }
    if (selected) {
        setLuck(concursos[selected])
        setName(games[selected])
    }

    const corLoteria = () => {
        switch (name.nome) {
            case 'mega-sena':
                return megasena
            case 'lotomania':
                return lotomania
            case 'quina':
                return quina
            case 'timemania':
                return timemania
            case 'dia de sorte':
                return diadesorte
            case 'lotofácil':
                return lotofacil
            default:
                return megasena
        }
    }

    // const { states, setters } = useContext(GlobalStateContext)
    // const { games, lotery, infoContest } = states
    // const { setLotery } = setters

    // const onChangeSelect = (event) => {
    //     games.forEach((g) => {
    //         if (event.target.value === g.nome) {
    //             setLotery(g)
    //         }
    //     })
    // }

    // const renderNumbers = infoContest.numeros && infoContest.numeros.map((data) => {
    //     return <Numbers>
    //         <p>{data}</p>
    //     </Numbers>
    // })

    // const renderOptions = games.map((g) => {
    //     return <option key={g.id} value={g.nome}>
    //         {g.nome.toUpperCase()}
    //     </option>
    // })
    return (
        <MainDiv>

            <LeftSection color={corLoteria()}>
                <Header>
                    <SelectLotto onChange={getSelected}>{dropDown}</SelectLotto>
                </Header>
                <MiddleContainer>
                    <GameName>{name.nome.toUpperCase()}</GameName>
                </MiddleContainer>
                <InfoContainer>
                    <h6>CONCURSO</h6>
                    <b>
                        {luck ? luck.concursoId : <p>Aguarde o resultado</p>} - {dia}
                    </b>
                </InfoContainer>
            </LeftSection>
            <RightSection>
                <AllBalls>{numeros}</AllBalls>
                <Text>Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</Text>
            </RightSection>
        </MainDiv>
    )
}

