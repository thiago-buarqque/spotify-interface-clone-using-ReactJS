import React, { useRef, useEffect } from 'react'

import {
    Div,
    HomeContainer,
    HomeBody,
    Section,
    SectionHeader,
    SectionBody,
    SectionHeaderInfo,
    SectionTitle,
    SectionDescription,
    ButtonSectionSeeMore
} from './styles.js'

import Header from '../../../components/Desktop/Header'
import Card from '../../../components/Desktop/Card'
import VerticalScrollBar from '../../../components/Desktop/VerticalScrollBar'

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

const CARDS = [
    {
        background: pickRandomColor(),
        title:'Título do card',
        description:'Descrição do card atual e tals',
        path: '/playlist',
        isArtist: false
    },
    {
        background: pickRandomColor(),
        title:'Título do card',
        description:'Descrição do card atual e tals',
        path: '/playlist',
        isArtist: false
    },
    {
        background: pickRandomColor(),
        title:'Título do card',
        description:'Descrição do card atual e tals',
        path: '/playlist',
        isArtist: false
    },
    {
        background: pickRandomColor(),
        title:'Título do card',
        description:'Descrição do card atual e tals',
        path: '/playlist',
        isArtist: false
    },
    {
        background: pickRandomColor(),
        title:'Título do card',
        description:'Descrição do card atual e tals',
        path: '/playlist',
        isArtist: false
    },
    {
        background: pickRandomColor(),
        title:'Título do card',
        description:'Descrição do card atual e tals',
        path: '/playlist',
        isArtist: false
    }
]

const Home = props => {
    const refParentContainer = useRef(null)
    const refParentBody = useRef(null)

    useEffect(()=>{
        props.handlePushHistoryPath(props.history.location.pathname)
    })

    return (
        <Div>
            <VerticalScrollBar refParentContainer={refParentContainer} refParentBody={refParentBody} />
            <HomeContainer ref={refParentContainer}>
                <HomeBody ref={refParentBody}>
                    <Header 
                    refParentContainer={refParentContainer}
                    handleGoBackHistory={props.handleGoBackHistory}
                    handleGoForwardHistory={props.handleGoForwardHistory}
                    getCustomHistoryInfo={props.getCustomHistoryInfo}
                     />

                    <Section>
                        <SectionHeader>
                            <SectionHeaderInfo>
                                <SectionTitle>Título da seção</SectionTitle>
                                <SectionDescription>Descrição da seção e seção da descrição</SectionDescription>
                            </SectionHeaderInfo>
                            <ButtonSectionSeeMore type='button'>Ver mais</ButtonSectionSeeMore>
                        </SectionHeader>
                        <SectionBody>
                            {
                                CARDS.map( (card, i) =>{
                                    return(
                                        <Card
                                            key={i}
                                            title={card.title}
                                            description={card.description}
                                            background={card.background}
                                            path={card.path}
                                            isArtist={card.isArtist} />
                                    )
                                } )
                            }
                        </SectionBody>
                    </Section>

                    <Section>
                        <SectionHeader>
                            <SectionHeaderInfo>
                                <SectionTitle>Título da seção</SectionTitle>
                                <SectionDescription>Descrição da seção e seção da descrição</SectionDescription>
                            </SectionHeaderInfo>
                            <ButtonSectionSeeMore type='button'>Ver mais</ButtonSectionSeeMore>
                        </SectionHeader>
                        <SectionBody>
                            {
                                CARDS.map( (card, i) =>{
                                    return(
                                        <Card
                                            key={i}
                                            title={card.title}
                                            description={card.description}
                                            background={card.background}
                                            path={card.path}
                                            isArtist={card.isArtist} />
                                    )
                                } )
                            }
                        </SectionBody>
                    </Section>

                    <Section>
                        <SectionHeader>
                            <SectionHeaderInfo>
                                <SectionTitle>Título da seção</SectionTitle>
                                <SectionDescription>Descrição da seção e seção da descrição</SectionDescription>
                            </SectionHeaderInfo>
                            <ButtonSectionSeeMore type='button'>Ver mais</ButtonSectionSeeMore>
                        </SectionHeader>
                        <SectionBody>
                            {
                                CARDS.map( (card, i) =>{
                                    return(
                                        <Card
                                            key={i}
                                            title={card.title}
                                            description={card.description}
                                            background={card.background}
                                            path={card.path}
                                            isArtist={card.isArtist} />
                                    )
                                } )
                            }
                        </SectionBody>
                    </Section>

                    <Section>
                        <SectionHeader>
                            <SectionHeaderInfo>
                                <SectionTitle>Título da seção</SectionTitle>
                            </SectionHeaderInfo>
                            <ButtonSectionSeeMore type='button'>Ver mais</ButtonSectionSeeMore>
                        </SectionHeader>
                        <SectionBody>
                            {
                                CARDS.map( (card, i) =>{
                                    return(
                                        <Card
                                            key={i}
                                            title={card.title}
                                            description={card.description}
                                            background={card.background}
                                            path={card.path}
                                            isArtist={card.isArtist} />
                                    )
                                } )
                            }
                        </SectionBody>
                    </Section>

                    <Section>
                        <SectionHeader>
                            <SectionHeaderInfo>
                                <SectionTitle>Título da seção</SectionTitle>
                                <SectionDescription>Descrição da seção e seção da descrição</SectionDescription>
                            </SectionHeaderInfo>
                            <ButtonSectionSeeMore type='button'>Ver mais</ButtonSectionSeeMore>
                        </SectionHeader>
                        <SectionBody>
                        {
                                CARDS.map( (card, i) =>{
                                    return(
                                        <Card
                                            key={i}
                                            title={card.title}
                                            description={card.description}
                                            background={card.background}
                                            path='/artist'
                                            isArtist={true} />
                                    )
                                } )
                            }
                        </SectionBody>
                    </Section>
                </HomeBody>
            </HomeContainer>
        </Div>
    )
}

export default Home;