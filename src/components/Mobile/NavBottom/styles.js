import styled from 'styled-components';

import {Spotify} from 'styled-icons/boxicons-logos'

export const Div = styled.div`
    position: relative;
    background: rgb(40,40,40);

    border-top: 1px solid #121212;

    padding: 4px 0px;

    height: 48px;

    display:flex;
    justify-content: center;
    align-items: center;
`
export const NavBarContainer = styled.div`
    width: 33.33%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    width: auto;
    height: 48px;
    background: none;

    &:nth-child(2){
        margin-left: 45px;
    }

    padding: 2px 10px;

    &:focus{
        background: rgba(255,255,255,0.2);
    }
    &:active{
        background: rgba(255,255,255,0.2);
    }
`

export const Span = styled.div`
    font-size: 10px;
    width: auto;
    ${props => props.isActive ? 'color: #fff;' : ''}
`
export const SpotifyIcon = styled(Spotify)`
    width: 28px;
    height: 28px;
    color: #c2c3c4
`