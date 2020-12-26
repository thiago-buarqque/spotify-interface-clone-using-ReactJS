import React, { useEffect, useRef, useState } from 'react';

import { useHistory } from 'react-router-dom'

import Loading from '../../../images/loading.svg'

import {
    LoadingContainer,
    Div,
    Header,
    HeaderBody,
    BtnGoBack,
    IconLeftArrow,
    HeaderTitleContainer,
    HeaderTitle,
    HeaderOptions,
    BtnFollow,
    BtnArtistOptions,
    IconVerticalDots,
    ArtistInfoContainer,
    ArtistThumb,
    ArtistName,
    ArtistPopularity,
    ArtistBody,
    BtnShuffleContainer,
    BtnShuffle,
    TopArtistTracksContainer,
    PopularTracksTitle,
    TopArtistWork,
    TopArtistWorkTitle,
    ArtistParticipatingTitle,
    OtherArtists,
    ArtistTaggedPlaylists,
    ArtistPlaylists

} from './styles.js'

import { CarouselCards } from '../Home/styles.js'
import ItemLeftThumb from '../../../components/Mobile/ItemLeftThumb'
import Card from '../../../components/Mobile/Card'
import ItemOptions from '../../../components/Mobile/ItemOptions'
import Track from '../../../components/Mobile/Track'

const ARTIST_INFO = {
    name: 'Clairo',
    popularity: '7.315.783 ouvintes mensais'
}

const ARTIST_TOP_5_TRACKS = [
    {
        name: 'Pretty Girl',
        popularity: '137.018.904'
    }, {
        name: 'Flaming Hot Cheetos',
        popularity: '125.060.548'
    }, {
        name: '4EVER',
        popularity: '83.982.693'
    }, {
        name: 'Hello?',
        popularity: '54.090.755'
    }, {
        name: 'Bubble Gum',
        popularity: '48.981.314'
    }
]

const ARTIST_TOP_WORK = [
    {
        title: 'Immunity',
        description: '2019 • Álbum',
        thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00001e0233ccb60f9b2785ef691b2fbc'
    },
    {
        title: 'Pretty Girl',
        description: '2017 • Single',
        thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00001e02efe812ae54f0698a32ccae14'
    }, {
        title: 'Diary 001',
        description: '2018',
        thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00001e02bf94e27360806b5aa5025f93'
    }, {
        title: 'Flaming Hot Cheetos',
        description: '2017 • Single',
        thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00001e0290c00af3fd8de6b9f510c1b8'
    }
]

