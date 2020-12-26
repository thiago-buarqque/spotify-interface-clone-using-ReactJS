import React from 'react'

import {
    HLink,
    Container,
    CardThumb,
    CardDetails,
    CardTitle,
    CardDescription,
    ButtonPlay,
    IconPlay
} from './styles.js'

const Card = props => {
    const getCardPath = () => {
        if(!props.path) return '/playlist'
        else return props.path
    }

    return (
        <HLink to={getCardPath()}>
            <Container>
                <CardThumb background={props.background} isArtist={props.isArtist} />
                <CardDetails>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDescription>{props.description}</CardDescription>
                    <ButtonPlay type='button' className='card--btn-play'><IconPlay /></ButtonPlay>
                </CardDetails>
            </Container>
        </HLink>
    )
}

export default Card;