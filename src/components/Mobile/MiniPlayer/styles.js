import styled from 'styled-components'

import {Heart as _Heart} from 'styled-icons/feather';
import {PlayArrow} from 'styled-icons/material-sharp';

export const Div = styled.div`
    height: 48px;
    width: 100%;

    background: rgb(40, 40, 40);

    display: flex;
    flex-direction: column;
`

export const ProgressBarDiv = styled.div`
    width: 100%;
    height: 5px;
    margin: 0;
    padding-top: 4px;
    position:relative;
    background: rgb(40, 40, 40);
`

export const ProgressBarBackground = styled.div`
    position:absolute;
    bottom: 0;
    background: rgba(220, 221, 222, 0.3);
    width: 100%;
    height: 1px;
`

export const ProgressBar = styled.div`
    height: 1px;
    width: 35%;
    background: #fff;
`

export const MiniPlayerBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 15px;
`

export const Heart = styled(_Heart)`
    width: 26px;
    height: 26px;
    color: #fff;
    margin-right: 5px;
`
export const BtnSong = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    outline: none;

    font-weight: bold;
    font-size: 14px;

    width: 100%;
    padding: 10px 2px;
`
export const SongName = styled.span`
    // font-weight: bold;
    color: #fff;
    margin-right: 5px;
`

export const Circle = styled.span`
    font-size: 10px;
    color: #fff;
    text-align: center;
    position: relative;
    top: -2px;
`

export const PlayButton = styled(PlayArrow)`
    width: 34px;
    height: 34px;
    color: #fff;
    padding: 0;
    margin:0;
`