const Artist = (props) => {
    const refHeader = useRef(null);
    const refParentContainer = useRef(null);
    const refBtnFollow = useRef(null);
    const refHeaderTitle = useRef(null);

    const [renderArtistOptions, setRenderArtistOptions] = useState(false);
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

    }, [props,isLoaded])

    let history = useHistory();

    if (!isLoaded) {
        return (
            <LoadingContainer>
                <img src={Loading} alt='loading' width='100px' height='100px' />
            </LoadingContainer>
        )
    }

    return (
        <Div ref={refParentContainer}>
            {
                renderArtistOptions ? <ItemOptions
                    thumbUrl='https://lite-images-i.scdn.co/image/5e487c0d81c577c1736772d2542a2676004e0d87'
                    itemTitle={ARTIST_INFO.name}
                    setOpenItemOptions={setRenderArtistOptions}
                    isArtist={true} />
                    : ''
            }
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
                    <HeaderTitleContainer ref={refHeaderTitle}>
                        <HeaderTitle>{ARTIST_INFO.name}</HeaderTitle>
                    </HeaderTitleContainer>

                    <HeaderOptions>
                        <BtnFollow ref={refBtnFollow} type='button'>
                            Seguir
                        </BtnFollow>

                        <BtnArtistOptions type='button' onClick={() => setRenderArtistOptions(true)}>
                            <IconVerticalDots />
                        </BtnArtistOptions>
                    </HeaderOptions>
                </HeaderBody>
            </Header>
            <ArtistInfoContainer>
                <ArtistThumb src='https://lite-images-i.scdn.co/image/5e487c0d81c577c1736772d2542a2676004e0d87' />
                <ArtistName>{ARTIST_INFO.name}</ArtistName>
                <ArtistPopularity>{ARTIST_INFO.popularity}</ArtistPopularity>
            </ArtistInfoContainer>
            <ArtistBody>
                <BtnShuffleContainer>
                    <BtnShuffle type='button'>
                        Ordem aleatória
                </BtnShuffle>
                </BtnShuffleContainer>
                <TopArtistTracksContainer>
                    <PopularTracksTitle>Popular</PopularTracksTitle>
                    {
                        ARTIST_TOP_5_TRACKS.map((track, i) => {
                            return <Track
                                key={i}
                                thumbUrl='https://lite-images-i.scdn.co/image/5e487c0d81c577c1736772d2542a2676004e0d87'
                                trackName={track.name}
                                popularity={track.popularity}
                                isArtistPageTrack={true}
                                id={(i + 1)} />
                        })
                    }
                </TopArtistTracksContainer>
                <TopArtistWork>
                    <TopArtistWorkTitle>Lançamentos populares</TopArtistWorkTitle>
                    {
                        ARTIST_TOP_WORK.map((item, i) => {
                            return <ItemLeftThumb
                                key={i}
                                thumbUrl={item.thumbUrl}
                                title={item.title}
                                description={item.description}
                            />
                        })
                    }
                </TopArtistWork>

                <ArtistParticipatingTitle>Com {ARTIST_INFO.name}</ArtistParticipatingTitle>
                <CarouselCards>

                    <Card
                        cardBackground='url("https://thisis-images.scdn.co/37i9dQZF1DZ06evO1W5c58-default.jpg")'
                        isTrackList={true}
                        cardTitle='This is Clairo' />
                    <Card
                        cardBackground='url("https://seeded-session-images.scdn.co/v1/img/artist/3l0CmX0FuQjFxr8SK7Vqag/pt")'
                        isTrackList={true}
                        cardTitle='Clario Rádio' />

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706f000000026f97bf69c50aa28543abc9f1")'
                        isTrackList={true}
                        cardTitle={`Today's Top Hits`} />
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706f0000000205b8d0fdcdd6e249dd36486e")'
                        isTrackList={true}
                        cardTitle='Good Vibes' />

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706f00000002ca19bdbff749b58d33ffebea")'
                        isTrackList={true}
                        cardTitle='Lista VIP: Manu Gavassi' />
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706f000000027fccc5779550293446bd0c2c")'
                        isTrackList={true}
                        cardTitle='Top Rising' />

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706f00000002fa4491662e1fa5936464694f")'
                        isTrackList={true}
                        cardTitle='Alternative 10s' />
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706f00000002033194582b613753efeb6e71")'
                        isTrackList={true}
                        cardTitle='Feel-Good Indie Rock' />

                </CarouselCards>

                <OtherArtists>Os fãs também curtem</OtherArtists>
                <CarouselCards>

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/6390b99e6cfc9b4e989b42dccdcbd39e3f0ae470")'
                        isArtist={true}
                        cardTitle='TEMPOREX' />
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/0c620e267b50102d46ceaca0f56bfa74caad8788")'
                        isArtist={true}
                        cardTitle='Still Woozy' />

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/59709c296f5c8b1be470bf7f76db4b0ece9212cc")'
                        isArtist={true}
                        cardTitle='No Vacation' />
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/57f62db10fda0ed058e599d75ad4ddfcc7baae76")'
                        isArtist={true}
                        cardTitle='Gus Dappertion' />

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/5be6a1eda61b77832e672dce3cddc9bb6e843b7d")'
                        isArtist={true}
                        cardTitle='Banes World' />
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/b6ef2f4a8879c444916b6010418059f31788b926")'
                        isArtist={true}
                        cardTitle={`Her's`} />

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/f63bad5970d7886b6b3f25556cfe5a0d75f93ada")'
                        isArtist={true}
                        cardTitle='Jakob Ogawa' />
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/25c4c602d6980e67abd40e601b55a496098a3c5c")'
                        isArtist={true}
                        cardTitle='Cuco' />

                </CarouselCards>

                <ArtistTaggedPlaylists>Aparece em</ArtistTaggedPlaylists>
                <CarouselCards>

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67616d00001e0284feca0133d9a8e6539a8325")'
                        isTrackList={true}
                        cardTitle='Nothing Happens' />
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67616d00001e02cee4acc7bfe23bc75461a66c")'
                        isTrackList={true}
                        cardTitle='Charli' />

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67616d00001e02113ef593aa679b556f0659b2")'
                        isTrackList={true}
                        cardTitle='Dawn' />
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67616d00001e024b46f30941a3b8b980ff9feb")'
                        isTrackList={true}
                        cardTitle='R.Y.C' />

                </CarouselCards>

                <ArtistPlaylists>Playlists do artista</ArtistPlaylists>
                <CarouselCards>

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706c0000da843edfe78eee1b8b40f688dff0")'
                        isTrackList={true}
                        cardTitle='Immunity' />
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706c0000da84c1e4d1c5e09f700f9dcf37b8")'
                        isTrackList={true}
                        cardTitle='Songs I like in 2019' />

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706c0000da84f5e72e24502432b65e3489c0")'
                        isTrackList={true}
                        cardTitle='Clairo - Top Picks' />

                </CarouselCards>
            </ArtistBody>
        </Div>
    )

}

export default Artist;