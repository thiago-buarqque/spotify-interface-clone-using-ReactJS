import React from 'react'

import {
    CardParent,
    ThumbLink,
    ThumbContainer,
    FXContainer,
    BtnPlay,
    IconPlay,
    CardName,
    CardInfo
} from './styles.js'

const ArtistCard = props => {
    return (
        <CardParent >
            <ThumbLink to='/album'>
                <ThumbContainer background={props.thumb}>
                    <FXContainer className='--artist-card--backgroundFX'>
                        <BtnPlay type='button'>
                            <IconPlay />
                        </BtnPlay>
                    </FXContainer>
                </ThumbContainer>
            </ThumbLink>
            <CardInfo>
                <CardName to='/album'>{props.name}</CardName>
            </CardInfo>
        </CardParent>
    )
}

export default ArtistCard