import React, { useRef, useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'

import {
    Div,
    HeaderBackgroundFX,
    HeaderBody,
    HeaderControls,
    ButtonHeaderControl,
    IconLeftArrow,
    IconRightArrow,
    AdditionalComponents,
    UserContainer,
    UserProfile,
    UserPicture,
    UserName,
    DropdownIcon,
    ContainerUserOptions,
    ButtonUserOption
} from './styles.js'

import UserPic from '../../../images/user_picture.jfif'

const Header = props => {
    let history = useHistory()

    const refContainerUserOptions = useRef(null)
    const refUserProfile = useRef(null)
    const refHeader = useRef(null)
    const refBackgroundFX = useRef(null)

    const refBtnGoBack = useRef(null)
    const refBtnGoForward = useRef(null)

    const CUSTOM_HISTORY_INFO = props.getCustomHistoryInfo()
    const disableBtnGoBack = CUSTOM_HISTORY_INFO.isFirstIndex
    const disableBtnGoForward = CUSTOM_HISTORY_INFO.isLastIndex

    const [firstRender, setFirstRender] = useState(false)

    const DEFAULT_BACKGROUND_ON_SCROLL = 'rgba(7,7,7,1)'
    const BLACK_BACKGROUND_VALUE = 'rgba(0, 0, 0, 0)'

    const handleUserProfileClick = (e) => {
        const userOptions = refContainerUserOptions.current
        const userProfile = refUserProfile.current

        let useOptionsStyle = window.getComputedStyle(userOptions)

        if (useOptionsStyle.getPropertyValue('display') === 'none') {
            userOptions.style.display = 'block'
            userProfile.style.background = '#282828'
        }
        else {
            userOptions.style.display = 'none'
            userProfile.style.background = '#050505'
        }
    }
    useEffect(() => {
        const handleParentScroll = () => {
            const header = refHeader.current;
            const background_fx_container = refBackgroundFX.current
            let refHeaderStyle = window.getComputedStyle(header)

            const maxScrollValue = props.scrollValueMarker
            const parentContainer = props.refParentContainer.current
            const background_on_scroll = props.backgroundOnScroll

            const headerBackground = refHeaderStyle.getPropertyValue('background-color').toString()

            if (((parentContainer.scrollTop > maxScrollValue ||
                parentContainer.scrollTop > 0) && !maxScrollValue) &&
                headerBackground === BLACK_BACKGROUND_VALUE) {
                header.style.backgroundColor = background_on_scroll || DEFAULT_BACKGROUND_ON_SCROLL
                header.style.zIndex = '3';
                background_fx_container.style.opacity = '1'
            }
            else if (((parentContainer.scrollTop === 0 && !maxScrollValue)) ||
                parentContainer.scrollTop <= maxScrollValue) {
                header.style.backgroundColor = BLACK_BACKGROUND_VALUE
                header.style.zIndex = '2'
                background_fx_container.style.opacity = '0'
            }
        }

        if (!firstRender) {
            props.refParentContainer.current.addEventListener('scroll', handleParentScroll)
            setFirstRender(true)
        }
    }, [firstRender, props])

    const handleGoBack = () => {
        let result = props.handleGoBackHistory()

        history.push(result.path)
    }

    const handleGoForward = () => {
        let result = props.handleGoForwardHistory()

        history.push(result.path)
    }

    return (
        <Div ref={refHeader} id='--top-header'
            headerAdditionalStyle={props.headerAdditionalStyle ? props.headerAdditionalStyle : false}>
            <HeaderBackgroundFX ref={refBackgroundFX}></HeaderBackgroundFX>
            <HeaderBody headerBodyAdditionalStyle={props.headerBodyAdditionalStyle ? props.headerBodyAdditionalStyle : false}>
                <HeaderControls>
                    <ButtonHeaderControl ref={refBtnGoBack} type='button' onClick={handleGoBack} disabled={disableBtnGoBack}>
                        <IconLeftArrow />
                    </ButtonHeaderControl>
                    <ButtonHeaderControl ref={refBtnGoForward} type='button' onClick={handleGoForward} disabled={disableBtnGoForward}>
                        <IconRightArrow />
                    </ButtonHeaderControl>
                </HeaderControls>
                <AdditionalComponents>
                    {
                        props.additionalElements ? props.additionalElements() : ''
                    }
                </AdditionalComponents>
                <UserContainer>
                    <UserProfile ref={refUserProfile} onClick={handleUserProfileClick}>
                        <UserPicture src={UserPic} />
                        <UserName>Thiago Buarque</UserName>
                        <DropdownIcon />
                    </UserProfile>
                    <ContainerUserOptions ref={refContainerUserOptions}>
                        <ButtonUserOption type='button'>
                            Conta
                        </ButtonUserOption>
                        <ButtonUserOption type='button'>
                            Perfil
                        </ButtonUserOption>
                        <ButtonUserOption type='button'>
                            Sair
                        </ButtonUserOption>
                    </ContainerUserOptions>
                </UserContainer>
            </HeaderBody>
        </Div>
    )
}

export default Header;