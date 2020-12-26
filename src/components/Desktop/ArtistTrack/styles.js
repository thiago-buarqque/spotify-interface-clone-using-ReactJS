import styled from 'styled-components'

import { MusicalNote } from 'styled-icons/ionicons-outline/'
import { PlayArrow } from 'styled-icons/material-sharp'
import { DotsHorizontal } from 'styled-icons/heroicons-outline'

export const ArtistTrackParent = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;

    padding: 2px;

    transition: all 0.25s ease-in;

    &:hover{
        background: #282828;
    }
    &:hover .--artist-track--icon-track{
        display: none;
    }
    &:hover .--artist-track--btn-play{
        display: block;
    }
    &:hover .--artist-track--btn-controls{
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
    color: #fff;

    position: absolute;
    top: calc(50% - 9px);
    right: 12px;

    display: block;
`
export const BtnPlay = styled.button`
    display: none;
`
export const IconPlay = styled(PlayArrow)`
    width: 24px;
    height: 24px;
    color: #fff;

    position: absolute;
    top: calc(50% - 12px);
    right: 10px;    
`
export const ThumbContainer = styled.div`
    width: 50px;
    height: 50px;
`
export const Thumb = styled.img`
    width: 50px;
    height: 50px;
`
export const InfoContainer = styled.div`
    width: 100%;
`
export const TrackName = styled.span`
    margin-left: 16px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
`
export const Controls = styled.div`
    width: 80px;
`
export const BtnControls = styled.button`
    width: 32px;
    height: 32px;

    &:hover{
        transform: scale(1.05);
    }

    opacity: 0;
`
export const IconsEllipsis = styled(DotsHorizontal)`
    width: 22px;
    height: 22px;
    color: #fff;
`
export const DurationContainer = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16px;
`
export const Duration = styled.span`
    font-size: 14px;
    font-weight: 500;
`