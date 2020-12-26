import React from 'react';

import {Div, ProgressBarDiv, ProgressBarBackground, ProgressBar, MiniPlayerBody, Heart, BtnSong, SongName, Circle, PlayButton} from './styles.js'

const MiniPlayer = (props) => {
    return(
        <Div>
            <ProgressBarDiv>
                <ProgressBarBackground>
                    <ProgressBar/>
                </ProgressBarBackground>                
            </ProgressBarDiv>
            <MiniPlayerBody>
                <Heart/>
                <BtnSong onClick={props.openPlayer}>
                    <SongName>Birds <Circle>●</Circle> </SongName>
                    Imagine Dragons
                </BtnSong>
                <PlayButton/>
            </MiniPlayerBody>            
        </Div>
    )
}

export default MiniPlayer;