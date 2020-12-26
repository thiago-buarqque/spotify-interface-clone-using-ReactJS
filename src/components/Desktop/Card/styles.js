import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {PlayArrow} from 'styled-icons/material-sharp';

export const HLink = styled(Link)`
    width: 100%;
    max-width: 164px;
    max-height: 242px;
    border-radius: 8px;
    position: relative;

    padding: 20px 20px 16px;

    display: flex;
    flex-direction: column;

    background: #282828;

    &:hover .card--btn-play{
        display: block;
    }

    cursor: pointer;
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
export const CardThumb = styled.div`
    width: 124px;
    height: 124px;

    margin-bottom: 16px;
    background: ${props => props.background};
    background-size: cover;
    background-position: center;
    ${props => props.isArtist ? `border-radius: 50%;` : ''}
`
export const CardDetails = styled.div`
    width: 100%;
    height: 72px;
    position: relative;
`
export const CardTitle = styled.span`
    font-size: 16px;
    color: #fff;
    height: 30px;

    font-weight: bold;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

export const CardDescription = styled.p`
    font-size: 11px;
    height: 32px;
    line-height: 16px;
`

export const ButtonPlay= styled.button`
    background: rgb(29, 185, 84);

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    position: absolute;
    bottom: 10px;
    right: -2px;

    display: none;

    &:hover{
        transform: scale(1.05);
    }
`

export const IconPlay = styled(PlayArrow)`
    width: 24px;
    height: 24px;
    color: #fff;
`