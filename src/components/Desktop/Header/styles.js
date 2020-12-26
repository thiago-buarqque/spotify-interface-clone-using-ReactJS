import styled from 'styled-components'

import {ArrowDropDown} from 'styled-icons/material-sharp'
import {ChevronThinLeft} from 'styled-icons/entypo/'
import {ChevronThinRight} from 'styled-icons/entypo'

export const Div = styled.div`
    width: 100%;
    height: 60px;

    position: sticky;
    top:0;
    right:0;

    background-color: transparent;

    transition: background 0.2s;

    padding: 14px 32px;

    margin-bottom: 18px;

    z-index: 2;

    ${
        props => props.headerAdditionalStyle ? props.headerAdditionalStyle : ``
    }
`
export const HeaderBackgroundFX = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    transition: opacity 0.2s;
    z-index: -1;
    opacity: 0;

    background: rgba(0,0,0,0.6); 
`

export const HeaderBody = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderControls = styled.div`
    width: 100px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ButtonHeaderControl = styled.button`
    background: #0a0a0a;

    border-radius: 50%;

    width: 32px;
    height: 32px;

    cursor: pointer;

    &:disabled{
        cursor: not-allowed;
    }
`
export const IconLeftArrow = styled(ChevronThinLeft)`
    width: 20px;
    height: 20px;

    color: #b3b3b3;
`
export const IconRightArrow = styled(ChevronThinRight)`
    width: 20px;
    height: 20px;

    color: #b3b3b3;
`
export const AdditionalComponents = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    margin-left: 18px;
`
export const UserContainer = styled.div`
    width: 200px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

`
export const UserProfile = styled.button`
    min-width: 32px;
    max-width: 180px;
    height: 100%;

    background: #050505;

    &:hover{
        background: #282828;
    }
    display: flex;
    align-items: center;
    justify-content: flex-start;

    border-radius: 23px;

    cursor: pointer;
`
export const UserPicture = styled.img`
    width: 28px;
    height: 28px;

    border-radius: 50%;
`
export const UserName = styled.span`
    color:#fff;
    font-weight: bold;
    font-size: 13px;

    width: auto;

    margin-left: 8px;

    text-align: left;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const DropdownIcon = styled(ArrowDropDown)`
    width: 28px;
    height: 28px;
    color: #fff;
    margin-left: 4px;
    
`
export const ContainerUserOptions = styled.div`
    max-width: 190px;
    width: 100%;
    height: 117px;
    background: #282828;
    
    position: absolute;
    top: 55px;
    z-index: 2;

    border-radius: 3px;
    box-shadow: 0 4px 4px rgba(0,0,0,.7);

    display: none;
`
export const ButtonUserOption = styled.button`
    width: 100%;
    height: 33.33%;

    background: none;

    display: flex;
    align-items: center;

    padding: 0 18px;

    position: relative;

    &:last-child{
        ::before{
            content: '';
            height: 1px;
            width: 100%;
            background: #404040;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    &:hover{
        background #333;
    }
`