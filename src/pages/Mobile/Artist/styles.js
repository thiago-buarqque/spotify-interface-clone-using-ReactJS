import styled from 'styled-components'

import {ArrowLeft} from 'styled-icons/feather'
import {DotsVertical} from 'styled-icons/heroicons-outline';

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Div = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    overflow-x: hidden;
    overflow-y: auto;
`
export const Header = styled.div`
    width: 100%;
    height: 82px;

    position: fixed;
    top: 0;
    z-index: 1;

    background-color: transparent;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), transparent);

    transition: background-color 0.3s cubic-bezier(0.3, 0, 0, 1) 0s;
`
export const HeaderBody = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
    
    padding: 0 8px;

    transition: background 0.3s ease-in;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const BtnGoBack = styled.button`
    width: 42px;
    height: 42px;

    border: none;
    background: none;

    float: left;
`
export const IconLeftArrow = styled(ArrowLeft)`
    width: 40px;
    height: 40px;

    padding: 6px;

    color: #fff;
`
export const HeaderTitleContainer = styled.div`
    position: absolute;
    top:0;
    left: 0;

    width: 100%;
    height: 50px;

    opacity: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: opacity 0.3s;

    z-index: -1;
`
export const HeaderTitle = styled.div`
    text-align: center;
    color: #fff;
    font-weight: bold;
`
export const HeaderOptions = styled.div`
    width: auto;
    height: auto;
`
export const BtnFollow = styled.button`
    padding: 6px 12px;

    max-height: 24px;

    font-size: 10px;
    color: #fff;
    text-transform: uppercase;

    background: rgba(255,255,225,0.3);

    transition: opacity 0.3s;

    border-radius: 4px;
`
export const BtnArtistOptions = styled.button`
    width: 52px;
    height: 82px;

    background: none;

    margin-left:8px;
`
export const IconVerticalDots = styled(DotsVertical)`
    width: 24px;
    height: 24px;
    color: #fff;
`
export const ArtistInfoContainer = styled.div`
    width: 100%;
    height: 296px;

    position: sticky;
    top: 0;
    z-index:0;

    padding-top: 82px;
    padding-bottom: 14px;

    background: linear-gradient(rgb(198, 188, 173) 0%, rgb(0, 0, 0) 100%);

    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ArtistThumb = styled.img`
    width: 152px;
    height: 152px;

    border-radius: 50%;
`
export const ArtistName = styled.span`
    font-size: 32px;
    color: #fff;
    margin: 15px 0 4px 0;
    font-weight: bold;
`
export const ArtistPopularity = styled.span`
    font-size: 10px;
    letter-spacing: 0.1em;
    line-height: 16px;
    text-transform: uppercase;
    color: rgb(179, 179, 179);
`
export const ArtistBody = styled.div`
    background-image: linear-gradient(transparent, rgb(0, 0, 0) 42px);

    display: flex;
    flex-direction: column;

    min-height: 100%;

    padding-top: 16px;

    position: relative;

    text-align: center;
`
export const BtnShuffleContainer = styled.div`
    width: 100%;
    height: 50px;

    margin-bottom: 32px;

    z-index: 2;

    position: sticky;
    top: 52px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const BtnShuffle = styled.button`
    width: 252px;
    height: 50px;

    background: #1db954;

    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;

    position: relative;
    border-radius: 24px;
    padding: 16px 48px;
`
export const TopArtistTracksContainer = styled.div`

`
export const PopularTracksTitle = styled.h2`
    font-size: 17px;
    font-weight: 600;
    margin: 22px 16px 2px;
    color: #fff;
`
export const TopArtistWork = styled.div`

`
export const TopArtistWorkTitle = styled.h2`
    font-size: 17px;
    font-weight: 600;
    margin: 22px 16px 2px;
    color: #fff;
`
export const ArtistParticipatingTitle = styled.h2`
    font-size: 17px;
    font-weight: 600;
    margin: 22px 16px 2px;
    color: #fff;
`

export const OtherArtists = styled.h2`
    font-size: 17px;
    font-weight: 600;
    margin: 22px 16px 2px;
    color: #fff;
`
export const ArtistTaggedPlaylists = styled.h2`
    font-size: 17px;
    font-weight: 600;
    margin: 22px 16px 2px;
    color: #fff;
`
export const ArtistPlaylists = styled.h2`
    font-size: 17px;
    font-weight: 600;
    margin: 22px 16px 2px;
    color: #fff;
`