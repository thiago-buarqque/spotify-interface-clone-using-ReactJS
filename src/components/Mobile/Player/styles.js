import styled from 'styled-components';

import { Heart as _Heart } from 'styled-icons/feather'
import { PlayCircle } from 'styled-icons/remix-fill'
import { PlaySkipBack } from 'styled-icons/ionicons-sharp'
import { PlaySkipForward } from 'styled-icons/ionicons-sharp'
import {Shuffle} from 'styled-icons/ionicons-solid'
import {Devices as _Devices} from 'styled-icons/material'
import {ShareGoogle} from 'styled-icons/evil'
import {ChevronDown} from 'styled-icons/feather'

export const Div = styled.div`
    width: 100%;
    height: 100%;
    
    position: fixed;
    // bottom: -100%;
    margin-top:100vh;

    display: flex;
    flex-direction: column;

    padding: 24px;

    background-color: rgb(0, 0, 0);
    background-image: linear-gradient(rgba(58, 92, 69, 0.6), rgb(0, 0, 0) 85%);

    z-index: 5;

    transition: all 0.2s;
`
export const ClosePlayerButton = styled(ChevronDown)`
    width: 42px;
    height: 42px;

    color: #fff;

    position: absolute;
    top: 22px;
    left: 16px;

    z-index: 2;
`
export const PlayerHeader = styled.div`
    width: 100%;
    height: 42px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const TrackListName = styled.span`
    color: #fff;

    font-size: 12px;
`
export const PlayerBody = styled.div`
    width: 100%;
    height: 100%;
`
export const SongData = styled.div`
    width: 100%;
    height: calc(100% - 146px);
`
export const SongThumbContainer = styled.div`
    width: 100%;
    // height: calc(100% - 69px - 96px - 50px);
    height: calc(100% - 69px);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 2px;

    position: relative;
`
export const SongThumb = styled.img`
    width: 100%;
    max-width: 350px;
`
export const SongDetails = styled.div`
    width: 100%;
    height: 69px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const SongName = styled.div`
    font-size: 1.95em;
    font-weight: bold;
    color: #fff;
`
export const ArtistName = styled.div`
    font-weight: bold;
    color: #B3B3B3;
    padding-top: 8px;
`
export const Player = styled.div`
    width: 100%;
    height: 96px;

    position: relative;

    padding-top: 8px;
`
export const SongProgressContainer = styled.div`
    width: 100%;
    height: 20px;

    display: flex;
    flex-direction: column;
`
export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 4px;
    background: rgba(220, 221, 222, 0.3);
    border-radius: 3px;
`
export const ProgressBar = styled.div`
    width: 32%;
    height: 4px;
    background: #fff;
    border-radius: 3px;

    position: relative;
`
export const ProgressBarCircle = styled.div`
    width: 8px;
    height: 8px;

    background: #fff;

    position: absolute;
    right: 0;
    bottom: -2px;

    border-radius: 50%;
`
export const SongTimerContainer = styled.div`
    width: 100%;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 2px;
`
export const CurrentTime = styled.div`
    color: #fff;
    font-size: 11px;
`
export const TotalTime = styled.div`
    color: #fff;
    font-size: 11px;
`
export const PlayerControls = styled.div`
    width: 100%;
    height: 80px;

    position: relative;

    display: flex;
    align-items: center;
`
export const Heart = styled(_Heart)`
    width: 26px;
    height: 26px;
    color: #fff;

    float: left;
`
export const ControlsContainer = styled.div`
    width: 100%;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const PrevSong = styled(PlaySkipBack)`
    width: 26px;
    height: 26px;
    color: #fff;

    width: 32px;
    height: 32px;
`
export const Play = styled(PlayCircle)`
    width: 26px;
    height: 26px;
    color: #fff;

    width: 68px;
    height: 68px;

    margin: 0 8px;
`
export const NextSong = styled(PlaySkipForward)`
    width: 26px;
    height: 26px;
    color: #fff;

    width: 32px;
    height: 32px;
`

export const RandomQueue = styled(Shuffle)`
    width: 26px;
    height: 26px;
    color: #fff;

    position: absolute;
    right: 0;
`
export const ExtaControls = styled.div`
    width: 100%;
    height: 30px;

    margin-top: 23px;

    position: relative;
`

export const Devices = styled(_Devices)`
    width: 24px;
    height: 24px;

    color: #B3B3B3;

    float: left;
`
export const Share = styled(ShareGoogle)`
    width: 28px;
    height: 28px;

    color: #B3B3B3;

    float: right;
`
