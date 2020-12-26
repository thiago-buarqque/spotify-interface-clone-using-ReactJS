import styled from 'styled-components'

import { PlayArrow } from 'styled-icons/material-sharp'
import { DotsHorizontal } from 'styled-icons/heroicons-outline'

export const Div = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;

    margin-bottom: 8px;

    &:hover{
        background: #282828;
    }
    &:hover #search-track--btn-play, &:hover #search-track--background, &:hover #search-track--btn-options{
        opacity: 1;
    }
`
export const ContainerThumb = styled.div`
    position: relative;
    width: 72px;
    height: 72px;
`
export const ThumbBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background-color: rgba(0,0,0,.6);

    z-index:0;

    opacity: 0;
`
export const Thumb = styled.img`
    width: 72px;
    height: 72px;
`
export const BtnPlay = styled.button`
    border-radius: 50%;
    background: #1db954;

    width: 32px;
    height: 32px;

    position: absolute;
    top: 20px;
    left: 20px;

    opacity: 0;
`
export const IconPlay = styled(PlayArrow)`
    width: 24px;
    height: 24px;
    color: #fff;
`
export const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    width: 100%;
    max-width: calc(100% - 152px);
`
export const Title = styled.span`
    text-align: left;
    font-weight: bold;
    color: #fff;
    padding-bottom: 6px;
    font-size: 14px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`
export const Artist = styled.span`
    text-align: left;
    font-size: 14px;
`

export const OptionsContainer = styled.div`
    width: 80px;
    height: 72px;
    margin-left: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const BtnOptions = styled.div`
    width: 32px;
    height: 32px;

    border-radius: 50%;

    opacity: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background: black;
    }
`
export const IconEllipsis = styled(DotsHorizontal)`
    width: 22px;
    height: 22px;
    color: #b3b3b3;
`