import React from 'react';

import { useHistory } from 'react-router-dom'

import { ReactComponent as HomeIcon } from '../../../images/icons/home.svg'
import { ReactComponent as SearchIcon } from '../../../images/icons/search.svg'

import { Div, NavBarContainer, Button, Span, SpotifyIcon } from './styles.js'

const NavBottom = (props) => {
    let history = useHistory();

    const currentPath = props.history.location.pathname

    const isSearchActive = currentPath === '/search' ? true : false
    const isHomeActive = currentPath === '/' ? true : false

    const goHome = () => {
        history.push("/")
    }
    const goSearchPage = () => {
        history.push("/search")
    }    

    const homeIconColor = isHomeActive ? "#fff" : "#c2c3c4"
    const searchIconColor = isSearchActive ? "#fff" : "#c2c3c4"

    // useEffect(()=>{
    //     props.appendHistoryPath(currentPath)
    // })

    return (
        <Div>
            <NavBarContainer>
                <Button type="button" onClick={goHome} isActive={isHomeActive}>
                    <HomeIcon style={{ color: homeIconColor }} />
                    <Span isActive={isHomeActive}>Início</Span>
                </Button>
            </NavBarContainer>

            <NavBarContainer>
                <Button type="button" onClick={goSearchPage} isActive={isSearchActive}>
                    <SearchIcon style={{ color: searchIconColor }} />
                    <Span isActive={isSearchActive}>Buscar</Span>
                </Button>
            </NavBarContainer>

            <NavBarContainer>
                <Button type="button">
                    <SpotifyIcon />
                    <Span>Baixar aplicativo</Span>
                </Button>
            </NavBarContainer>
        </Div>
    )
}

export default NavBottom;