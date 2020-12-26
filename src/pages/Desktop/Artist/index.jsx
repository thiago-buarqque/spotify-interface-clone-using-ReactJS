import React, { useRef, useEffect, useState } from 'react'

import { Route, Switch, useHistory } from 'react-router-dom'

import {
    ArtistHome,
    ArtistSection,
    SectionTitle,
    SectionContent,
    LoadMoreContainer,
    BtnLoadMore,
    IconChevronDown,
    ArtistParent,
    ArtistContainer,
    ArtistBody,
    ArtistInfoContainer,
    ArtistInfoBackgroundFX,
    ArtistInfo,
    VerifiedArtist,
    IconVerified,
    TxtVerified,
    ArtistName,
    ArtistPopularity,
    ArtistControls,
    BtnPlayArtist,
    IconPlay,
    BtnFollow,
    BtnArtistOptions,
    IconEllipsis,
    ArtistSections,
    BtnArtistSection,
    ContentContainer,
    ContentBackgroundFX,
    AdditionalStyleContainer,
    BtnHeaderPlay,
    HeaderTitle,
    Related,
    RelatedContent,
    About,
    AboutContent,
    BioContainer,
    BioTitle,
    BioP,
    ArtistListeners,
    ArtistListenersTitle,
    CityListenersContainer,
    CityListenersName,
    CityListeners
} from './styles.js'

import Header from '../../../components/Desktop/Header'
import VerticalScrollBar from '../../../components/Desktop/VerticalScrollBar'
import ArtistTrack from '../../../components/Desktop/ArtistTrack'
import ArtistCard from '../../../components/Desktop/ArtistCard'
import Card from '../../../components/Desktop/Card'

