import React, { useRef, useEffect } from 'react'

import { Switch, Route, useHistory } from 'react-router-dom'

import {
    Div,
    SearchPageContainer,
    SearchPageBody,
    Section,
    SectionTitle,
    SectionBody,
    RecentSearchContainer,
    CarouselContainer,
    CarouselLargeCards,
    CarouselControl,
    IconLeftArrow,
    IconRightArrow,
    AllGenresContainer,
    AdditionalContent,
    IconSearch,
    InputSearch,
    ContainerTopResult,
    ContainerMainResult,
    MainResultThumb,
    MainResultTitle,
    MainResultCategory,
    MainResultTracks,
    SectionTopResult,
    SectionTopResultTracks,
    SectionHeader,
    CardCollectionBody,
    SectionHeaderInfo,
    ButtonSectionSeeMore
} from './styles.js'

import Header from '../../../components/Desktop/Header'
import VerticalScrollBar from '../../../components/Desktop/VerticalScrollBar'
import Card from '../../../components/Desktop/Card'
import SearchPageCard from '../../../components/Desktop/SearchPageCard'
import MainSearchTrack from '../../../components/Desktop/MainSearchTrack'

const SearchPage = props => {

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
        '#bee3db'
    ]

    const pickRandomColor = () => { return CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)] }

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
        }
    ]

    const SEARCH_PAGE_CARDS = [
        {
            large: false,
            title: 'Lorem ipsum',
            background: pickRandomColor(),
            picture: 'https://t.scdn.co/images/68433b0ee5b5465b8e926c42b84cbcdb.jpeg'
        }, {
            large: false,
            title: 'Lorem ipsum',
            background: pickRandomColor(),
            picture: 'https://t.scdn.co/images/68433b0ee5b5465b8e926c42b84cbcdb.jpeg'
        }, {
            large: false,
            title: 'Lorem ipsum',
            background: pickRandomColor(),
            picture: 'https://t.scdn.co/images/68433b0ee5b5465b8e926c42b84cbcdb.jpeg'
        }, {
            large: false,
            title: 'Lorem ipsum',
            background: pickRandomColor(),
            picture: 'https://t.scdn.co/images/68433b0ee5b5465b8e926c42b84cbcdb.jpeg'
        }, {
            large: false,
            title: 'Lorem ipsum',
            background: pickRandomColor(),
            picture: 'https://t.scdn.co/images/68433b0ee5b5465b8e926c42b84cbcdb.jpeg'
        }, {
            large: false,
            title: 'Lorem ipsum',
            background: pickRandomColor(),
            picture: 'https://t.scdn.co/images/68433b0ee5b5465b8e926c42b84cbcdb.jpeg'
        },
    ]

    const refParentContainer = useRef(null)
    const refParentBody = useRef(null)
    const refCarouselCards = useRef(null)
    const refBtnCarouselLeft = useRef(null)
    const refBtnCarouselRight = useRef(null)

    let history = useHistory();

    const goRightCarousel = () => {
        let carouselCards = refCarouselCards.current;
        let styleCarouselCards = window.getComputedStyle(carouselCards);

        let transformXValue = styleCarouselCards.getPropertyValue('transform').split(',')[4].trim()

        let newXValue = transformXValue - 360;

        carouselCards.style.transform = `translateX(${newXValue}px)`

        if (newXValue <= -344) {
            refBtnCarouselLeft.current.style.display = 'block';
            refBtnCarouselRight.current.style.display = 'none';
        }
    }

    const goLeftCarousel = () => {
        let carouselCards = refCarouselCards.current;
        let styleCarouselCards = window.getComputedStyle(carouselCards);

        let transformXValue = styleCarouselCards.getPropertyValue('transform').split(',')[4].trim()

        let newXValue = Number(transformXValue) + 360;

        carouselCards.style.transform = `translateX(${newXValue}px)`

        if (newXValue >= 0) {
            refBtnCarouselLeft.current.style.display = 'none';
            refBtnCarouselRight.current.style.display = 'block';
        }
    }

    useEffect(() => {
        refParentContainer.current.scrollTop = 0;
    })

    const HeaderAdditionalElements = () => {
        return (
            <AdditionalContent>
                <IconSearch />
                <InputSearch
                    type='text'
                    placeholder='Busque artistas, músicas ou podcasts'
                    onFocus={() => history.push('/search/imagine%20dragons')}
                    onClick={() => history.push('/search/imagine%20dragons')} />
            </AdditionalContent>
        )
    }

    const renderHomeSearchPage = () => {
        return (
            <div>
                <Section>
                    <SectionHeader>
                        <SectionHeaderInfo>
                            <SectionTitle>Título da seção</SectionTitle>
                        </SectionHeaderInfo>
                    </SectionHeader>
                    <SectionBody>
                        <RecentSearchContainer>
                            <Card title='Imagine Dragons' description='Artista' background='url("https://i.scdn.co/image/ff8d83627cb2a80d4c1fa36fd80a193ca34b7a50")' isArtist={true} />
                            <Card title='Still Feel' description='half alive' background='url("https://i.scdn.co/image/ab67616d00001e02f89d2d949f9671982e9e732c")' />
                        </RecentSearchContainer>
                    </SectionBody>
                </Section>

                <Section>
                    <SectionTitle>Seus gêneros favoritos</SectionTitle>
                    <SectionBody>
                        <CarouselContainer>
                            <CarouselControl ref={refBtnCarouselLeft} id='btn-prev-carousel' type='button' onClick={goLeftCarousel}><IconLeftArrow /></CarouselControl>
                            <CarouselControl ref={refBtnCarouselRight} id='btn-next-carousel' type='button' onClick={goRightCarousel}><IconRightArrow /></CarouselControl>
                            <CarouselLargeCards ref={refCarouselCards}>
                                <SearchPageCard large={true} title='Rock' background='rgb(235, 30, 50)' picture='https://t.scdn.co/images/31c85ae6fec34a16927ef28a7a88e97b.jpeg' />
                                <SearchPageCard large={true} title='Pop' background='rgb(195, 240, 200)' picture='https://t.scdn.co/images/d355f48a90b64c25b6e004179a596e51.jpeg' />
                                <SearchPageCard large={true} title='Indie' background='rgb(35, 30, 50)' picture='https://t.scdn.co/images/4100c80f8efb45a38eb26b42aef401fa.jpeg' />
                                <SearchPageCard large={true} title='Hip Hop' background='rgb(205, 30, 50)' picture='https://t.scdn.co/images/9676cef74ec147a48607c737c4f93943.jpeg' />
                            </CarouselLargeCards>
                        </CarouselContainer>
                    </SectionBody>
                </Section>

                <Section>
                    <SectionHeader>
                        <SectionHeaderInfo>
                            <SectionTitle>Título da seção</SectionTitle>
                        </SectionHeaderInfo>
                    </SectionHeader>
                    <SectionBody>
                        <AllGenresContainer>

                            {
                                SEARCH_PAGE_CARDS.map((card, i) => {
                                    return <SearchPageCard
                                        key={i}
                                        large={false}
                                        title={card.title}
                                        background={card.background}
                                        picture={card.picture} />
                                })
                            }
                            {
                                SEARCH_PAGE_CARDS.map((card, i) => {
                                    return <SearchPageCard
                                        key={i}
                                        large={false}
                                        title={card.title}
                                        background={card.background}
                                        picture={card.picture} />
                                })
                            }
                            {
                                SEARCH_PAGE_CARDS.map((card, i) => {
                                    return <SearchPageCard
                                        key={i}
                                        large={false}
                                        title={card.title}
                                        background={card.background}
                                        picture={card.picture} />
                                })
                            }
                            {
                                SEARCH_PAGE_CARDS.map((card, i) => {
                                    return <SearchPageCard
                                        key={i}
                                        large={false}
                                        title={card.title}
                                        background={card.background}
                                        picture={card.picture} />
                                })
                            }
                        </AllGenresContainer>
                    </SectionBody>
                </Section>
            </div>
        )
    }

    const renderResultPage = () => {
        return (
            <div>
                <ContainerTopResult>
                    <SectionTopResult>
                        <SectionHeader>
                            <SectionHeaderInfo>
                                <SectionTitle>Melhor resultado</SectionTitle>
                            </SectionHeaderInfo>
                        </SectionHeader>
                        <SectionBody>
                            <ContainerMainResult>
                                <MainResultThumb src='https://i.scdn.co/image/ff8d83627cb2a80d4c1fa36fd80a193ca34b7a50' />
                                <MainResultTitle>Imagine Dragons</MainResultTitle>
                                <MainResultCategory>Artista</MainResultCategory>
                            </ContainerMainResult>
                        </SectionBody>
                    </SectionTopResult>

                    <SectionTopResultTracks>
                        <SectionHeader>
                            <SectionHeaderInfo>
                                <SectionTitle>Músicas</SectionTitle>
                            </SectionHeaderInfo>
                            <ButtonSectionSeeMore type='button'>Ver tudo</ButtonSectionSeeMore>
                        </SectionHeader>
                        <SectionBody>
                            <MainResultTracks>
                                <MainSearchTrack thumb='https://i.scdn.co/image/ab67616d00001e024d2a0203bd399c2ea1abfc86' artist='Imagine Dragons' title={`Imagine Dragons Imagine Dragons Medley: Demons / Radioactive / It's Time /On Top of the World`} />
                                <MainSearchTrack thumb='https://i.scdn.co/image/ab67616d00001e025675e83f707f1d7271e5cf8a' artist='Imagine Dragons' title='Believer' />
                                <MainSearchTrack thumb='https://i.scdn.co/image/ab67616d00001e02407bd04707c463bbb3410737' artist='Imagine Dragons' title='Demons' />
                            </MainResultTracks>
                        </SectionBody>
                    </SectionTopResultTracks>
                </ContainerTopResult>

                <Section>
                    <SectionHeader>
                        <SectionHeaderInfo>
                            <SectionTitle>Título da seção</SectionTitle>
                        </SectionHeaderInfo>
                    </SectionHeader>
                    <CardCollectionBody>
                        {
                            CARDS.map((card, i) => {
                                return <Card
                                    key={i}
                                    background={card.background}
                                    title={card.title}
                                    description={card.description} />
                            })
                        }
                    </CardCollectionBody>
                </Section>
                <Section>
                    <SectionHeader>
                        <SectionHeaderInfo>
                            <SectionTitle>Artistas</SectionTitle>
                        </SectionHeaderInfo>
                    </SectionHeader>
                    <CardCollectionBody>
                        <Card
                            background={pickRandomColor()}
                            title='Título do card'
                            description='Descrição do card atual e tals'
                            isArtist={true} />
                    </CardCollectionBody>
                </Section>
                <Section>
                    <SectionHeader>
                        <SectionHeaderInfo>
                            <SectionTitle>Título da seção</SectionTitle>
                        </SectionHeaderInfo>
                        <ButtonSectionSeeMore type='button'>Ver mais</ButtonSectionSeeMore>
                    </SectionHeader>
                    <CardCollectionBody>
                        {
                            CARDS.map((card, i) => {
                                return <Card
                                    key={i}
                                    background={card.background}
                                    title={card.title}
                                    description={card.description} />
                            })
                        }
                    </CardCollectionBody>
                </Section>
                <Section>
                    <SectionHeader>
                        <SectionHeaderInfo>
                            <SectionTitle>Título da seção</SectionTitle>
                        </SectionHeaderInfo>
                        <ButtonSectionSeeMore type='button'>Ver mais</ButtonSectionSeeMore>
                    </SectionHeader>
                    <CardCollectionBody>
                        {
                            CARDS.map((card, i) => {
                                return <Card
                                    key={i}
                                    background={card.background}
                                    title={card.title}
                                    description={card.description} />
                            })
                        }
                    </CardCollectionBody>
                </Section>
                <Section>
                    <SectionHeader>
                        <SectionHeaderInfo>
                            <SectionTitle>Título da seção</SectionTitle>
                        </SectionHeaderInfo>
                        <ButtonSectionSeeMore type='button'>Ver mais</ButtonSectionSeeMore>
                    </SectionHeader>
                    <CardCollectionBody>
                        {
                            CARDS.map((card, i) => {
                                return <Card
                                    key={i}                                
                                    background={card.background}
                                    title={card.title}
                                    description={card.description} />
                            })
                        }
                    </CardCollectionBody>
                </Section>
                <Section>
                    <SectionHeader>
                        <SectionHeaderInfo>
                            <SectionTitle>Título da seção</SectionTitle>
                        </SectionHeaderInfo>
                        <ButtonSectionSeeMore type='button'>Ver mais</ButtonSectionSeeMore>
                    </SectionHeader>
                    <CardCollectionBody>
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
                    </CardCollectionBody>
                </Section>
            </div>
        )
    }

    return (
        <Div>
            <VerticalScrollBar refParentContainer={refParentContainer} refParentBody={refParentBody} />
            <SearchPageContainer ref={refParentContainer}>
                <SearchPageBody ref={refParentBody}>
                    <Header 
                    additionalElements={HeaderAdditionalElements}
                    refParentContainer={refParentContainer}
                    handleGoBackHistory={props.handleGoBackHistory}
                    handleGoForwardHistory={props.handleGoForwardHistory}
                    getCustomHistoryInfo={props.getCustomHistoryInfo} />

                    <Switch>
                        <Route exact path='/search' component={renderHomeSearchPage} />
                        <Route path='/search/:searchValue' component={renderResultPage} />
                    </Switch>
                </SearchPageBody>
            </SearchPageContainer>
        </Div>
    )
}

export default SearchPage