import React from 'react'

import {useHistory} from 'react-router-dom'

import {Div, CardImageContainer,CardTitle} from './styles.js'

const Card = (props) => {
    let history = useHistory();

    const redirect = () => {
        if(props.isTrackList) history.push('/playlist')
        else if(props.isShowList) history.push('/show')
        else if (props.isArtist) history.push('/artist')
    }

    return (
        <Div 
            isCardCollection={props.isCardCollection} 
            additionalStyle={props.additionalStyle}
            onClick={redirect}>
            <CardImageContainer
                cardBackground={props.cardBackground} 
                isArtist={props.isArtist}
                imgSize={props.imgSize}/>
            <CardTitle>{props.cardTitle ? props.cardTitle : 'Lorem ipsum'}</CardTitle>
        </Div>
    )
}

export default Card;