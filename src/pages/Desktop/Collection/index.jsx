import React, { useRef, useState } from 'react'

import { Route, Switch } from 'react-router-dom'

import {
    Container,
    CollectionContainer,
    CollectionBody,
    Section,
    SectionHeader,
    SectionHeaderInfo,
    SectionTitle,
    SectionBody,
    LikedSongsContainer,
    LikedSongsBody,
    LikedSongs,
    LikedSong,
    LikedSongArtist,
    LikedSongName,
    LikedSongsTitle,
    LikedSongsCounter,
    BtnPlayLikedSongs,
    IconPlay,
    AdditionalContent,
    HLinkHeaderNavigation,
    BtnHeaderNavigation
} from './styles.js'

import Header from '../../../components/Desktop/Header'
import VerticalScrollBar from '../../../components/Desktop/VerticalScrollBar'
import Card from '../../../components/Desktop/Card'

const Collection = props => {
    const CARD_COLORS = ['#264653',
        '#2a9d8f',
        '#e9c46a',
        '#f4a261',
        '#e76f51',
        '#a8dadc',
        '#457b9d',
        '#1d3557',
        '#fca311',
        '#6d6875',
        '#ffc6ff',
        '#006d77',
        '#f2cc8f',
        '#81b29a',
        '#bee3db']

    const pickRandomColor = () => { return CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)] }

    const refParentContainer = useRef(null)
    const refParentBody = useRef(null)

    const CARDS = [
        {
            background: pickRandomColor(),
            title: 'Título do card',
            description: 'Descrição do card atual e tals'
        },
        {
            background: pickRandomColor(),
            title: 'Título do card',
            description: 'Descrição do card atual e tals'
        },
        {
            background: pickRandomColor(),
            title: 'Título do card',
            description: 'Descrição do card atual e tals'
        },
        {
            background: pickRandomColor(),
            title: 'Título do card',
            description: 'Descrição do card atual e tals'
        },
        {
            background: pickRandomColor(),
            title: 'Título do card',
            description: 'Descrição do card atual e tals'
        },
        {
            background: pickRandomColor(),
            title: 'Título do card',
            description: 'Descrição do card atual e tals'
        },
        {
            background: pickRandomColor(),
            title: 'Título do card',
            description: 'Descrição do card atual e tals'
        },
        {
            background: pickRandomColor(),
            title: 'Título do card',
            description: 'Descrição do card atual e tals'
        },
        {
            background: pickRandomColor(),
            title: 'Título do card',
            description: 'Descrição do card atual e tals'
        },
        {
            background: pickRandomColor(),
            title: 'Título do card',
            description: 'Descrição do card atual e tals'
        },
    ]

    const [isBtnPlaylistActive, setIsBtnPlaylistActive] = useState(false);
    const [isBtnPodcastsActive, setIsBtnPodcastsActive] = useState(false);
    const [isBtnArtistsActive, setIsBtnArtistsActive] = useState(false);
    const [isBtnAlbumsActive, setIsBtnAlbumsActive] = useState(false);

    const HeaderAdditionalElements = () => {
        return (
            <AdditionalContent>
                <HLinkHeaderNavigation to='/collection/playlists'>
                    <BtnHeaderNavigation type='button' isActive={isBtnPlaylistActive}>
                        Playlists
                    </BtnHeaderNavigation>
                </HLinkHeaderNavigation>

                <HLinkHeaderNavigation to='/collection/podcasts'>
                    <BtnHeaderNavigation type='button' isActive={isBtnPodcastsActive}>
                        Podcasts
                    </BtnHeaderNavigation>
                </HLinkHeaderNavigation>

                <HLinkHeaderNavigation to='/collection/artists'>
                    <BtnHeaderNavigation type='button' isActive={isBtnArtistsActive}>
                        Artistas
                    </BtnHeaderNavigation>
                </HLinkHeaderNavigation>

                <HLinkHeaderNavigation to='/collection/albums'>
                    <BtnHeaderNavigation type='button' isActive={isBtnAlbumsActive}>
                        Albuns
                    </BtnHeaderNavigation>
                </HLinkHeaderNavigation>
            </AdditionalContent>
        )
    }

    const renderPlaylists = () => {
        setIsBtnPlaylistActive(true)
        setIsBtnPodcastsActive(false)
        setIsBtnArtistsActive(false)
        setIsBtnAlbumsActive(false)

        return (
            <Section>
                <SectionHeader>
                    <SectionHeaderInfo>
                        <SectionTitle>Playlists</SectionTitle>
                    </SectionHeaderInfo>
                </SectionHeader>
                <SectionBody>
                    <LikedSongsContainer>
                        <LikedSongsBody>
                            <LikedSongs>
                                <LikedSong className='--liked-song'>
                                    <LikedSongArtist>Billie Eilish</LikedSongArtist>
                                    <LikedSongName>listen before I go</LikedSongName>
                                </LikedSong>
                                <LikedSong className='--liked-song'>
                                    <LikedSongArtist>Billie Eilish</LikedSongArtist>
                                    <LikedSongName>listen before I go</LikedSongName>
                                </LikedSong>
                                <LikedSong className='--liked-song'>
                                    <LikedSongArtist>Billie Eilish</LikedSongArtist>
                                    <LikedSongName>listen before I go</LikedSongName>
                                </LikedSong>
                                <LikedSong className='--liked-song'>
                                    <LikedSongArtist>Billie Eilish</LikedSongArtist>
                                    <LikedSongName>listen before I go</LikedSongName>
                                </LikedSong>
                            </LikedSongs>
                            <LikedSongsTitle>Músicas curtidas</LikedSongsTitle>
                            <LikedSongsCounter>480 músicas curtidas</LikedSongsCounter>
                            <BtnPlayLikedSongs type='button' id='btn-play-liked-songs'>
                                <IconPlay/>
                            </BtnPlayLikedSongs>
                        </LikedSongsBody>
                    </LikedSongsContainer>
                    {
                        CARDS.map((card, i) => {
                            return <Card
                                key={i}
                                background={card.background}
                                title={card.title}
                                description={card.description} />
                        })
                    }
                </SectionBody>
            </Section>
        )
    }

    const renderPodcasts = () => {
        setIsBtnPlaylistActive(false)
        setIsBtnPodcastsActive(true)
        setIsBtnArtistsActive(false)
        setIsBtnAlbumsActive(false)

        return (
            <Section>
                <SectionHeader>
                    <SectionHeaderInfo>
                        <SectionTitle>Podcasts</SectionTitle>
                    </SectionHeaderInfo>
                </SectionHeader>
                <SectionBody>
                    {
                        CARDS.map((card, i) => {
                            return <Card
                                key={i}
                                background={card.background}
                                title={card.title}
                                description={card.description} />
                        })
                    }
                    {
                        CARDS.map((card, i) => {
                            return <Card
                                key={i}
                                background={card.background}
                                title={card.title}
                                description={card.description} />
                        })
                    }
                </SectionBody>
            </Section>
        )
    }

    const renderArtists = () => {
        setIsBtnPlaylistActive(false)
        setIsBtnPodcastsActive(false)
        setIsBtnArtistsActive(true)
        setIsBtnAlbumsActive(false)

        return (
            <Section>
                <SectionHeader>
                    <SectionHeaderInfo>
                        <SectionTitle>Artistas</SectionTitle>
                    </SectionHeaderInfo>
                </SectionHeader>
                <SectionBody>
                    {
                        CARDS.map((card, i) => {
                            return <Card
                                key={i}
                                background={card.background}
                                title={card.title}
                                description={card.description}
                                isArtist={true} />
                        })
                    }
                </SectionBody>
            </Section>
        )
    }

    const renderAlbums = () => {
        setIsBtnPlaylistActive(false)
        setIsBtnPodcastsActive(false)
        setIsBtnArtistsActive(false)
        setIsBtnAlbumsActive(true)

        return (
            <Section>
                <SectionHeader>
                    <SectionHeaderInfo>
                        <SectionTitle>Albuns</SectionTitle>
                    </SectionHeaderInfo>
                </SectionHeader>
                <SectionBody>
                    {
                        CARDS.map((card, i) => {
                            return <Card
                                key={i}
                                background={card.background}
                                title={card.title}
                                description={card.description} />
                        })
                    }
                    {
                        CARDS.map((card, i) => {
                            return <Card
                                key={i}
                                background={card.background}
                                title={card.title}
                                description={card.description} />
                        })
                    }
                </SectionBody>
            </Section>
        )
    }    

    return (
        <Container>
            <VerticalScrollBar refParentContainer={refParentContainer} refParentBody={refParentBody} />
            <CollectionContainer ref={refParentContainer}>
                <CollectionBody ref={refParentBody}>
                    <Header 
                    additionalElements={HeaderAdditionalElements}
                    refParentContainer={refParentContainer}
                    handleGoBackHistory={props.handleGoBackHistory}
                    handleGoForwardHistory={props.handleGoForwardHistory}
                    getCustomHistoryInfo={props.getCustomHistoryInfo} />

                    <Switch>
                        <Route path='/collection/playlists' component={renderPlaylists} />
                        <Route path='/collection/podcasts' component={renderPodcasts} />
                        <Route path='/collection/artists' component={renderArtists} />
                        <Route path='/collection/albums' component={renderAlbums} />
                    </Switch>
                </CollectionBody>
            </CollectionContainer>
        </Container>
    )
}

export default Collection