import React from 'react'

import {
    ArtistTrackParent,
    LeftContainer,
    IconTrack,
    BtnPlay,
    IconPlay,
    ThumbContainer,
    Thumb,
    InfoContainer,
    TrackName,
    Controls,
    BtnControls,
    IconsEllipsis,
    DurationContainer,
    Duration
} from './styles.js'

const ArtistTrack = props => {
    return(
        <ArtistTrackParent>
            <LeftContainer>
                <IconTrack className='--artist-track--icon-track'/>
                <BtnPlay type='button' className='--artist-track--btn-play'>
                    <IconPlay/>
                </BtnPlay>
            </LeftContainer>
            <ThumbContainer>
                <Thumb src={props.thumb} alt={props.name}/>
            </ThumbContainer>
            <InfoContainer>
                <TrackName>{props.name}</TrackName>
            </InfoContainer>
            <Controls>
                <BtnControls type='button' className='--artist-track--btn-controls'>
                    <IconsEllipsis/>                    
                </BtnControls>
            </Controls>
            <DurationContainer>
                <Duration>{props.duration}</Duration>
            </DurationContainer>
        </ArtistTrackParent>
    )
}

export default ArtistTrack