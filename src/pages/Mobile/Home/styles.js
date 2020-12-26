import styled from 'styled-components';

import {Settings as _Settings} from 'styled-icons/feather';

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const MobileHomeBody = styled.div`
    width: 100%;
    height: auto;

    background-image: linear-gradient(150deg, rgba(122, 166, 206, 0.8) 20px, rgb(0, 0, 0) 220px);

    position: relative;
`
export const UserSettings = styled.div`
    width: 100%;
    height: 69px;

    padding: 14px 14px 16px;

    display: flex;
    justify-content: flex-end;
`
export const Settings = styled(_Settings)`
    width: 28px;
    height: 28px;

    color: #fff;
`
export const Section = styled.div`
    height: auto;
    width: 100%;

    padding: 15px 0;

    text-align: center;
`
export const SectionTitle = styled.div`
    font-weight: bold;
    color: #fff;
    font-size: 17px;

    max-width: 75%;
    margin: 0 auto 4px auto;
`
export const CarouselCards = styled.div`
    width: 100%;

    overflow-x: auto;
    overflow-y: hidden;

    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */

    ::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }

    padding: 8px 0;

    display: flex;
    flex-wrap: nowrap;
`
