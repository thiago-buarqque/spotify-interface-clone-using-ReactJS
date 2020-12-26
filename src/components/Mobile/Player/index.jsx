import React from 'react';

import {
    Div,
    ClosePlayerButton,
    PlayerHeader,
    TrackListName,
    PlayerBody,
    SongData,
    SongThumbContainer,
    SongThumb,
    SongDetails,
    SongName,
    ArtistName,
    Player,
    SongProgressContainer,
    ProgressBarContainer,
    ProgressBar,
    ProgressBarCircle,
    SongTimerContainer,
    CurrentTime,
    TotalTime,
    PlayerControls,
    Heart,
    ControlsContainer,
    PrevSong,
    Play,
    NextSong,
    RandomQueue,
    ExtaControls,
    Devices,
    Share
} from './styles.js'

const MobilePlayer = (props) => {

    return(
        <Div ref={props.refPlayer}>
            <ClosePlayerButton onClick={() => props.refPlayer.current.style.marginTop = '100vh'}/>
            <PlayerHeader>
                <TrackListName>
                    Origins (Deluxe)
                </TrackListName>
            </PlayerHeader>
            <PlayerBody>
                <SongData>
                    <SongThumbContainer>
                        <SongThumb src="https://i.scdn.co/image/ab67616d00001e02da6f73a25f4c79d0e6b4a8bd" alt="thumb"/>
                    </SongThumbContainer>
                    <SongDetails>
                        <SongName>
                            Birds
                        </SongName>
                        <ArtistName>
                            Imagine Dragons
                        </ArtistName>
                    </SongDetails>
                </SongData>

                <Player>
                    <SongProgressContainer>
                        <ProgressBarContainer>
                            <ProgressBar>
                                <ProgressBarCircle/>
                            </ProgressBar>
                        </ProgressBarContainer>
                        <SongTimerContainer>
                            <CurrentTime>1:01</CurrentTime>
                            <TotalTime>3:39</TotalTime>
                        </SongTimerContainer>
                    </SongProgressContainer>

                    <PlayerControls>
                        <Heart/>
                        <ControlsContainer>
                            <PrevSong/>
                            <Play/>
                            <NextSong/>
                        </ControlsContainer>
                        <RandomQueue/>
                    </PlayerControls>
                </Player>
                <ExtaControls>
                    <Devices/>
                    <Share/>
                </ExtaControls>                
            </PlayerBody>
        </Div>
    )
}

export default MobilePlayer;