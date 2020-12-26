import styled from 'styled-components'

import {Close} from 'styled-icons/evil'

import {DotsVertical} from 'styled-icons/heroicons-outline';

export const Div = styled.div`
    width 100%;
    min-width: 0;
    height: 72px;

    padding: 0px 18px;

    display: flex;
    align-items: center;
`
export const ItemThumb = styled.img`
    width: 56px;
    height: 56px;
    ${
        props => props.isArtist ? `border-radius: 50%;` : ''
    }
`
export const InfoContainer = styled.div`
    width: 100%;
    min-width: 0;
    height: 72px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 12px 14px;

    text-align: left;
`
export const Title = styled.span`
    width: 70%;

    color: #fff;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Description = styled.p`
    font-size: 13px;
    margin-top: 4px;
`

export const Button = styled.button`
    width: 52px;
    height: 72px;

    background: none;

    &:active{
        background: rgba(255,255,255,0.2);
    }
`

export const RemoveRecentSearch = styled(Close)`
    width: 22px;
    height: 72px;

    color: #fff;
`

export const Options = styled(DotsVertical)`
    width: 22px;
    height: 72px;

    color: #fff;   
`