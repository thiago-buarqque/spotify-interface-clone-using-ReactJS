import React, { useEffect, useRef, useState } from 'react';

import { useHistory } from 'react-router-dom'

import {
    Div,
    Header,
    HeaderBody,
    BtnGoBack,
    IconLeftArrow,
    TrackListTitleContainer,
    HeaderTrackListTitle,
    HeaderOptions,
    BtnFollow,
    BtnTrackOptions,
    IconVerticalDots,
    TrackListThumbContainer,
    TrackListThumb,
    TrackListTitle,
    TrackListCreator,
    TrackListBody,
    BtnShuffleContainer,
    BtnShuffle,
    SuggestionsTitle,
    SuggestionsContainer
} from './styles.js';

import Track from '../../../components/Mobile/Track'
import Card from '../../../components/Mobile/Card'
import ItemOptions from '../../../components/Mobile/ItemOptions'

const TRACK_LIST_ITEMS = [
    {
        trackName: 'When We Were Young',
        artist: 'Adele'
    }, {
        trackName: 'Set Fire to the Rain',
        artist: 'Adele'
    }, {
        trackName: 'Rolling in the Deep',
        artist: 'Adele'
    }, {
        trackName: 'Hello',
        artist: 'Adele'
    }, {
        trackName: 'Someone Like You',
        artist: 'Adele'
    }, {
        trackName: 'Send My Love (To You New Lover)',
        artist: 'Adele'
    }, {
        trackName: 'Make You Feel My Love',
        artist: 'Adele'
    }, {
        trackName: 'Chasing Pavements',
        artist: 'Adele'
    }, {
        trackName: 'All I Ask',
        artist: 'Adele'
    }, {
        trackName: 'Water Under the Bridge',
        artist: 'Adele'
    }, {
        trackName: 'Skyfall',
        artist: 'Adele'
    }, {
        trackName: 'Daydreamer',
        artist: 'Adele'
    }, {
        trackName: 'Romour Has It',
        artist: 'Adele'
    }, {
        trackName: 'Turning Tables',
        artist: 'Adele'
    }, {
        trackName: 'River Lea',
        artist: 'Adele'
    }, {
        trackName: 'Melt My Hear To Stone',
        artist: 'Adele'
    }, {
        trackName: 'Crazy For You',
        artist: 'Adele'
    }, {
        trackName: 'Remedy',
        artist: 'Adele'
    }, {
        trackName: `Don't you Remember`,
        artist: 'Adele'
    }, {
        trackName: 'Hometown Glory',
        artist: 'Adele'
    }, {
        trackName: 'Million Years Ago',
        artist: 'Adele'
    }, {
        trackName: 'I Miss You',
        artist: 'Adele'
    }, {
        trackName: 'Many Shades of Black',
        artist: 'Adele, The Raconteurs'
    }, {
        trackName: 'Water And A Flame (feat. Adele)',
        artist: 'Daniel Merriweather, Adele'
    }, {
        trackName: 'Hometown Glory (High Contrast Remix)',
        artist: 'Adele'
    }
]

const getPlaylistImgSize = () => {
    return (window.innerWidth - 50) / 2;
}

const TrackList = (props) => {
    const refHeader = useRef(null);
    const refParentContainer = useRef(null);
    const refBtnFollow = useRef(null);
    const refHeaderTitle = useRef(null);

    const [renderTrackOptions, setRenderTrackOptions] = useState(false);

    const [isLoaded, setIsLoaded] = useState(false)
    const refFirstLoad = useRef(true)

    const handleGoBack = () => {
        let newPath = props.handleGoBack()
        history.push(newPath)
    }

    useEffect(() => {
        if (refFirstLoad.current) {
            setIsLoaded(true)
            refFirstLoad.current = false;
            const currentPath = props.history.location.pathname
            props.appendHistoryPath(currentPath)
        }

        if (isLoaded) {
            refParentContainer.current.addEventListener('scroll', () => {
                if (refParentContainer.current.scrollTop >= 296) {
                    refHeader.current.style.backgroundColor = 'black';
                    refHeaderTitle.current.style.opacity = '1';
                    refBtnFollow.current.style.opacity = '0'
                } else {
                    refHeader.current.style.backgroundColor = 'transparent';
                    refHeaderTitle.current.style.opacity = '0';
                    refBtnFollow.current.style.opacity = '1'
                }
            });
        }

    },[props,isLoaded])

    let history = useHistory();

    return (
        <Div ref={refParentContainer}>
            <Header ref={refHeader}>
                <HeaderBody>
                    {/* This div prevents to get a bug by no showing the goBack button */}
                    <div>
                        {
                            props.history.action !== 'POP' ?
                                <BtnGoBack type='button' onClick={handleGoBack}>
                                    <IconLeftArrow />
                                </BtnGoBack> : ''
                        }
                    </div>
                    <TrackListTitleContainer ref={refHeaderTitle}>
                        <HeaderTrackListTitle>This Is Adele</HeaderTrackListTitle>
                    </TrackListTitleContainer>

                    <HeaderOptions>
                        <BtnFollow ref={refBtnFollow} type='button'>
                            Seguir
                        </BtnFollow>

                        <BtnTrackOptions type='button' onClick={() => setRenderTrackOptions(true)}>
                            <IconVerticalDots />
                        </BtnTrackOptions>
                    </HeaderOptions>
                </HeaderBody>
            </Header>
            <TrackListThumbContainer>
                <TrackListThumb src='https://lite-images-i.scdn.co/image/ab67706f00000003d1b80fb90502dd91441182ed' />
                <TrackListTitle>This Is Adele</TrackListTitle>
                <TrackListCreator>De Spotify</TrackListCreator>
            </TrackListThumbContainer>
            <TrackListBody>
                {
                    renderTrackOptions ? <ItemOptions
                        thumbUrl='https://lite-images-i.scdn.co/image/ab67706f00000003d1b80fb90502dd91441182ed'
                        itemTitle='This Is Adele'
                        setOpenItemOptions={setRenderTrackOptions} />
                        : ''
                }
                <BtnShuffleContainer>
                    <BtnShuffle type='button'>
                        Ordem aleatória
                    </BtnShuffle>
                </BtnShuffleContainer>
                {
                    TRACK_LIST_ITEMS.map((item, i) => {
                        return (
                            <Track
                                key={i}
                                thumbUrl='https://lite-images-i.scdn.co/image/cbbdfb209cc38b2999b1882f42ee642555316313'
                                trackName={item.trackName}
                                artist={item.artist} />
                        )
                    })
                }
                <SuggestionsTitle>Mais que talvez você goste</SuggestionsTitle>
                <SuggestionsContainer>
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706f000000023c6203803741db6a7f91042a")'
                        isTrackList={true}
                        imgSize={`${getPlaylistImgSize()}px`}
                        cardTitle='Rewind - The Sound of 2015'
                        additionalStyle='margin: 0 !important' />
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706f0000000229bdeb5e883d4b743f960127")'
                        isTrackList={true}
                        imgSize={`${getPlaylistImgSize()}px`}
                        cardTitle='All Out 10s'
                        additionalStyle='margin: 0 !important' />
                </SuggestionsContainer>
            </TrackListBody>
        </Div>
    )
}

export default TrackList;