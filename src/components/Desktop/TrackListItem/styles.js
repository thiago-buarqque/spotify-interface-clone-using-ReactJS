import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { MusicalNote } from 'styled-icons/ionicons-outline/'
import { PlayArrow } from 'styled-icons/material-sharp'
import { DotsHorizontal } from 'styled-icons/heroicons-outline'
import { RadioOutline } from 'styled-icons/evaicons-outline'

export const Parent = styled.div`
    display: flex;
    align-items: center;

    padding: 12px;

    width: 100%;
    height: 64px;

    &:hover{
        background: #282828;
    }
    &:hover #btn-play-track-list{
        display: block;
    }
    &:hover #icon-track{
        display: none;
    }
    &:hover #icon-radio{
        display: none;
    }
    &:hover #track-list-item--btn-controls{
        opacity: 1;
    }
`
export const LeftContainer = styled.div`
    width: 50px;
    height: 100%;
    position: relative;
`
export const IconTrack = styled(MusicalNote)`
    width: 18px;
    height: 18px;
    position: absolute;
    top: 0;
    right: 12px;

    display: ${props => props.isShowEpisode ? 'none !important' : 'block'};
`
export const BtnPlay = styled.button`
    position: absolute;
    top: 0;
    right: 10px;

    display: none;
`
export const IconPlay = styled(PlayArrow)`
    color: #fff;
    width: 26px;
    height: 26px;

`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;    
`
export const TrackInfoNameContainer = styled.div`

`
export const TrackName = styled.span`
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    cursor: default;

    text-decoration: none;
`
export const EpisodeName = styled(Link)`
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;

    text-decoration: none;
`
export const TrackInfoDescription = styled.div`
    display: flex;
    align-items: center;
    padding-top: 4px;
    font-size: 14px;
`
export const ExplicitSpan = styled.span`
    background: #a0a0a0;

    padding: 4px 5px;
    margin-right: 4px;

    color: black;
    font-size: 8px;

    border-radius: 2px;
`
export const TrackArtistList = styled.p`
    margin: 0;

    .track-item--artist::after{
        content: '';
        position: relative;
        font-size: 14px;
        margin: 0 4px;
    }
`
export const Artist = styled(Link)`
    &:hover{
        text-decoration: underline;
    }
`
export const DotSeparator = styled.span`
    ::before{
        content: ' ';
        font-size: 12px;
        position: relative;
    }
    ::after{
        content: ' ';
        font-size: 12px;
        position: relative;
        margin-right: 8px;
    }
`
export const TrackAlbum = styled(Link)`

    &:hover{
        text-decoration: underline;
    }
`

export const EpisodeRelease = styled.span`
`
export const ControlsContainer = styled.div`
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
`
export const BtnControls = styled.button`
    opacity: 0;

    cursor: pointer;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        transform: scale(1.03);
        color: #fff;
    }
`
export const IconEllipsis = styled(DotsHorizontal)`
    width: 22px;
    height: 22px;
`
export const TrackDurationContainer = styled.div`
    width: 60px;
    height: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`
export const TrackDuration = styled.span`
    font-size: 14px;
    color: #9d9c9b;
    font-weight: bold;
    letter-spacing: 1px;
`
export const IconRadio = styled(RadioOutline)`
    width: 18px;
    height: 18px;
    position: absolute;
    top: 0;
    right: 12px;

    display: ${props => props.isShowEpisode ? 'block' : 'none'};
`