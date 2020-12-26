import styled from 'styled-components'

import { ChevronDown } from 'styled-icons/feather'
import { ChevronUp } from 'styled-icons/feather'

import { Heart } from 'styled-icons/feather'
import { ReactComponent as PictureInPicture } from '../../../images/icons/picture-in-picture.svg'
import { PlayArrow } from 'styled-icons/material-sharp'
import { PlaySkipBack } from 'styled-icons/ionicons-sharp'
import { PlaySkipForward } from 'styled-icons/ionicons-sharp'
import { Shuffle } from 'styled-icons/ionicons-solid'
import { Devices } from 'styled-icons/material'
import { Queue } from 'styled-icons/zondicons/'
import { Repeat } from 'styled-icons/ionicons-outline'

import { Volume2 } from 'styled-icons/feather'

export const Div = styled.div`
    grid-area: PL;
    width: 100%;
    height: 100%;

    position: relative;

    background: #282828;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 16px;

    z-index:2;
`
export const ContainerLargeThumb = styled.div`
    position: absolute;
    bottom: 90px;
    left: 0;
    
    width: 232px;
    height: 0px;

    padding: 0;
    border: 0;
    margin:0;

    overflow:  hidden;

    z-index: 1;

    opacity: 0;

    transition: all .25s cubic-bezier(.3,0,0,1);

    &:hover #btn-hide-large-thumb{
        opacity: 1;
    }
`
export const LargeThumbBody = styled.div`
    width: 100%;
    height: 232px;

    position: relative;
`

export const LargeThumb = styled.img`
    width: 232px;
    height: 232px;
`
export const BtnHideLargeThumb = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;

    width: 24px;
    height: 24px;

    border-radius: 50%;

    background: rgba(0, 0, 0, .7);

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;

    &:hover{
        transform: scale(1.05);
    }
`
export const IconArrowDown = styled(ChevronDown)`
    width: 25px;
    height: 25px;

    color: #fff;

    display: flex;
    align-items: center;
`
export const ContainerTrackThumb = styled.div`
    width: 30%;
    min-width: 180px;
    height: 56px;

    display: flex;
    align-items: center;

    z-index: 1;

    transition: transform .25s cubic-bezier(.3,0,0,1);
`
export const ThumbContainer = styled.div`
    width: 56px;
    height: 56px;

    position: relative;

    &:hover #btn-expand-large-thumb{
        opacity: 1;
    }
`
export const TrackThumb = styled.img`
    width: 56px;
    height: 56px;
`
export const BtnExpandLargeThumb = styled.button`
    width: 24px;
    height: 24px;

    background: rgba(0, 0, 0, .7);

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 5px;
    right: 5px;

    opacity: 0;

    border-radius: 50%;

    &:hover{
        transform: scale(1.05);
    }
`
export const IconArrowUp = styled(ChevronUp)`
    width: 25px;
    height: 25px;

    color: #fff;
`
export const ContainerTrackInfo = styled.div`
    width: auto;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin: 0 14px;
`
export const TrackName = styled.span`
    color: #fff;
    font-size: 14px;
`
export const TrackArtist = styled.span`
    font-size: 12px;
`
export const TrackOptions = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
`
export const IconHeart = styled(Heart)`
    width: 16px;
    height: 16px;

    color: #b3b3b3;

    margin: 0 7px;

    &:hover{
        color: #fff;
    }
`
export const IconPictureInPicture = styled(PictureInPicture)`
    width: 16px;
    height: 16px;

    color: #b3b3b3;

    margin: 0 7px;

    &:hover{
        color: #fff;
    }
`
export const ContainerPlayer = styled.div`
    width: 40%;    
    max-width: 722px;

    display: flex;
    flex-direction: column;
`
export const ContainerPlayerControls = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 16px;
`
export const PlayerButton = styled.button`
    width: 32px;
    height: 32px;

    margin: 0 8px;

    background: none;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    &:hover svg{
        color: #fff;
    }

    // Btn play
    :nth-child(3){
        border: 1px solid #b3b3b3;

        &:hover{
            transform: scale(1.05);
            border: 1px solid #fff;
        }
    }
`
export const IconShuffle = styled(Shuffle)`
    width: 20px;
    height: 20px;

    color: #b3b3b3;
`
export const IconPrevTrack = styled(PlaySkipBack)`
    width: 16px;
    height: 16px;

    color: #b3b3b3;
`
export const IconPlay = styled(PlayArrow)`
    width: 20px;
    height: 20px;

    color: #b3b3b3;
`
export const IconNextTrack = styled(PlaySkipForward)`
    width: 16px;
    height: 16px;

    color: #b3b3b3;
`
export const IconRepeat = styled(Repeat)`
    width: 20px;
    height: 20px;

    color: #b3b3b3;
`
export const ContainerTrackProgress = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
`
export const CurrentTrackTime = styled.span`
    font-size: 12px;
`
export const TotalTrackTime = styled.span`
    font-size: 12px;
`
export const ContainerProgressBar = styled.div`
    width: 100%;
    height: 4px;

    border-radius: 2px;

    background: #535353;

    display: flex;

    margin: 0 8px;
`
export const ProgressBar = styled.div`
    width: 70%;
    height: 100%;

    border-radius: 2px;

    background: #b3b3b3;    

    display: flex;
    align-items: center;
    justify-content: flex-end;

    &:hover button{
        opacity: 1;
    }

    &:hover {
        background: #1db954;
    }
`
export const BtnMoveProgressBar = styled.button`
    width: 12px;
    height: 12px;

    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    border: 0;

    background-color: #fff;

    opacity: 0;

    margin-right: -4px;
`
export const ContainerPlayerOptions = styled.div`
    width: 30%;
    min-width: 180px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const BtnPlayerOption = styled.button`
    width: 32px;
    height: 32px;

    background: none;
`
export const IconAddToQueue = styled(Queue)`
    width: 16px;
    height: 16px;

    &:hover{
        color: #fff;
    }
`
export const IconDevices = styled(Devices)`
    width: 17px;
    height: 17px;

    &:hover{
        color: #fff;
    }
`
export const ContainerTrackVolume = styled.div`
    width: auto;

    display: flex;
    align-items: center;
`
export const IconVolume = styled(Volume2)`
    width: 18px;
    height: 18px;

    color: #fff;
`
export const ContainerVolumeProgressBar = styled.div`
    width: 84px;
    height: 4px;

    border-radius: 2px;

    background: #535353;
`