import styled from 'styled-components'

import {Link} from 'react-router-dom'

import { ReactComponent as SpotifyLarge } from '../../../images/icons/spotify_logo_large.svg'
import { ReactComponent as ActiveHome } from '../../../images/icons/home_active.svg'
import { ReactComponent as Home } from '../../../images/icons/home.svg'
import { ReactComponent as Search } from '../../../images/icons/search.svg'
import { ReactComponent as Collection } from '../../../images/icons/library.svg'
import { ReactComponent as ActiveCollection } from '../../../images/icons/library_active.svg'
import { ReactComponent as AddPlaylist } from '../../../images/icons/add_playlist.svg'

import { Heart } from 'styled-icons/boxicons-solid'

export const Div = styled.div`
    grid-area: SN;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding-top: 24px;
`
export const LinkLogo = styled(Link)`
    width: 100%;
    text-decoration: none;
    padding-left: 24px;
    margin-bottom: 18px;
    color: #fff;
`
export const Logo = styled(SpotifyLarge)`
    width: 132px;
    height: 40px;
    color: #fff;
`
export const Body = styled.div`
    
`
export const BtnHLink = styled(Link)`
    
`
export const Button = styled.button`
    background: none;

    width: 216px;
    height: 40px;

    padding: 0 16px;
    margin: 0 auto;

    display: flex;
    align-items: center;

    cursor: pointer;

    &:hover > *{
        color: #fff !important;
    }


    ${props => props.isActive ? `
        background: #282828;
        *{
            color: #fff !important;
        }        
    ` : `
        background: none;
    `}

    border-radius: 3px;
`

export const SpanButton = styled.span`
    font-size: 14px;
    font-weight: bold;
    margin-left: 16px;

    transition: color .2s;
    transition-timing-function: linear;
`
export const IconHome = styled(Home)`
    width: 24px;
    height: 24px;
    color: #fff;

    transition: color .2s;
    transition-timing-function: linear;
`

export const IconActiveHome = styled(ActiveHome)`
    width: 24px;
    height: 24px;
    color: #fff;

    transition: color .2s;
    transition-timing-function: linear;
`

export const IconSearch = styled(Search)`
    width: 24px;
    height: 24px;
    color: #b3b3b3;

    transition: color .2s;
    transition-timing-function: linear;
`
export const IconCollection = styled(Collection)`
    width: 24px;
    height: 24px;
    color: #b3b3b3;

    transition: color .2s;
    transition-timing-function: linear;
`
export const IconActiveCollection = styled(ActiveCollection)`
    width: 24px;
    height: 24px;
    color: #fff;

    transition: color .2s;
    transition-timing-function: linear;
`
export const ContainerPlaylists = styled.div`
    width: 100%;
    height: auto;
    position: relative;

    margin-top: 24px;
    text-align: left;
`

export const PlaylistsTitle = styled.h6`
    margin: 0 24px 12px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #b3b3b3;
`

export const ButtonAddPlaylist = styled.button`
    background: none;

    width: 216px;
    height: 40px;

    padding: 0 16px;
    margin: 0 auto;

    display: flex;
    align-items: center;

    cursor: pointer;

    &:hover > div{
        background: #fff !important;
    }
    &:hover > span{
        color: #fff !important;
    }
`

export const ButtonLikedSongs = styled.button`
    background: none;

    width: 216px;
    height: 40px;

    padding: 0 16px;
    margin: 0 auto;

    display: flex;
    align-items: center;

    cursor: pointer;

    &:hover > div{
        opacity: 1;
    }
    &:hover > span{
        color: #fff !important;
    }
`

export const ContainerIconAdd = styled.div`
    width: 32px;
    height: 32px;
    background: #b3b3b3;
    color: transparent !important;

    transition: all .2s;
    transition-timing-function: linear;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconAdd = styled(AddPlaylist)`
    width: 24px;
    height: 24px;
`
export const ContainerIconHeart = styled.div`
    background: linear-gradient(135deg,#450af5,#c4efd9);
    width: 32px;
    height: 32px;
    padding: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all .2s;
    transition-timing-function: linear;

    opacity: 0.8;
`
export const IconHeart = styled(Heart)`
    width: 18px;
    height: 18px;

    color: #fff;
`

export const Separator = styled.div`
    background-color: #282828;
    border: none;
    height: 1px;
    width: 184px;
    margin: 8px auto;
`
export const ContainerUserPlaylists = styled.div`
    width: 186px;
    height: auto;

    margin: 4px auto;

    display: flex;
    flex-direction: column;
`
export const UserPlaylist = styled(Link)`
    width: 100%;
    height: 32px;

    text-decoration: none;
    color: #b3b3b3;

    &:first-child{
        margin-top: 16px;
    }

    font-size: 14px;

    ${
        props => props.isActive ? 'color: #fff;' : ''
    }
`