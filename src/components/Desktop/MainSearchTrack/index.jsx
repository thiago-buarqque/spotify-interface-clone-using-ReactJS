import React from 'react'

import {
    Div,
    ContainerThumb,
    ThumbBackground,
    Thumb,
    BtnPlay,
    IconPlay,
    ItemDetails,
    Title,
    Artist,
    OptionsContainer,
    BtnOptions,
    IconEllipsis
} from './styles.js'

const MainSearchTrack = props => {
    return (
        <Div>
            <ContainerThumb>
                <ThumbBackground id='search-track--background'/>
                <Thumb src={props.thumb} />
                <BtnPlay type='button' id='search-track--btn-play'>
                    <IconPlay />
                </BtnPlay>
            </ContainerThumb>
            <ItemDetails>
                <Title>{props.title}</Title>
                <Artist>{props.artist}</Artist>
            </ItemDetails>
            <OptionsContainer>
                <BtnOptions type='button' id='search-track--btn-options'>
                    <IconEllipsis/>
                </BtnOptions>
            </OptionsContainer>
        </Div>
    )
}

export default MainSearchTrack;