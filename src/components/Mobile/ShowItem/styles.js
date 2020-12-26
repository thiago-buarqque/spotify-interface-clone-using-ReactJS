import styled from 'styled-components'

import { PlayCircle } from 'styled-icons/remix-fill'

export const Div = styled.div`
    width: 100%;
    min-height: 128px;
    height: auto;
    max-height: 152px;

    position: relative;

    padding: 16px 16px 24px 16px;

    background: #282828;

    border-radius: 8px;

    margin-bottom: 10px;
`
export const ShowHeader = styled.div`
    width: 100%;
    height: auto
    max-height: 72px;
    min-height: 48px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 4px;
`
export const ShowTitleContainer = styled.div`
    width: 100%;
    height: auto;
    margin-right: 8px;
`
export const ShowTitle = styled.span`
    color: #fff;
    font-size: 16px;
    line-height: 24px;
`
export const BtnPlay = styled.button`
    width: 52px;
    height: 52px;

    background: none;
`
export const PlayIcon = styled(PlayCircle)`
    width: 52px;
    height: 52px;

    color: #fff;
`

export const ShowInfo = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;

    margin: 8px 0;
`
export const SpanIsExplicit = styled.span`
    background-color: rgb(64, 64, 64);

    height: 16px;

    margin-right: 8px;

    border-radius: 4px;

    padding: 2px 8px;

    font-size: 10px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 1px;
`

export const ShowDate = styled.span`
    color: #b3b3b3;
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;

    font-weight: 400;
`
export const ShowDuration = styled.span`
    color: #b3b3b3;
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;

    font-weight: 400;
    
    ::before{
        content: " • ";
    }
`
export const ShowDescription = styled.div`
    width: 100%;
    height: 32px;
`
export const Description = styled.span`
    font-size: 13px;

    line-height: 16px;
    color: rgb(179, 179, 179);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`