import styled from 'styled-components'

import { Link } from 'react-router-dom'

import {PlayArrow} from 'styled-icons/material-sharp';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    background: #121212;   
`
export const CollectionContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px;
    overflow-y: scroll;
`
export const CollectionBody = styled.div`
    width: 100%;
    height: auto;

    position: relative;

    background: #121212;  
`
export const Section = styled.section`
    width: 100%;
    min-height: 300px;
    position: relative;

    padding-bottom:24px;
    padding-right: 32px;
    padding-left: 32px;

    :last-child{
        padding-bottom: 12px;
    }
`
export const SectionHeader = styled.div`
    width: 100%;
    min-height: 35px;
    max-height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;

    position: relative;
`
export const SectionHeaderInfo = styled.div`
    width: 100%;
`
export const SectionTitle = styled.span`
    font-size: 24px;
    color: #fff;
    text-align: left;
    font-weight: bold;
`
export const SectionBody = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill,minmax(164px,1fr));
    overflow-y: hidden;
`
export const LikedSongsContainer = styled.div`
    grid-column: span 2;
    
    height: 242px;
    
    background: linear-gradient(149.46deg,#450af5,#8e8ee5 99.16%);

    position: relative;
    
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    padding: 20px 20px 8px 20px;

    border-radius: 8px;

    &:hover #btn-play-liked-songs{
        opacity: 1;
    }
`
export const LikedSongsBody = styled.div`
    height: 100%;    
`
export const LikedSongs = styled.div`
    width: 100%;
    height: 110px;
    
    padding-top: 32px;

    overflow: hidden;

    position: relative;

    .--liked-song::after{
        content: ' ● ';
        color: #fff;
        font-weight: bold;
        position: relative;
        font-size: 10px;
    }
    .--liked-song:last-child::after{
        content: '...';
        font-size: 13px;
        opacity: 0.7
    }
`
export const LikedSong = styled.span`
    font-size: 15px;
    color: #fff;
`
export const LikedSongArtist = styled.span`
    opacity: 1;

    &::after{
        content: ' ';
        color: #fff;
        font-weight: bold;
        position: relative;
        font-size: 12px;
    }
`

export const LikedSongName = styled.span`
    opacity: 0.7;
`
export const LikedSongsTitle = styled.span`
    display: block;
    margin: 24px 0;
    font-size: 32px;
    line-height: 32px;
    color: #fff;
`
export const LikedSongsCounter = styled.span`
    text-transform: lowercase;
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
`

export const AdditionalContent = styled.div`
    width: 364px;
    height: 40px;

    display: flex;
    align-items: center;

    position: relative;

    padding-left: 16px;
`
export const HLinkHeaderNavigation = styled(Link)`
    width: 25%;
    height: 100%;

    display: flex;
`
export const BtnHeaderNavigation = styled.button`
    width: 85px;

    margin-right: 5px;
    padding: 8px 16px;

    border-radius: 5px;

    text-align: center;

    color: #fff;
    font-weight: bold;
    cursor: pointer;

    ${
    props => props.isActive ? `
            background: #333;
        ` : ``
    }
`

export const BtnPlayLikedSongs = styled.button`
    width: 52px;
    height: 52px;

    background-color: rgb(29,185,84);

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 24px;
    right: 24px;

    opacity: 0;

    &:hover{
        transform: scale(1.05);
    }
`
export const IconPlay = styled(PlayArrow)`
    width: 28px;
    height: 28px;
    color: #fff;
`