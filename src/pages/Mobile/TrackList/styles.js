import styled from 'styled-components';

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
    z-index: 2;

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
export const TrackListTitleContainer = styled.div`
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

export const HeaderTrackListTitle = styled.span`
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
export const BtnTrackOptions = styled.button`
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
export const TrackListThumbContainer = styled.div`
    width: 100%;
    height: 296px;

    position: sticky;
    top: 0;
    z-index:0;

    padding-top: 82px;

    background: linear-gradient(rgb(180, 121, 111) 0%, rgb(0, 0, 0) 100%);

    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const TrackListThumb = styled.img`
    width: 152px;
    height: 152px;
`
export const TrackListTitle = styled.p`
    font-size: 32px;
    color: #fff;
    margin: 20px 0px 8px 0px;
    font-weight: bold;
`
export const TrackListCreator = styled.span`
    color: #b3b3b3;
    text-transform: uppercase;
    font-size: 11px;
`
export const TrackListBody = styled.div`
    width: 100%;
    height: auto;

    position: relative;

    background-image: linear-gradient(transparent, rgb(0, 0, 0) 42px);

    padding-top: 26px;

    text-align: center;

    display:flex;
    flex-direction: column;
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
export const SuggestionsTitle = styled.p`
    color: #fff;
    font-size:18px;
    margin: 30px auto 10px auto;
    font-weight: bold;
`

export const SuggestionsContainer = styled.div`
    width: 100%;
    height: auto;

    position: relative;
    padding: 0 18px;

    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;
`