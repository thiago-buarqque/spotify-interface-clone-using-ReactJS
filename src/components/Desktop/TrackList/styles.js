import styled from 'styled-components'

import {Link} from 'react-router-dom'

import { Heart } from 'styled-icons/feather'
import { PlayArrow } from 'styled-icons/material-sharp'
import { DotsHorizontal } from 'styled-icons/heroicons-outline'

export const Div = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    background: #121212;      
`
export const TrackListContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px;
    overflow-y: scroll;
`
export const TrackListBody = styled.div`
    width: 100%;
    height: auto;

    position: relative;

    background: #121212;  
`
export const TrackListInfoContainer = styled.div`
    height: 340px;
    width: 100%;

    background-color: ${props => props.background};

    position: relative;
    top: -60px;    
`
export const TrackListInfoBody = styled.div`
    background: linear-gradient(transparent,rgba(0,0,0,.5));

    width: 100%;
    height: 100%;

    position: absolute;

    padding: 0 32px 24px 32px;

    display: flex;
    align-items: flex-end;
`
export const TrackListThumbContainer = styled.div`
    width: 232px;
    height: 232px;

    margin-right: 24px;
`
export const TrackListThumb = styled.img`
    width: 232px;
    height: 232px;
`
export const TrackListDetails = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const TrackListCategoryContainer = styled.div`
    width: 100%;
    margin-top: 4px;
`
export const TrackListCategory = styled.span`
    font-size: 13px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: -1px;
    font-weight: 600;
`
export const TrackListTitleContainer = styled.div`
    width: 100%;
    margin-top: 4px;
`
export const TrackListTitle = styled.span`
    font-size: ${props => props.isShow ? `68px` : `96px`};
    ${props => props.isAlbum ? 'font-size: 48px;' : ``}
    color: #fff;
    font-weight: bold;
    letter-spacing: -2px;
    padding: 7px 0;
`
export const TrackListDescriptionContainer = styled.div`
    width: 100%;
    margin-top: 8px;
`
export const TrackListDescription = styled.span`
    font-weight: 500;
    font-size: 13px;
`
export const TrackListInfoFooter = styled.div`
    font-size: 14px;
    font-weight: 500;

    margin-bottom: 0;
    margin-top: 8px;
`
export const TrackListCreator = styled.span`
    color: #fff;
`
export const TrackListPopularity = styled.span`
    ::before{
        content: ' • ';
        color: #b3b3b3;
        font-size: 10px;
    }
`
export const TrackListDuration = styled.span`
    ::before{
        content: ' • ';
        color: #b3b3b3;
        font-size: 10px;
    }
`
export const TrackListContent = styled.div`
    width: 100%;
    padding: 0 32px;

    position: relative;
    top: -60px;
`
export const TrackListControls = styled.div`
    width: 100%;

    padding: 18px 0;

    display: flex;
    align-items: center;
`
export const BtnPlayTrackList = styled.button`
    width: 54px;
    height: 54px;

    background: #1db954;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const IconPlay = styled(PlayArrow)`
    width: 36px;
    height: 36px;

    color: #fff;
`
export const BtnLikeTrackList = styled.button`
    margin: 0 26px;
`
export const IconHeart = styled(Heart)`
    width: 32px;
    height: 32px;

    &:hover{
        color: #fff;
    }
`
export const BtnTrackListOptions = styled.button`
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        color: #fff;
    }
`
export const IconEllipsis = styled(DotsHorizontal)`
    width: 28px;
    height: 28px;    
`

export const AdditionalStyleContainer = styled.div`
    max-width: 300px;

    display: flex;
    align-items: center;

    padding-left: 8px;

    opacity: 0;

    transition: opacity 0.5s;
`
export const BtnHeaderPlay = styled.button`
    background: #1db954;

    width: 42px;
    height: 42px;

    margin-right: 16px;
    border-radius: 50%;

    &:hover{
        transform: scale(1.05);
    }
    
    #--header--additional--icon-play{
        width: 24px;
        height: 24px;
    }
`
export const HeaderTrackListTitle = styled.span`
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    letter-spacing: -1px;
`

export const AlbumInfoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
export const AlbumInfoArtistContainer = styled.div`
    display: flex;
    align-items: center;
`
export const AlbumArtistThumb = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
`
export const AlbumArtistName = styled(Link)`
    margin-left: 4px;

    color: #fff;
    font-weight: 700;

    cursor: pointer;
`
export const AlbumRelease = styled.span`
    ::before{
        content: ' • ';
        font-size: 10px;     
        margin: 0 4px 0 8px;           
    }
`
export const AlbumDuration = styled.span`
    ::before{
        content: ' • ';
        font-size: 10px;    
        margin: 0 4px 0 8px;            
    }
`
export const ShowCreator = styled.span`
    font-size: 24px;
    color: #FFF;
`
export const BtnFollow = styled.button`
    padding: 8px 10px;

    text-align: center;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;

    border: 1px solid #fff;

    width: 100px;
    margin: 0 24px;
    border-radius: 5px;
`

export const ShowBioContainer = styled.div`
    width: 100%;
    height: auto;
`

export const Bio = styled.p`
    color: #b7b7b7;
    font-size: 15px;
    line-height: 1.6;
`

export const ShowEpisodesTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
`

export const AlbumCopyright = styled.p`
    font-size: 12px;
    text-align: left;
    padding-top: 32px;
    margin: 0;
`