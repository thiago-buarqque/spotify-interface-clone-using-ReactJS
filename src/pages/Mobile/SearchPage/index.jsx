import React, { useEffect, useRef, useState } from 'react'

import { Route } from 'react-router-dom'

import { useHistory, Switch } from 'react-router-dom'

import Loading from '../../../images/loading.svg'

import {
    LoadingContainer,
    ParentContainer,
    Header,
    BtnGoBack,
    LeftArrow,
    InputSearch,
    ClearInputSearch,
    ResultContainer,
    RecentSearchContainer,
    RecentSearchTitle,
    ClearRecentSearch,
    MainContentTitle,
    TracksContainer,
    BtnSearchTags,
    SearchTagContainer,
    SearchTag,
    MainResultContainer
} from './styles.js'

import { CarouselCards } from '../Home/styles.js'

import Card from '../../../components/Mobile/Card'

import ItemLeftThumb from '../../../components/Mobile/ItemLeftThumb'

const SearchPage = (props) => {
    let history = useHistory();

    const RefInputSearch = useRef(null);

    const clearSearchInput = () => {
        RefInputSearch.current.value = '';
        history.push('/search/recent')
    }

    const refParentContainer = useRef(null);

    //Default items to Albums, podcast and podcast episodes
    const DEFAULT_SEARCH_ITEMS = [
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
            searchTitle: '21'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048514c3bbcff5e7248e415548f12',
            searchTitle: '25'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00004851f407037aabc6dffe5abb3bf8',
            searchTitle: '19'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00004851f6a15fc6db4a2038a4059b82',
            searchTitle: 'Adèle Anderson'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048512737be35cc5245eef495be90',
            searchTitle: 'Skyfall'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d0000485163388cd10f9b7e8aa58a5807',
            searchTitle: 'Water Under the Bridge'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00004851fb1a2ab8ce3dc89e883740b5',
            searchTitle: 'Chasing Pavements'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d0000485141f7bcc4528ca0dca27e2757',
            searchTitle: 'Hometown Glory'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d0000485141f7bcc4528ca0dca27e2757',
            searchTitle: 'Make You Feel My Love'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00004851f6a15fc6db4a2038a4059b82',
            searchTitle: 'Adèle Anderson'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048512737be35cc5245eef495be90',
            searchTitle: 'Skyfall'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d0000485163388cd10f9b7e8aa58a5807',
            searchTitle: 'Water Under the Bridge'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00004851fb1a2ab8ce3dc89e883740b5',
            searchTitle: 'Chasing Pavements'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d0000485141f7bcc4528ca0dca27e2757',
            searchTitle: 'Hometown Glory'
        },
        {
            thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d0000485141f7bcc4528ca0dca27e2757',
            searchTitle: 'Make You Feel My Love'
        },
    ]

    const [isLoaded, setIsLoaded] = useState(false)

    const handleGoBack = () => {
        let newPath = props.handleGoBack()
        history.push(newPath)
    }

    useEffect(() => {
        setIsLoaded(true)
        if (isLoaded) {
            refParentContainer.current.scrollTop = 0;
            const currentPath = props.history.location.pathname
            props.appendHistoryPath(currentPath)
        }
    }, [props, isLoaded])

    const goPreviousPage = () => {
        let prevPath = '';
        if (props.match.url.includes('/search/recent')) prevPath = '/search'
        else if (props.match.url.includes('/search/results/')) prevPath = '/search/recent'
        else if (
            props.match.url.includes('/search/artists/') ||
            props.match.url.includes('/search/tracks/') ||
            props.match.url.includes('/search/playlists/') ||
            props.match.url.includes('/search/albums') ||
            props.match.url.includes('/search/shows/') ||
            props.match.url.includes('/search/audioepisodes/')
        ) prevPath = `/search/results/${props.match.params.searchValue}`

        history.push(prevPath)
    }

    const renderSearchMainResult = () => {
        const MAIN_RESULT_ITEMS = [
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67706f00000002d1b80fb90502dd91441182ed',
                searchTitle: 'This is Adele',
                searchCategory: 'Playlist',
                isTrack: false,
                isPlaylist: true,
                isAlbum: false,
                isArtist: false
            },

            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'Someone Like You',
                searchCategory: 'Song • Adele',
                isTrack: true,
                isPlaylist: false,
                isAlbum: false,
                isArtist: false
            },

            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'Set Fire To The Rain',
                searchCategory: 'Song • Adele',
                isTrack: true,
                isPlaylist: false,
                isAlbum: false,
                isArtist: false
            },

            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'Rolling in the Deep',
                searchCategory: 'Song • Adele',
                isTrack: true,
                isPlaylist: false,
                isAlbum: false,
                isArtist: false
            },

            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048514c3bbcff5e7248e415548f12',
                searchTitle: 'Send my Love (To Your New Lover)',
                searchCategory: 'Song • Adele',
                isTrack: true,
                isPlaylist: false,
                isAlbum: false,
                isArtist: false
            },

            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'One and Only',
                searchCategory: 'Song • Adele',
                isTrack: true,
                isPlaylist: false,
                isAlbum: false,
                isArtist: false
            }
        ]

        return (
            <MainResultContainer>
                <ItemLeftThumb
                    thumbUrl='https://lite-images-i.scdn.co/image/cbbdfb209cc38b2999b1882f42ee642555316313'
                    title='Adele'
                    description='Artist'
                    isArtist={true} />
                <MainContentTitle>Featuring Adele</MainContentTitle>
                <CarouselCards>

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706f00000002d1b80fb90502dd91441182ed")'
                        isTrackList={true}
                        cardTitle='This is Adele' />
                    <Card
                        cardBackground='url("https://seeded-session-images.scdn.co/v1/img/artist/4dpARuHxo51G3z768sgnrY/pt")'
                        isTrackList={true}
                        cardTitle='Adele Rádio' />

                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706f0000000291208168c4d7591ce5c87651")'
                        isTrackList={true}
                        cardTitle='Most Streamed Songs of the Decade' />
                    <Card
                        cardBackground='url("https://lite-images-i.scdn.co/image/ab67706f000000029162aa3277aa2e692c6b56b0")'
                        isTrackList={true}
                        cardTitle='Trilha sonora' />

                </CarouselCards>

                <TracksContainer>

                    {
                        MAIN_RESULT_ITEMS.map((item, i) => {
                            return <ItemLeftThumb
                                key={i}
                                thumbUrl={item.thumbUrl}
                                title={item.searchTitle}
                                description={item.searchCategory}
                                isTrack={item.isTrack}
                                isPlaylist={item.isPlaylist}
                                isAlbum={item.isAlbum}
                                isArtist={item.isArtist} />
                        })
                    }

                </TracksContainer>

                <BtnSearchTags type='button' onClick={() => history.push(`/search/artists/${props.match.params.searchValue}`)}>See all artists</BtnSearchTags>
                <BtnSearchTags type='button' onClick={() => history.push(`/search/tracks/${props.match.params.searchValue}`)}>See all songs</BtnSearchTags>
                <BtnSearchTags type='button' onClick={() => history.push(`/search/playlists/${props.match.params.searchValue}`)}>See all playlists</BtnSearchTags>
                <BtnSearchTags type='button' onClick={() => history.push(`/search/albums/${props.match.params.searchValue}`)}>See all albums</BtnSearchTags>
                <BtnSearchTags type='button' onClick={() => history.push(`/search/shows/${props.match.params.searchValue}`)}>See all podcasts</BtnSearchTags>
                <BtnSearchTags type='button' onClick={() => history.push(`/search/audioepisodes/${props.match.params.searchValue}`)}>See all podcast episodes</BtnSearchTags>
            </MainResultContainer>
        )
    }

    const renderSearchArtists = () => {
        const ARTISTS_ITEMS = [
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/cbbdfb209cc38b2999b1882f42ee642555316313',
                searchTitle: 'Adele',
                searchCategory: 'Artist',
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00004851178aa240560f208a694b5717',
                searchTitle: 'Adele Roberts',
                searchCategory: 'Artist',
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d0000485114067d5c18573cf54e3f62cd',
                searchTitle: 'Adele K',
                searchCategory: 'Artist',
            },

            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00004851f6a15fc6db4a2038a4059b82',
                searchTitle: 'Adèle Anderson',
                searchCategory: 'Artist',
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/5800cb8f767751161ea3265694f8d900c824137c',
                searchTitle: 'Adelén',
                searchCategory: 'Artist',
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/4b556c170676b2bb1bac9d318a58d15d787080c6',
                searchTitle: 'Adele Harley',
                searchCategory: 'Artist',
            },

            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d0000485113a57ec832fd5cfebf494cae',
                searchTitle: 'Adele Augustsson',
                searchCategory: 'Artist',
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00004851df907b4821ff007a9b74ec2b',
                searchTitle: 'Adele Bardazzi',
                searchCategory: 'Artist',
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00004851a615e568f5e90d21236910c3',
                searchTitle: 'Adelen',
                searchCategory: 'Artist',
            },

            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048512fe1c5901e207da0e87543c5',
                searchTitle: 'Adele Addison',
                searchCategory: 'Artist',
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d00004851f17a4246033ab974acfbe586',
                searchTitle: 'Adèle & Zalem',
                searchCategory: 'Artist',
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d0000485118f3a760cf58fde8187f891c',
                searchTitle: 'Adele Princ',
                searchCategory: 'Artist',
            },
        ]

        return (
            <ResultContainer>

                {
                    ARTISTS_ITEMS.map((item, i) => {
                        return <ItemLeftThumb
                            key={i}
                            thumbUrl={item.thumbUrl}
                            title={item.searchTitle}
                            description={item.searchCategory}
                            isArtist={true} />
                    })
                }

            </ResultContainer>
        )
    }

    const renderSearchTracks = () => {
        const TRACKS_ITEMS = [
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'Someone Like You',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'Set Fire To The Rain',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'Rolling in the Deep',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048514c3bbcff5e7248e415548f12',
                searchTitle: 'Send my Love (To Your New Lover)',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'One and Only',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'Someone Like You',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'Set Fire To The Rain',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'Rolling in the Deep',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048514c3bbcff5e7248e415548f12',
                searchTitle: 'Send my Love (To Your New Lover)',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'One and Only',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'Someone Like You',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'Set Fire To The Rain',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'Rolling in the Deep',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048514c3bbcff5e7248e415548f12',
                searchTitle: 'Send my Love (To Your New Lover)',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
            {
                thumbUrl: 'https://lite-images-i.scdn.co/image/ab67616d000048516d4056466fc11f6408be2566',
                searchTitle: 'One and Only',
                searchCategory: 'Song • Adele',
                isTrack: true
            },
        ]

        return (
            <ResultContainer>
                {
                    TRACKS_ITEMS.map((item, i) => {
                        return <ItemLeftThumb
                            key={i}
                            thumbUrl={item.thumbUrl}
                            title={item.searchTitle}
                            description={item.searchCategory}
                            isTrack={item.isTrack} />
                    })
                }
            </ResultContainer>
        )
    }

    const renderSearchPlaylists = () => {

        const getPlaylistImgSize = () => {
            return (window.innerWidth - 50) / 2;
        }

        const PLAYLIST_ITEMS = [
            {
                cardBackground: 'url("https://lite-images-i.scdn.co/image/ab67706f00000002d1b80fb90502dd91441182ed")',
                isTrackList: true,
                cardTitle: 'This is Adele',
                imgSize: `${getPlaylistImgSize()}px`,
                isCardCollection: true
            },
            {
                cardBackground: 'url("https://lite-images-i.scdn.co/image/ab67706f00000002d1b80fb90502dd91441182ed")',
                isTrackList: true,
                cardTitle: 'This is Adele',
                imgSize: `${getPlaylistImgSize()}px`,
                isCardCollection: true
            },
            {
                cardBackground: 'url("https://lite-images-i.scdn.co/image/ab67706f00000002d1b80fb90502dd91441182ed")',
                isTrackList: true,
                cardTitle: 'This is Adele',
                imgSize: `${getPlaylistImgSize()}px`,
                isCardCollection: true
            },
            {
                cardBackground: 'url("https://lite-images-i.scdn.co/image/ab67706f00000002d1b80fb90502dd91441182ed")',
                isTrackList: true,
                cardTitle: 'This is Adele',
                imgSize: `${getPlaylistImgSize()}px`,
                isCardCollection: true
            },
            {
                cardBackground: 'url("https://lite-images-i.scdn.co/image/ab67706f00000002d1b80fb90502dd91441182ed")',
                isTrackList: true,
                cardTitle: 'This is Adele',
                imgSize: `${getPlaylistImgSize()}px`,
                isCardCollection: true
            },
            {
                cardBackground: 'url("https://lite-images-i.scdn.co/image/ab67706f00000002d1b80fb90502dd91441182ed")',
                isTrackList: true,
                cardTitle: 'This is Adele',
                imgSize: `${getPlaylistImgSize()}px`,
                isCardCollection: true
            },
            {
                cardBackground: 'url("https://lite-images-i.scdn.co/image/ab67706f00000002d1b80fb90502dd91441182ed")',
                isTrackList: true,
                cardTitle: 'This is Adele',
                imgSize: `${getPlaylistImgSize()}px`,
                isCardCollection: true
            },
            {
                cardBackground: 'url("https://lite-images-i.scdn.co/image/ab67706f00000002d1b80fb90502dd91441182ed")',
                isTrackList: true,
                cardTitle: 'This is Adele',
                imgSize: `${getPlaylistImgSize()}px`,
                isCardCollection: true
            },
        ]

        return (
            <ResultContainer loadedContent='playlist'>
                {
                    PLAYLIST_ITEMS.map((item, i) => {
                        return <Card
                            key={i}
                            cardBackground={item.cardBackground}
                            isTrackList={item.isTrackList}
                            cardTitle={item.cardTitle}
                            imgSize={item.imgSize}
                            isCardCollection={item.isCardCollection} />
                    })
                }
            </ResultContainer>
        )
    }

    const renderSearchAlbums = () => {
        return (
            <ResultContainer>
                {
                    DEFAULT_SEARCH_ITEMS.map((item, i) => {
                        return <ItemLeftThumb
                            key={i}
                            thumbUrl={item.thumbUrl}
                            title={item.searchTitle}
                            description='Album • Adele'
                            isAlbum={true} />
                    })
                }
            </ResultContainer>
        )
    }

    const renderSearchShows = () => {
        return (
            <ResultContainer>
                {
                    DEFAULT_SEARCH_ITEMS.map((item, i) => {
                        return <ItemLeftThumb
                            key={i}
                            thumbUrl={item.thumbUrl}
                            title={item.searchTitle}
                            description='Podcast'
                            isShow={true} />
                    })
                }
            </ResultContainer>
        )
    }

    const renderSearchAudioEpisodes = () => {
        return (
            <ResultContainer>
                {
                    DEFAULT_SEARCH_ITEMS.map((item, i) => {
                        return <ItemLeftThumb
                            key={i}
                            thumbUrl={item.thumbUrl}
                            title={item.searchTitle}
                            description='Podcast episode'
                            isShowEpisode={true} />
                    })
                }
            </ResultContainer>
        )
    }

    const renderSearchResult = () => {
        return (
            <ResultContainer>
                <Route path='/search/results/:searchValue' component={renderSearchMainResult} />
                <Route path='/search/artists/:searchValue' component={renderSearchArtists} />
                <Route path='/search/tracks/:searchValue' component={renderSearchTracks} />
                <Route path='/search/playlists/:searchValue' component={renderSearchPlaylists} />
                <Route path='/search/albums/:searchValue' component={renderSearchAlbums} />
                <Route path='/search/shows/:searchValue' component={renderSearchShows} />
                <Route path='/search/audioepisodes/:searchValue' component={renderSearchAudioEpisodes} />

            </ResultContainer>
        )
    }

    const renderRecentSearch = () => {
        return (
            <RecentSearchContainer>
                <RecentSearchTitle>Buscas recentes</RecentSearchTitle>
                <ItemLeftThumb
                    thumbUrl='https://lite-images-i.scdn.co/image/ab67706c0000da84ce40b90b0ecbb1820aef73db'
                    title='Gaming Music 2020'
                    description='Playlist'
                    isRecentItem={true} />
                <ItemLeftThumb
                    thumbUrl='https://lite-images-i.scdn.co/image/1cdf5ce3cf329ae433bfa76e88dadeb06653fda9'
                    title='Imagine Dragons'
                    description='Artist'
                    isRecentItem={true} />
                <ClearRecentSearch type='button'>Limpar tudo</ClearRecentSearch>
            </RecentSearchContainer>
        )
    }

    const renderSearchHeader = () => {
        return (
            <Header>
                <BtnGoBack type='button' onClick={handleGoBack}>
                    <LeftArrow />
                </BtnGoBack>

                <InputSearch ref={RefInputSearch}
                    type='text' placeholder='Buscar'
                    onFocus={() => props.match.url === '/search/recent' ? history.push('/search/results/adele') : ''} />

                <ClearInputSearch onClick={clearSearchInput} />
            </Header>
        )
    }

    const renderTagSearchHeader = () => {
        const getSearchTagTitle = () => {
            const searchValue = props.match.params.searchValue

            if (props.match.url.includes('/search/artists/')) return `'${searchValue}' in Artists`
            else if (props.match.url.includes('/search/tracks/')) return `'${searchValue}' in Songs`
            else if (props.match.url.includes('/search/playlists/')) return `'${searchValue}' in Playlists`
            else if (props.match.url.includes('/search/albums/')) return `'${searchValue}' in Albums`
            else if (props.match.url.includes('/search/shows/')) return `'${searchValue}' in Shows`
            else if (props.match.url.includes('/search/audioepisodes/')) return `'${searchValue}' in Podcast episodes`
        }

        return (
            <Header>
                <BtnGoBack type='button' onClick={goPreviousPage}>
                    <LeftArrow />
                </BtnGoBack>

                <SearchTagContainer>
                    <SearchTag>{getSearchTagTitle()}</SearchTag>
                </SearchTagContainer>
            </Header>
        )
    }

    if (!isLoaded) {
        return (
            <LoadingContainer>
                <img src={Loading} alt='loading' width='100px' height='100px' />
            </LoadingContainer>
        )
    }

    const pathParams = props.match.params

    return (
        <ParentContainer ref={refParentContainer}>
            <Switch>
                <Route path='/search/recent/' component={renderSearchHeader} />
                <Route path='/search/results/' component={renderSearchHeader} />

                <Route path='/search/artists/' component={renderTagSearchHeader} />
                <Route path='/search/tracks/' component={renderTagSearchHeader} />
                <Route path='/search/playlists/' component={renderTagSearchHeader} />
                <Route path='/search/albums/' component={renderTagSearchHeader} />
                <Route path='/search/shows/' component={renderTagSearchHeader} />
                <Route path='/search/audioepisodes/' component={renderTagSearchHeader} />
            </Switch>
            {
                pathParams.searchTag && pathParams.searchValue ? renderSearchResult() : renderRecentSearch()
            }
        </ParentContainer>
    )
}

export default SearchPage;