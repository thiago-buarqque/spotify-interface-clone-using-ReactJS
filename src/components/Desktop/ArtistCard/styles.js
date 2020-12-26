import styled from 'styled-components'
import { PlayArrow } from 'styled-icons/material-sharp'

import {Link} from 'react-router-dom'

export const CardParent = styled.div`
    width: 16.66666667%;
    height: 255px;

    text-align: center;

    padding: 0 8px;
`
export const ThumbLink = styled(Link)`
    width: 164px;
    height: 164px;

    text-decoration: none;

    margin-bottom: 8px;
`
export const ThumbContainer = styled.div`
    width: 164px;
    height: 164px;

    position: relative;

    background: url("${props => props.background}");
    background-size: cover;
    background-position: center;   
    
    &:hover .--artist-card--backgroundFX{
        opacity: 1;
    }
`
export const FXContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgba(0,0,0,0.6);

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: opacity 0.2s ease-in;
`
export const BtnPlay = styled.button`
    width: 64px;
    height: 64px;

    border-radius: 50%;
    border: 1px solid #fff;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const IconPlay = styled(PlayArrow)`
    width: 52px;
    height: 52px;
    color: #fff;
`
export const CardInfo = styled.div`
    width: 100%;
    padding: 12px 0 8px 0;
`
export const CardName = styled(Link)`
    font-size: 14px;
    color: #fff;
    font-weight: 700;

    cursor: pointer;

    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`