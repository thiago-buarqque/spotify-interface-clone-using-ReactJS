import React, { useEffect, useState, useRef } from 'react'

import { LoadingContainer, MobileHomeBody, UserSettings, Settings, Section, SectionTitle, CarouselCards } from './styles.js';

import Card from '../../../components/Mobile/Card'

import Loading from '../../../images/loading.svg'

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

const Home = (props) => {
    const FAV_ARTISTS = [
        {
            cardBackground: `url('https://lite-images-i.scdn.co/image/123c7503da1d0a1f36ffc59d7c7c35c817edfe55')`,
            isArtist: true,
            cardTitle: 'Ruelle'
        },
        {
            cardBackground: `url('https://lite-images-i.scdn.co/image/2622edec99d68d1d141886be593c88cbe509f6d8')`,
            isArtist: true,
            cardTitle: 'Billie Eillish'
        },
        {
            cardBackground: `url('https://lite-images-i.scdn.co/image/777c2801d8ae45f6df96905d07403016c5a33b3d')`,
            isArtist: true,
            cardTitle: 'League of Legends'
        },
        {
            cardBackground: `url('https://lite-images-i.scdn.co/image/a3ade0a92bb3c99514fb8d017024a7d9df1572b1')`,
            isArtist: true,
            cardTitle: 'AURORA'
        },
    ]

    const RECENT_SONGS = [
        {
            cardBackground: `url("https://lite-images-i.scdn.co/image/ab67706f000000025ae7aa0454c9eafdd6505fda")`,
            isTrackList: true,
            cardTitle: 'Your Favorite Coffeeshouse'
        },
        {
            cardBackground: `url("https://lite-images-i.scdn.co/image/ab67706c0000da84e4d56b99526a8bb63bde236c")`,
            isTrackList: true,
            cardTitle: 'Take me out'
        },
        {
            cardBackground: `url("https://lite-images-i.scdn.co/image/ab67616d00001e025c8cfe4b2c4aa89c9c92108e")`,
            isTrackList: true,
            cardTitle: 'David Guetta Play Hard Work Hard'
        },
        {
            cardBackground: `url("https://mosaic.scdn.co/640/ab67616d00001e0253cf4c30b11cf78c7bf6b793ab67616d00001e0268384dd85fd5e95831252f60ab67616d00001e02e02589301e7f4b222312bed0ab67616d00001e02f5e7b2e5adaa87430a3eccff")`,
            isTrackList: true,
            cardTitle: 'PAM PAM NAM PA NAM'
        }
    ]

    const ARTISTS_FOR_YOU = [
        {
            cardBackground: `url("https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat_DEFAULT-pt-BR.jpg")`,
            isTrackList: true,
            cardTitle: 'No Repeat'
        },
        {
            cardBackground: `url("https://daily-mix.scdn.co/covers/backtracks/PZN_Repeat_Rewind_DEFAULT-pt-BR.jpg")`,
            isTrackList: true,
            cardTitle: 'De Volta pro Repeat'
        },
        {
            cardBackground: `url("https://misc.scdn.co/liked-songs/liked-songs-300.png")`,
            isTrackList: true,
            cardTitle: 'Músicas Curtidas'
        }
    ]

    const LOREM_IPSUM_CARDS = [
        {
            cardBackground: pickRandomColor(),
            isTrackList: true,
            cardTitle: 'Lorem ipsum'
        },
        {
            cardBackground: pickRandomColor(),
            isTrackList: true,
            cardTitle: 'Lorem ipsum'
        },
        {
            cardBackground: pickRandomColor(),
            isTrackList: true,
            cardTitle: 'Lorem ipsum'
        },
        {
            cardBackground: pickRandomColor(),
            isTrackList: true,
            cardTitle: 'Lorem ipsum'
        },
        {
            cardBackground: pickRandomColor(),
            isTrackList: true,
            cardTitle: 'Lorem ipsum'
        },
    ]

    const WATCH_AGAIN = [
        {
            cardBackground: `url("https://lite-images-i.scdn.co/image/ab67706f00000002cf795aff62b2cd850dd58190")`,
            isTrackList: true,
            cardTitle: 'Deep Dark Indie'
        },
        {
            cardBackground: `url('https://lite-images-i.scdn.co/image/ab67616d0000b2731ad149489625bd3b7d9ea6a2')`,
            isTrackList: true,
            cardTitle: 'Lost Boy'
        },
        {
            cardBackground: `url('https://lite-images-i.scdn.co/image/ab67706f00000002fae87ed7cb29122edc12b88d')`,
            isTrackList: true,
            cardTitle: 'Treino em Casa'
        },
    ]

    const PODCASTS = [
        {
            cardBackground: `url('https://lite-images-i.scdn.co/image/1e6f3b729caf4c8084d20882bbb7e2afc8dc4a4d')`,
            isShowList: true,
            cardTitle: 'República do Medo'
        },
        {
            cardBackground: `url('https://lite-images-i.scdn.co/image/41fefc15c8c4e72e717885c068804a93ef5318e6')`,
            isShowList: true,
            cardTitle: 'Sociedades Secretas'
        },
        {
            cardBackground: `url('https://lite-images-i.scdn.co/image/cc674a59c75d27485cf795fc8134588467225c51')`,
            isShowList: true,
            cardTitle: 'Mundo Freak Confidencial'
        },
    ]

    const [isLoaded, setIsLoaded] = useState(false)
    const refFirstLoad = useRef(true)

    useEffect(() => {        
        if (refFirstLoad.current) {
            setIsLoaded(true)            
            refFirstLoad.current = false;
            const currentPath = props.history.location.pathname
            props.appendHistoryPath(currentPath)
        }
    },[props])

    if (!isLoaded) {
        return (
            <LoadingContainer>
                <img src={Loading} alt='loading' width='100px' height='100px' />
            </LoadingContainer>
        )
    }

    return (
        <MobileHomeBody>
            <UserSettings>
                <Settings></Settings>
            </UserSettings>

            <Section>
                <SectionTitle>Tocadas recentemente</SectionTitle>
                <CarouselCards>
                    {
                        RECENT_SONGS.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={item.isShowList}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                </CarouselCards>
            </Section>

            <Section>
                <SectionTitle>100% você</SectionTitle>
                <CarouselCards>
                    {
                        ARTISTS_FOR_YOU.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={item.isShowList}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                    {
                        LOREM_IPSUM_CARDS.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={item.isShowList}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                </CarouselCards>
            </Section>

            <Section>
                <SectionTitle>Jump back in</SectionTitle>
                <CarouselCards>
                    {
                        WATCH_AGAIN.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={item.isShowList}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                    {
                        LOREM_IPSUM_CARDS.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={item.isShowList}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                </CarouselCards>
            </Section>

            <Section>
                <SectionTitle>Podcasts</SectionTitle>
                <CarouselCards>
                    {
                        PODCASTS.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={true}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }                    
                    {
                        LOREM_IPSUM_CARDS.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={true}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                </CarouselCards>
            </Section>

            <Section>
                <SectionTitle>100% você</SectionTitle>
                <CarouselCards>
                    {
                        WATCH_AGAIN.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={item.isShowList}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                    {
                        LOREM_IPSUM_CARDS.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={item.isShowList}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                </CarouselCards>
            </Section>

            <Section>
                <SectionTitle>Jump back in</SectionTitle>
                <CarouselCards>
                    {
                        RECENT_SONGS.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={item.isShowList}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                    {
                        LOREM_IPSUM_CARDS.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={item.isShowList}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                </CarouselCards>
            </Section>

            <Section>
                <SectionTitle>Podcasts</SectionTitle>
                <CarouselCards>
                    {
                        PODCASTS.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={true}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                    {
                        LOREM_IPSUM_CARDS.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={true}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                </CarouselCards>
            </Section>

            <Section>
                <SectionTitle>Artistas favoritos</SectionTitle>
                <CarouselCards>
                    {
                        FAV_ARTISTS.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    cardBackground={item.cardBackground}
                                    isArtist={item.isArtist}
                                    isTrackList={item.isTrackList}
                                    isShowList={item.isShowList}
                                    cardTitle={item.cardTitle} />
                            )
                        })
                    }
                </CarouselCards>
            </Section>
        </MobileHomeBody>
    )
}

export default Home;