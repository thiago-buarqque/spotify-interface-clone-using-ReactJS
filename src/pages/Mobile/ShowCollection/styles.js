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

    overflow-y: scroll;

    position: relative;

    background: black;
`
export const Header = styled.div`
    width: 100%;
    height: 66px;

    position: fixed;
    top: 0;
    z-index: 2;

    background-color: transparent;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), transparent);

    transition: background-color 0.3s cubic-bezier(0.3, 0, 0, 1) 0s;
`
export const HeaderBody = styled.div`
    width: 100%;
    height: 66px;
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
    height: 66px;

    opacity: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: opacity 0.3s;

    z-index: -1;
`
export const HeaderTitle = styled.span`
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

    letter-spacing: 2px;
`
export const BtnCollectionOptions = styled.button`
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

export const ShowBody = styled.div`
    width: 100%;
    height: auto;

    position: relative;

    padding: 52px 18px 0 18px;
    
    background-image: linear-gradient(rgba(55, 55, 55, 0.8), transparent);
`
export const ShowThumbContainer = styled.div`
    width: 100%;
    height: 176px;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const ShowThumb = styled.img`
    width: 152px;
    height: 152px;
`
export const ShowInfoContainer = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
export const ShowTitle = styled.p`
    font-size: 2.2em;
    width: 100%;
    color: #fff;
    font-weight: bold;

    margin: 12px 0;

`
export const ShowCreator = styled.p`
    color: #fff;
    font-size: 13px;

`
export const LastUpdate = styled.p`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;

    margin: 0 0 4px 0;
`
export const ShowDescriptionContainer = styled.div`
    width: 100%;
    height: auto;

    // background: linear-gradient(transparent, rgb(18, 18, 18) 42px) rgb(18, 18, 18);
    background: black;

    padding: 18px 18px 0 18px;

    // display: inline-block;
`

export const ShowDescription = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(179, 179, 179);
    display: inline-block;
`

export const BtnShowFullDescription = styled.button`
    background: none;
    display: inline-block;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`

export const ShowEpisodesContainer = styled.div`
    width: 100%;
    height: auto;

    padding: 18px;

    background: linear-gradient(transparent, rgb(18, 18, 18) 42px) rgb(18, 18, 18);

    text-align: left;
`

export const TitleEpisodes = styled.p`
    color: #fff;
    width: 100%;

    margin-bottom: 20px;
`