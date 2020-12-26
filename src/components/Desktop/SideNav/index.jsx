import React from 'react'

import {
    Div,
    LinkLogo,
    Logo,
    Body,
    BtnHLink,
    Button,
    ButtonAddPlaylist,
    ButtonLikedSongs,
    SpanButton,
    IconHome,
    IconActiveHome,
    IconSearch,
    IconCollection,
    IconActiveCollection,
    ContainerPlaylists,
    PlaylistsTitle,
    ContainerIconAdd,
    IconAdd,
    ContainerIconHeart,
    IconHeart,
    Separator,
    ContainerUserPlaylists,
    UserPlaylist
} from './styles.js'

const SideNav = (props) => {
    const currentPath = props.history.location.pathname

    let isHomeActive = currentPath === '/' ? true : false
    let isSearchActive = currentPath === '/search' ? true : false
    let isCollectionActive = (currentPath === '/collection/playlists' ||
        currentPath === '/collection/podcasts' ||
        currentPath === '/collection/artists' ||
        currentPath === '/collection/albums') ? true : false

    return (
        <Div>
            <LinkLogo to='/'>
                <Logo />
            </LinkLogo>
            <Body>
                <BtnHLink to='/'>
                    <Button type='button' isActive={isHomeActive}>
                        {
                            isHomeActive ? <IconActiveHome /> : <IconHome />
                        }

                        <SpanButton>Início</SpanButton>
                    </Button>
                </BtnHLink>

                <BtnHLink to='/search'>
                    <Button type='button' isActive={isSearchActive}>                                             
                        <IconSearch />
                        <SpanButton>Buscar</SpanButton>
                    </Button>
                </BtnHLink>
                <BtnHLink to='/collection/playlists'>
                    <Button type='button' isActive={isCollectionActive}>
                        {
                            isCollectionActive ? <IconActiveCollection /> : <IconCollection />
                        }
                        
                        <SpanButton>Sua Biblioteca</SpanButton>
                    </Button>
                </BtnHLink>
                <ContainerPlaylists>
                    <PlaylistsTitle>Playlists</PlaylistsTitle>
                    <ButtonAddPlaylist type='button'>
                        <ContainerIconAdd>
                            <IconAdd />
                        </ContainerIconAdd>
                        <SpanButton>Criar playlist</SpanButton>
                    </ButtonAddPlaylist>
                    <ButtonLikedSongs type='button'>
                        <ContainerIconHeart>
                            <IconHeart />
                        </ContainerIconHeart>
                        <SpanButton>Músicas Curtidas</SpanButton>
                    </ButtonLikedSongs>
                    <Separator />
                    <ContainerUserPlaylists>
                        <UserPlaylist to='/playlist'>Daily Mix 1</UserPlaylist>
                        <UserPlaylist to='/playlist'>Daily Mix 1</UserPlaylist>
                    </ContainerUserPlaylists>
                </ContainerPlaylists>


            </Body>
        </Div>
    )
}

export default SideNav;