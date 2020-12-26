import styled from 'styled-components'

import {ArrowLeft} from 'styled-icons/feather'
import {DotsVertical} from 'styled-icons/heroicons-outline';
import {ChevronThinRight} from 'styled-icons/entypo'

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
    top: 0;
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
    font-weight: 700;
    max-width: calc(100% - 110px);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 15px;
`
export const HeaderOptions = styled.div`
    width: auto;
    height: auto;
`
export const BtnShowOptions = styled.button`
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

    position: sticky;
    top: 0;
    z-index:0;

    background-image: linear-gradient(rgba(55, 55, 55, 0.8), transparent);

    padding: 82px 18px 0px 18px;
`
export const ShowThumbContainer = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    align-items: flex-start;
    
    padding-bottom: 12px;
`
export const ShowThumb = styled.img`
    width: 64px;
    height: 64px;
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
    font-size: 28px;
    width: 100%;
    color: #fff;
    font-weight: bold;

    margin: 12px 0;
`
export const ShowCreator = styled.p`
    color: #fff;
    font-size: 12px;
`
export const LastUpdate = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
`
export const DivEpisodeTimeInfo = styled.div`
    display: flex;
    align-items: center;
`
export const EpisodeDuration = styled.span`
    color: #b3b3b3;
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;

    font-weight: 400;

    ::before{
        content: " • ";
    }
`
export const EpisodeContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding-top: 16px;
    position: relative;
    text-align: left;
    background: linear-gradient(transparent, rgb(18, 18, 18) 42px) transparent;
`

export const ShowDescriptionContainer = styled.div`
    width: 100%;
    height: auto;

    background: black;

    padding: 18px 18px 0 18px;  

    background: rgb(18, 18, 18);

    position: relative;
`
export const ShowDescription = styled.p`
    font-size: 15px;
    line-height: 24px;
    color: rgb(179, 179, 179);
    margin-bottom: 8px;
`

export const BtnPlay = styled.button`
    background-color: rgb(29, 185, 84);
    color: rgb(255, 255, 255);
    display: inline-block;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    border-radius: 24px;
    padding: 16px 48px;

    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.1em;
    line-height: 16px;
    text-transform: uppercase;

    margin-bottom: 24px;

    display: block;
`
export const ShowLargeThumbContainer = styled.div`
    padding: 18px 18px 0 18px;  

    background: rgb(18, 18, 18);
    
    position: relative;

    width: 100%;
    height: auto;
`

export const ShowLargeThumb = styled.img`
    width: 100%;
    height: 100%;
`
export const BtnShowAllEpisodes = styled.button`
    touch-action: manipulation;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    transition: background-color 0.2s ease 0s;
    padding: 28px 18px;

    background: rgb(18, 18, 18);

    position: relative;
`
export const SpanBtnAllEpisodes = styled.span`
    font-size: 17px;
    color: #fff;
    font-weight: bold;
`
export const RightArrowIcon = styled(ChevronThinRight)`
    color: #b3b3b3;

    width: 30px;
    height: 30px;
`