const ArtistPage = props => {
    const RELATED_ARTISTS = [
        {
            isArtist: true,
            title: 'TEMPOREX',
            background: 'url(https://i.scdn.co/image/fcc2b02609a204e3e92a81ed5dda34652d77c30c)',
            description: 'Artista',
            path: '/artist'
        },
        {
            isArtist: true,
            title: 'Still Woozy',
            background: 'url(https://i.scdn.co/image/86c32e84aab6272165902fdb2752ba0f99b26591)',
            description: 'Artista',
            path: '/artist'
        },
        {
            isArtist: true,
            title: 'No Vacation',
            background: 'url(https://i.scdn.co/image/7a505ad4767ff4a0b9e99d0149a25e3cc5811458)',
            description: 'Artista',
            path: '/artist'
        },
        {
            isArtist: true,
            title: 'Gus Dapperton',
            background: 'url(https://i.scdn.co/image/72f62d76b69c06cb192193ccfab07dfe7a2d565e)',
            description: 'Artista',
            path: '/artist'
        },
        {
            isArtist: true,
            title: 'Banes World',
            background: 'url(https://i.scdn.co/image/aa170edfad681f107d3027ff38c38d291297d1a5)',
            description: 'Artista',
            path: '/artist'
        },
        {
            isArtist: true,
            title: 'Her\'s',
            background: 'url(https://i.scdn.co/image/eea48fb73dae7d91e60f01621546258e25f4c7fe)',
            description: 'Artista',
            path: '/artist'
        },
        {
            isArtist: true,
            title: 'Still Woozy',
            background: 'url(https://i.scdn.co/image/86c32e84aab6272165902fdb2752ba0f99b26591)',
            description: 'Artista',
            path: '/artist'
        },
        {
            isArtist: true,
            title: 'No Vacation',
            background: 'url(https://i.scdn.co/image/7a505ad4767ff4a0b9e99d0149a25e3cc5811458)',
            description: 'Artista',
            path: '/artist'
        },
        {
            isArtist: true,
            title: 'Gus Dapperton',
            background: 'url(https://i.scdn.co/image/72f62d76b69c06cb192193ccfab07dfe7a2d565e)',
            description: 'Artista',
            path: '/artist'
        },
        {
            isArtist: true,
            title: 'TEMPOREX',
            background: 'url(https://i.scdn.co/image/fcc2b02609a204e3e92a81ed5dda34652d77c30c)',
            description: 'Artista',
            path: '/artist'
        },
        {
            isArtist: true,
            title: 'Still Woozy',
            background: 'url(https://i.scdn.co/image/86c32e84aab6272165902fdb2752ba0f99b26591)',
            description: 'Artista',
            path: '/artist'
        },
        {
            isArtist: true,
            title: 'No Vacation',
            background: 'url(https://i.scdn.co/image/7a505ad4767ff4a0b9e99d0149a25e3cc5811458)',
            description: 'Artista',
            path: '/artist'
        }
    ]

    const ARTIST_MAIN_TRACKS = [
        {
            name: `Pretty Girl`,
            thumb: `https://i.scdn.co/image/ab67616d0000b273efe812ae54f0698a32ccae14`,
            duration: `2:58`
        },
        {
            name: `Flaming Hot Cheetos`,
            thumb: `https://i.scdn.co/image/ab67616d0000b27390c00af3fd8de6b9f510c1b8`,
            duration: `2:03`
        },
        {
            name: `Hello?`,
            thumb: `https://i.scdn.co/image/ab67616d0000b273bf94e27360806b5aa5025f93`,
            duration: `2:15`
        },
        {
            name: `Bubble Gum`,
            thumb: `https://i.scdn.co/image/ab67616d0000b2735d93417bde90e0bd951dab08`,
            duration: `2:55`
        },
        {
            name: `4EVER`,
            thumb: `https://i.scdn.co/image/ab67616d0000b27371179dd3ac3cba1d14920469`,
            duration: `2:39`
        }
    ]

    const ARTIST_ALBUMS = [
        {
            name: `Immunity`,
            thumb: `https://i.scdn.co/image/ab67616d00001e0233ccb60f9b2785ef691b2fbc`
        }
    ]

    const ARTIST_SINGLES_AND_EPS = [
        {
            name: `I Don't Think I Can Do This Again`,
            thumb: `https://i.scdn.co/image/ab67616d00001e0200013665bdb06b8284da67d4`
        },
        {
            name: `Sofia`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02556adb8ceb7aa0097a415b1b`
        },
        {
            name: `Closer To You`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02fe7c39054263ef47d0475707`
        },
        {
            name: `Bags`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02d96158bdfbc719901f6269a2`
        },
        {
            name: `Bubble Gum`,
            thumb: `https://i.scdn.co/image/ab67616d00001e025d93417bde90e0bd951dab08`
        },
        {
            name: `Sis`,
            thumb: `https://i.scdn.co/image/ab67616d00001e025d93417bde90e0bd951dab08`
        },
        {
            name: `Heaven`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02b017bb613a6c1d2c1d928999`
        },
        {
            name: `Drown`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02cb461f74ecc3cd02f81dfed3`
        },
        {
            name: `Better (SG Lewis x Clairo)`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02944367a82df1f6fe247587dd`
        },
        {
            name: `diary 001`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02bf94e27360806b5aa5025f93`
        },
        {
            name: `4EVER`,
            thumb: `https://i.scdn.co/image/ab67616d00001e0271179dd3ac3cba1d14920469`
        },
        {
            name: `Pretty Girl`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02efe812ae54f0698a32ccae14`
        },
        {
            name: `Flaming Hot Cheetos`,
            thumb: `https://i.scdn.co/image/ab67616d00001e0290c00af3fd8de6b9f510c1b8`
        },
        {
            name: `Get With U`,
            thumb: `https://i.scdn.co/image/ab67616d00001e028d3099da3437c4b3f43e6239`
        },
        {
            name: `2 Hold U`,
            thumb: `https://i.scdn.co/image/ab67616d00001e028d3099da3437c4b3f43e6239`
        }
    ]

    const ARTIST_FEATS = [
        {
            name: `Nothing Happens`,
            thumb: `https://i.scdn.co/image/ab67616d00001e0284feca0133d9a8e6539a8325`
        },
        {
            name: `Charli`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02cee4acc7bfe23bc75461a66c`
        },
        {
            name: `Dawn`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02113ef593aa679b556f0659b2`
        },
        {
            name: `R.Y.C`,
            thumb: `https://i.scdn.co/image/ab67616d00001e024b46f30941a3b8b980ff9feb`
        },
        {
            name: `BO Y`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02ffd047138be8b56b4d547162`
        },
        {
            name: `Bedroom Tapes`,
            thumb: `https://i.scdn.co/image/ab67616d00001e029873568e011ae48942acf38b`
        },
        {
            name: `How Was Your Day?`,
            thumb: `https://i.scdn.co/image/ab67616d00001e025f911b0b3d1ec137a76cffc8`
        },
        {
            name: `Scrawny / Are You Bored Yet?`,
            thumb: `https://i.scdn.co/image/ab67616d00001e026ebb479c2160fa31c39061bc`
        },
        {
            name: `Are You Bored Yet? (feat. Clairo) [Remixes]`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02859fa52959f6c13d2d852cbc`
        },
        {
            name: `Froyo (feat. Clairo & Aso)`,
            thumb: `https://i.scdn.co/image/ab67616d00001e0261f5c023534a8e464cdc05e5`
        },
        {
            name: `Lara (feat. Clairo)`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02178cda4e2ef0055f481efeee`
        },
        {
            name: `Aesthetic Songs`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02d6a914160a008c3a53ddaa43`
        },
        {
            name: `Nothing Happens`,
            thumb: `https://i.scdn.co/image/ab67616d00001e0284feca0133d9a8e6539a8325`
        },
        {
            name: `Charli`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02cee4acc7bfe23bc75461a66c`
        },
        {
            name: `Dawn`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02113ef593aa679b556f0659b2`
        },
        {
            name: `R.Y.C`,
            thumb: `https://i.scdn.co/image/ab67616d00001e024b46f30941a3b8b980ff9feb`
        },
        {
            name: `BO Y`,
            thumb: `https://i.scdn.co/image/ab67616d00001e02ffd047138be8b56b4d547162`
        },
        {
            name: `Bedroom Tapes`,
            thumb: `https://i.scdn.co/image/ab67616d00001e029873568e011ae48942acf38b`
        },
        {
            name: `How Was Your Day?`,
            thumb: `https://i.scdn.co/image/ab67616d00001e025f911b0b3d1ec137a76cffc8`
        },
        {
            name: `Scrawny / Are You Bored Yet?`,
            thumb: `https://i.scdn.co/image/ab67616d00001e026ebb479c2160fa31c39061bc`
        }
    ]

    const ARTIST_BIO = `
    Associated with soft, intimate vocals, daydreamy atmosphere, and rumination, Clairo is singer/songwriter Claire Cottrill.
    Alternating keyboards and guitar as accompaniment, and often coloring her recordings with samples and sound effects, the
    Boston native began sharing dozens of her stylized but low-key, melody-driven tunes to music-sharing sites as a young teen
    in 2013. She eventually had a minor viral hit with 2017's "Pretty Girl," and a bigger one with "Flaming Hot Cheetos," whose
    video garnered millions of views in 2018. Officially dropping the "bedroom" from bedroom pop, Clairo made her full-length
    debut with Immunity in 2019.<br/>

    After releasing dozens of accumulated home recordings in 2013, the Clairo EP do u wanna fall in love? arrived in 2014. It
    was followed by more EPs in 2015, including have a nice day, late show, AQUARIUS BOY, and moth girl. In May of that year,
    she released the full-length metal heart, a collection of spare acoustic recordings with notable tape hiss. Meanwhile, she
    became active on YouTube with posts that included acoustic guitar covers of songs by , , and , among others. The year 2016
    brought the creased laundry EP and the six-track brains a bus station, which introduced new equipment including electric
    guitar, various keyboard voices, and drum samples. In July of that year, she also released a split EP as Claire Cottrill 
    with established English lo-fi musician.<br/>
    
    In December of 2016, the song "How Was Your Day?", a collaboration with Mellow Fellow, presented a richer indie pop sound
    with extended chords and a full arrangement of guitar, keyboards, drums, and vocal harmonies. Further establishing herself
    as a proponent of dreamy reflection, Clairo was featured in 2017 on no less than three atmospheric indie electronic pop 
    singles: "Girl" by Brennan Henderson, "You Might Be Sleeping" by Jakob Ogawa, and "Froyo" by Hans. Also that year, her 
    like-minded song "Pretty Girl" was featured on the  cassette compilation The Le Sigh, Vol. 3, and she had a second viral 
    hit with the spare keyboard ballad "Flaming Hot Cheetos." Both songs received a commercial release by  in mid-2017. An 
    official video for "Cheetos" followed in March 2018 and was covered by such media outlets as Pitchfork, NPR, and Billboard.
    Still in her late teens, Clairo followed it a month later with a funky, more fully produced single, "4EVER," which saw her 
    collaborating in the studio with Ashwin Torke, Deaton Chris Anthony, and Burns Twins. Singles including "Drown," a 
    collaboration with , and "Heaven" from the soundtrack to Skate Kitchen arrived before the end of the year.<br/>
    
    Retaining intimacy while adopting a sleeker pop sound, Clairo co-produced her first album, 2019's Immunity, with , bringing
    in guests including drummer Danielle Haim and a children's chorus. An arena tour in support of  accompanied the release and 
    was followed by a headlining tour. ~ Marcy Donelson, Rovi
    `

    const MAX_DEFAULT_LOADED_ITEMS = 12

    let history = useHistory()

    const refArtistInfo = useRef(null)
    const refHeaderAdditionalElement = useRef(null)
    const refParentContainer = useRef(null)
    const refParentBody = useRef(null)

    const [firstRender, setFirstRender] = useState(false)
    const [artistInfoHeight, setArtistInfoHeight] = useState(0)
    const [headerHeight, setHeaderHeight] = useState(0)

    const [renderAllArtistAlbums, setRenderAllArtistAlbums] = useState(false)
    const [renderAllArtistSingleEps, setRenderAllArtistSingleEps] = useState(false)
    const [renderAllArtistFeats, setRenderAllArtistFeats] = useState(false)

    const handleHeaderAdditionalContentFX = () => {
        let styleTrackListInfo = window.getComputedStyle(refArtistInfo.current)
        let header = document.getElementById('--top-header')
        let styleHeader = window.getComputedStyle(header)

        let track_list_info_height = styleTrackListInfo.getPropertyValue('height').split('px')[0]
        let header_height = styleHeader.getPropertyValue('height').split('px')[0]

        if (refParentContainer.current.scrollTop > (track_list_info_height - header_height)) {
            refHeaderAdditionalElement.current.style.opacity = '1'
        }
        else if (refParentContainer.current.scrollTop <= (track_list_info_height - header_height)) {
            refHeaderAdditionalElement.current.style.opacity = '0'
        }
    }

    const hasActiveBtn = () => {
        const oldActiveBtn = document.getElementsByClassName('--btn-section--active')[0]

        if (oldActiveBtn.classList.contains('--btn-section--active')) oldActiveBtn.classList.remove('--btn-section--active')
    }

    const handleNavigateArtistHome = () => {
        hasActiveBtn()

        let btnHome = document.getElementById('--btn-section-home')
        if (btnHome) {
            btnHome.classList.add('--btn-section--active')
            history.push('/artist')
        }
    }

    const handleNavigateRelated = () => {
        hasActiveBtn()

        refParentContainer.current.scrollTop = 0

        let btnRelated = document.getElementById('--btn-section-related')
        if (btnRelated) {
            btnRelated.classList.add('--btn-section--active')
            history.push('/artist/related')
        }
    }

    const handleNavigateAboutArtist = () => {
        hasActiveBtn()

        refParentContainer.current.scrollTop = 0

        let btnAbout = document.getElementById('--btn-section-about')
        if (btnAbout) {
            btnAbout.classList.add('--btn-section--active')
            history.push('/artist/about')
        }
    }

    const handleLoadMoreAlbums = () => {
        setRenderAllArtistAlbums(true)
    }

    const handleUnloadAlbums = () => {
        setRenderAllArtistAlbums(false)
    }

    const handleLoadMoreSinglesEps = () => {
        setRenderAllArtistSingleEps(true)
    }

    const handleUnloadSinglesEps = () => {
        setRenderAllArtistSingleEps(false)
    }

    const handleLoadMoreFeats = () => {
        setRenderAllArtistFeats(true)
    }

    const handleUnloadFeats = () => {
        setRenderAllArtistFeats(false)
    }

    const renderHeaderAdditionalElements = () => {
        return (
            <AdditionalStyleContainer ref={refHeaderAdditionalElement} id='--header--additional-content-container'>
                <BtnHeaderPlay type='button'>
                    <IconPlay id='--header--additional--icon-play' />
                </BtnHeaderPlay>
                <HeaderTitle>Clairo</HeaderTitle>
            </AdditionalStyleContainer>
        )
    }

    const renderArtistHome = () => {
        return (
            <ArtistHome>
                <ArtistSection>
                    <SectionTitle>Populares</SectionTitle>
                    <SectionContent>
                        {
                            ARTIST_MAIN_TRACKS.map((track, i) => {
                                return (
                                    <ArtistTrack
                                        key={i}
                                        name={track.name}
                                        thumb={track.thumb}
                                        duration={track.duration} />
                                )
                            })
                        }
                    </SectionContent>
                </ArtistSection>

                <ArtistSection>
                    <SectionTitle>Álbuns</SectionTitle>
                    <SectionContent>
                        {
                            ARTIST_ALBUMS.map((album, i) => {
                                if (!renderAllArtistAlbums && i > MAX_DEFAULT_LOADED_ITEMS - 1) return ``
                                return (
                                    <ArtistCard
                                        key={i}
                                        name={album.name}
                                        thumb={album.thumb} />
                                )
                            })
                        }
                        {
                            ARTIST_ALBUMS.length > MAX_DEFAULT_LOADED_ITEMS ?
                                <LoadMoreContainer>
                                    <BtnLoadMore type='button' id='--btn-load-more-albums'>
                                        Mostrar Mais
                                        <IconChevronDown id='--btn-load-more-albums--icon' />
                                    </BtnLoadMore>
                                </LoadMoreContainer>
                                : ``
                        }
                    </SectionContent>

                </ArtistSection>

                <ArtistSection>
                    <SectionTitle>Single e Eps</SectionTitle>
                    <SectionContent>
                        {
                            ARTIST_SINGLES_AND_EPS.map((item, i) => {
                                if (!renderAllArtistSingleEps && i > MAX_DEFAULT_LOADED_ITEMS - 1) return ``
                                return (
                                    <ArtistCard
                                        key={i}
                                        name={item.name}
                                        thumb={item.thumb} />
                                )
                            })
                        }
                        {
                            ARTIST_SINGLES_AND_EPS.length > MAX_DEFAULT_LOADED_ITEMS ?
                                <LoadMoreContainer>
                                    <BtnLoadMore
                                        type='button'
                                        id='--btn-load-more-singles-eps'>
                                        Mostrar Mais
                                            <IconChevronDown id='--btn-load-more-singles-eps--icon' />
                                    </BtnLoadMore>
                                </LoadMoreContainer>
                                : ``
                        }
                    </SectionContent>

                </ArtistSection>

                <ArtistSection>
                    <SectionTitle>Aparece em</SectionTitle>
                    <SectionContent>
                        {
                            ARTIST_FEATS.map((item, i) => {
                                if (!renderAllArtistFeats && i > MAX_DEFAULT_LOADED_ITEMS - 1) return ``
                                return (
                                    <ArtistCard
                                        key={i}
                                        name={item.name}
                                        thumb={item.thumb} />
                                )
                            })
                        }
                        {
                            ARTIST_FEATS.length > MAX_DEFAULT_LOADED_ITEMS ?
                                <LoadMoreContainer>
                                    <BtnLoadMore type='button' id='--btn-load-more-feats'>
                                        Mostrar Mais
                                        <IconChevronDown id='--btn-load-more-feats--icon' />
                                    </BtnLoadMore>
                                </LoadMoreContainer>
                                : ``
                        }
                    </SectionContent>

                </ArtistSection>
            </ArtistHome>
        )
    }

    const renderArtistRelated = () => {
        return (
            <Related>
                <RelatedContent>
                    {
                        RELATED_ARTISTS.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    isArtist={item.isArtist}
                                    title={item.title}
                                    description={item.description}
                                    background={item.background}
                                    path={item.path} />
                            )
                        })
                    }
                </RelatedContent>
            </Related>
        )
    }

    const renderArtistAbout = () => {
        return (
            <About>
                <AboutContent>
                    <BioContainer>
                        <BioTitle>Biografia</BioTitle>
                        {
                            ARTIST_BIO.split('<br/>').map((txt, i) => {
                                return (
                                    <BioP>{txt.toString().trim()}</BioP>
                                )
                            })
                        }
                    </BioContainer>
                    <ArtistListeners>
                        <ArtistListenersTitle>Onde as pessoas escutam</ArtistListenersTitle>
                        <CityListenersContainer>
                            <CityListenersName>Los Angeles, US</CityListenersName>
                            <CityListeners>157.832 ouvintes mensais</CityListeners>
                        </CityListenersContainer>
                        <CityListenersContainer>
                            <CityListenersName>Chicago, US</CityListenersName>
                            <CityListeners>136.832 ouvintes mensais</CityListeners>
                        </CityListenersContainer>
                        <CityListenersContainer>
                            <CityListenersName>Dallas, US</CityListenersName>
                            <CityListeners>113.832 ouvintes mensais</CityListeners>
                        </CityListenersContainer>
                        <CityListenersContainer>
                            <CityListenersName>Houston, US</CityListenersName>
                            <CityListeners>111.832 ouvintes mensais</CityListeners>
                        </CityListenersContainer>
                        <CityListenersContainer>
                            <CityListenersName>Mexico City, MX</CityListenersName>
                            <CityListeners>100.832 ouvintes mensais</CityListeners>
                        </CityListenersContainer>
                    </ArtistListeners>
                </AboutContent>
            </About>
        )
    }

    useEffect(() => {
        const Init = () => {
            setFirstRender(true)

            let styleTrackListInfo = window.getComputedStyle(refArtistInfo.current)
            let header = document.getElementById('--top-header')
            let styleHeader = window.getComputedStyle(header)

            let track_list_info_height = styleTrackListInfo.getPropertyValue('height').split('px')[0]
            let header_height = styleHeader.getPropertyValue('height').split('px')[0]

            setArtistInfoHeight(track_list_info_height)
            setHeaderHeight(header_height)

            refParentContainer.current.addEventListener('scroll', handleHeaderAdditionalContentFX)
        }

        const initArtistHome = () => {
            const setListenersBtnsLoadMore = () => {
                const btnLoadMoreAlbums = document.getElementById('--btn-load-more-albums')
                const btnLoadMoreSinglesEps = document.getElementById('--btn-load-more-singles-eps')
                const btnLoadMoreFeats = document.getElementById('--btn-load-more-feats')

                if (!renderAllArtistAlbums && btnLoadMoreAlbums) btnLoadMoreAlbums.addEventListener('click', handleLoadMoreAlbums)
                else if (btnLoadMoreAlbums) btnLoadMoreAlbums.addEventListener('click', handleUnloadAlbums)

                if (!renderAllArtistSingleEps && btnLoadMoreSinglesEps) btnLoadMoreSinglesEps.addEventListener('click', handleLoadMoreSinglesEps)
                else if (btnLoadMoreSinglesEps) btnLoadMoreSinglesEps.addEventListener('click', handleUnloadSinglesEps)

                if (!renderAllArtistFeats && btnLoadMoreFeats) btnLoadMoreFeats.addEventListener('click', handleLoadMoreFeats)
                else if (btnLoadMoreFeats) btnLoadMoreFeats.addEventListener('click', handleUnloadFeats)
            }

            const setRotationIconsBtnLoadMore = () => {
                const iconAlbums = document.getElementById('--btn-load-more-albums--icon')
                const iconSingleEps = document.getElementById('--btn-load-more-singles-eps--icon')
                const iconFeats = document.getElementById('--btn-load-more-feats--icon')

                if (renderAllArtistAlbums && iconAlbums) iconAlbums.style.transform = 'rotateX(180deg)'
                else if (iconAlbums) iconAlbums.style.transform = 'rotateX(0deg)'

                if (renderAllArtistSingleEps && iconSingleEps) iconSingleEps.style.transform = 'rotateX(180deg)'
                else if (iconSingleEps) iconSingleEps.style.transform = 'rotateX(0deg)'

                if (renderAllArtistFeats && iconFeats) iconFeats.style.transform = 'rotateX(180deg)'
                else if (iconFeats) iconFeats.style.transform = 'rotateX(0deg)'
            }

            setListenersBtnsLoadMore()
            setRotationIconsBtnLoadMore()
        }

        const verifyInitialPath = () => {
            //set active style to current section button
            let currentSectionBtn
            if (props.history.location.pathname === '/artist') currentSectionBtn = document.getElementById('--btn-section-home')
            else if (props.history.location.pathname === '/artist/related') currentSectionBtn = document.getElementById('--btn-section-related')
            else if (props.history.location.pathname === '/artist/about') currentSectionBtn = document.getElementById('--btn-section-about')

            //Remove active status on return to previous page
            const oldActive = document.getElementsByClassName('--btn-section--active')[0]

            if (oldActive) oldActive.classList.remove('--btn-section--active')
            if (currentSectionBtn) currentSectionBtn.classList.add('--btn-section--active')
        }

        if (!firstRender) Init()

        if (props.history.location.pathname === '/artist') initArtistHome()

        verifyInitialPath()

        props.handlePushHistoryPath(props.history.location.pathname)
    })

    return (
        <ArtistParent>
            <VerticalScrollBar refParentContainer={refParentContainer} refParentBody={refParentBody} />
            <ArtistContainer ref={refParentContainer}>
                <ArtistBody ref={refParentBody}>
                    <Header
                        refParentContainer={refParentContainer}
                        headerAdditionalStyle={`
                            margin-bottom: 0px !important;
                        `}
                        backgroundOnScroll='rgb(148, 97, 72)'
                        scrollValueMarker={(artistInfoHeight - headerHeight)}
                        additionalElements={renderHeaderAdditionalElements}
                        history={props.history}
                        handleGoBackHistory={props.handleGoBackHistory}
                        handleGoForwardHistory={props.handleGoForwardHistory}
                        getCustomHistoryInfo={props.getCustomHistoryInfo} />
                    <ArtistInfoContainer
                        ref={refArtistInfo}
                        artistImageCover='https://i.scdn.co/image/1bfde4357c64ce75a56b122cf554e2d14efc342e'>
                        <ArtistInfoBackgroundFX></ArtistInfoBackgroundFX>
                        <ArtistInfo>
                            <VerifiedArtist>
                                <IconVerified />
                                <TxtVerified>Artista verificado</TxtVerified>
                            </VerifiedArtist>
                            <ArtistName>Clairo</ArtistName>
                            <ArtistPopularity>7.396.281 ouvintes mensais</ArtistPopularity>
                        </ArtistInfo>
                    </ArtistInfoContainer>

                    <ContentContainer>
                        <ContentBackgroundFX></ContentBackgroundFX>
                        <ArtistControls>
                            <BtnPlayArtist type='button'>
                                <IconPlay />
                            </BtnPlayArtist>
                            <BtnFollow type='button'>
                                Seguir
                            </BtnFollow>
                            <BtnArtistOptions type='button'>
                                <IconEllipsis />
                            </BtnArtistOptions>
                        </ArtistControls>

                        <ArtistSections>
                            <BtnArtistSection type='button' id='--btn-section-home' onClick={handleNavigateArtistHome} >Visão geral</BtnArtistSection>
                            <BtnArtistSection type='button' id='--btn-section-related' onClick={handleNavigateRelated}>Artistas recomendados</BtnArtistSection>
                            <BtnArtistSection type='button' id='--btn-section-about' onClick={handleNavigateAboutArtist}>Sobre</BtnArtistSection>
                        </ArtistSections>


                        <Switch>
                            <Route exact path='/artist' component={renderArtistHome} />
                            <Route path='/artist/related' component={renderArtistRelated} />
                            <Route path='/artist/about' component={renderArtistAbout} />
                        </Switch>
                    </ContentContainer>
                </ArtistBody>
            </ArtistContainer>
        </ArtistParent>
    )
}

export default ArtistPage