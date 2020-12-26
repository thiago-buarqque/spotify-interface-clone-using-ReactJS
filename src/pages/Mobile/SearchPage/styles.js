import styled from 'styled-components';

import {ArrowLeft} from 'styled-icons/feather'

import {Close} from 'styled-icons/evil'

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ParentContainer = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    display: flex;
    flex-direction: column;

    overflow-x: hidden;


`
export const Header = styled.div`
    width: 100%;
    height: 48px;

    background: #535353;

    display: flex;
    align-items: center;

    padding: 0 2px;

    margin-bottom: 10px;

    text-align: center;

    position: fixed;
    top: 0;

    z-index: 2;
`

export const BtnGoBack = styled.button`
    width: 42px;
    height: 42px;

    border: none;
    background: none;

    z-index: 2;
`

export const LeftArrow = styled(ArrowLeft)`
    width: 40px;
    height: 40px;

    padding: 6px;

    color: #fff;

    z-index:2;
`

export const InputSearch = styled.input`
    width: 100%;
    height: 100%;

    border: none;
    background: none;

    color: #fff;

    font-size: 1.018em;
    
    padding-left: 2px;

    ::placeholder{
        color: #fff;
    }
`
export const ClearInputSearch = styled(Close)`
    width: 48px;
    height: 48px;

    padding: 8px;

    color: #fff;
`
export const ResultContainer = styled.div`
    width: 100%;
    height: 100%;

    margin: 0;

    overflow-x: hidden;

    padding-top: 30px;

    ${
        props => props.loadedContent === 'playlist' ?
        `
            display: grid;
            grid-template-columns: auto auto;
            justify-items: center;
            align-items: center;

            padding: 44px 10px 10px 10px;
        ` : ''
    }


`

export const MainResultContainer = styled.div`
    width: 100%;
    height: 100%;

    padding-top: 30px;

    background-image: linear-gradient(150deg, rgba(208, 202, 185, 0.8) 20px, rgb(0, 0, 0) 220px);
`

export const RecentSearchContainer = styled.div`
    width: 100%;
    height: auto;

    padding: 60px 0 0;

    position: relative;   

    text-align: center;

    background: black;
`

export const RecentSearchTitle = styled.p`
    Color: #fff;
    font-size: 1.06em;
    font-weight: bold;

    margin-bottom: 15px;
`

export const ClearRecentSearch = styled.button`
    background: none;
    border: none;
    width: 50%;
    height: 48px;

    position: relative;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.9em;
    font-weight: bold;
    letter-spacing: 1px;
    color: #fff;
    text-transform: uppercase;
`

export const MainContentTitle = styled.p`
    font-weight: bold;
    color: #fff;
    text-align: center;

    font-size: 1.05em;
    
    width: 100%;

    margin: 20px auto 10px auto;
`

export const TracksContainer = styled.div`
    position: relative;

    width: 100%;
    height: auto;

    padding: 15px 0;
`

export const BtnSearchTags = styled.button`
    width: 100%;
    height: 66px;

    border: none;
    background: none;

    color: #fff;
    font-size: 1em;

    text-align: left;

    padding: 0px 18px 30px 18px;

`

export const SearchTagContainer = styled.div`
    position: absolute;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const SearchTag = styled.p`
    color: #fff;
`