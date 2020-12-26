import styled from 'styled-components';

import { Disc } from 'styled-icons/feather'
import { ShareGoogle } from 'styled-icons/evil'
import { Heart } from 'styled-icons/feather'

// import { PersonOutline as Artist } from 'styled-icons/evaicons-outline'
import {User as Artist} from 'styled-icons/feather'

export const Div = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    // background: rgba(0, 0, 0, 0.85);

    z-index: 5;
`
export const BackgroundDiv = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    background: rgba(0, 0, 0, 0.85);
`
export const Background = styled.div`
    filter: blur(4px);
    position: absolute;
    width: 100%;
    height: 100%;

    backdrop-filter: blur(5px);
`

export const Foreground = styled.div`
    backdrop-filter: blur(10px);
`

export const Body = styled.div`
    width: 100%;
    height: 100%;

    z-index:2;

    position: relative;
    
    padding: 75px 0;
`

export const ItemContainer = styled.div`
    width 100%;
    height: 72px;

    padding: 0px 18px;

    display: flex;
    align-items: center;
`
export const ItemThumb = styled.img`
    width: 62px;
    height: 62px;
`
export const ItemInfo = styled.div`
    width: 100%;
    height: 72px;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 12px 14px;
`
export const ItemTitle = styled.span`
    max-width: 70%;

    color: #fff;
    text-align: left !important;

    ${
        props => props.hasItemCategory ? `
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        ` : ''
    }
    

    font-weight: bold;
`
export const ItemCategory = styled.span`
    font-size: 12px;
    margin-top: 4px;
`
export const OptionContainer = styled.div`
    width: 100%;
    height: auto;
`
export const BtnOption = styled.button`
    width: 100%;
    height: 56px;

    background: none;

    padding: 0 18px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:active{
        background: rgba(255,255,255,0.2);
    }

    &:first-child{
        margin-top: 10px;
    }
`
export const BtnClose = styled.button`
    width: 100%;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom:5px;
    left: 0;
    background: none;
--

    &:active{
        background: rgba(255,255,255,0.2);
    }

    font-size: 1.12em;
    color: #fff;
    font-weight: bold
`
export const SpanBtn = styled.span`
    color: #fff;
    font-size: 16px;
`
export const FollowIcon = styled(Artist)`
    width: 28px;
    height: 28px;

    color: #fff;

    margin-right: 18px;
`
export const LikeIcon = styled(Heart)`
    width: 25px;
    height: 25px;

    color: #fff;

    margin-right: 18px;
`
export const ShareIcon = styled(ShareGoogle)`
    width: 30px;
    height: 30px;

    color: #fff;

    margin-right: 18px;
`
export const ArtistIcon = styled(Artist)`
    width: 28px;
    height: 28px;

    color: #fff;

    margin-right: 18px;
`
export const AlbumIcon = styled(Disc)`
    width: 28px;
    height: 28px;

    color: #fff;

    margin-right: 22px;
`