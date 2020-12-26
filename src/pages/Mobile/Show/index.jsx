import React, { useState, useRef, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

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
    BtnShowOptions,
    IconVerticalDots,
    ShowBody,
    ShowThumbContainer,
    ShowThumb,
    ShowInfoContainer,
    ShowTitle,
    ShowCreator,
    LastUpdate,
    DivEpisodeTimeInfo,
    EpisodeDuration,
    EpisodeContent,
    ShowDescriptionContainer,
    ShowDescription,
    BtnPlay,
    ShowLargeThumbContainer,
    ShowLargeThumb,
    BtnShowAllEpisodes,
    SpanBtnAllEpisodes,
    RightArrowIcon
} from './styles.js';

import ItemOptions from '../../../components/Mobile/ItemOptions'

const SHOW_INFO = {
    title: 'Sociedades Secretas',
    creator: 'De Spotify Studios & Parcast',
    lastUpdate: 'atualizado 16 de julho de 2020',
    fullDescription: `Eles já existem há milhares de anos... orquestrando alguns dos eventos 
    mais controversos da história. E se não fosse por suas ações radicais, talvez você 
    nunca soubesse que eles existiam. Toda quinta-feira, faça uma jornada por passagens 
    ocultas e torne-se um membro da série diabólica da Parcast, SOCIEDADES SECRETAS. 
    Cada sociedade é explorada em dois episódios - expondo as pessoas e o contexto responsável
    por sua fundação e analisando a psicologia por trás de suas crenças. SOCIEDADES SECRETAS 
    foi criado por Max Cutler e é uma produção da Parcast Network. É produzido por Max Amp;
    Ron Cutler.`,
    shortDescription: `Eles já existem há milhares de anos... orquestrando alguns dos eventos 
    mais controversos da história...`
}

const EPISODE_INFO = {
    title: 'Ordem Hermética da Aurora Dourada – Parte 1',
    date: '15 de julho de 2020',
    duration: '52 min',
    description: `Em 1887, três maçons e rosacruzes descobriram um tomo antigo e criptografado:
    o manuscrito Cypher. Eles o traduziram e usaram seus ensinamentos para formar a mística Ordem
    Hermética da Aurora Dourada. Mas enquanto eles alegavam promover a verdade, o conhecimento e a
    compreensão, a Ordem Hermética rapidamente se envolveu em disputas mesquinhas.`,
    isExplicit: false
}

const Show = (props) => {
    const [renderShowOptions, setRenderShowOptions] = useState(false)

    const refDescriptionContainer = useRef(null)
    const refParentContainer = useRef(null)
    const refHeader = useRef(null)
    const refHeaderTitle = useRef(null)

    let history = useHistory();

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
                if (refParentContainer.current.scrollTop >= 320) {
                    refHeader.current.style.backgroundColor = 'black';
                    refHeaderTitle.current.style.opacity = '1';
                } else {
                    refHeader.current.style.backgroundColor = 'transparent';
                    refHeaderTitle.current.style.opacity = '0';
                }
            });
        }

    }, [props,isLoaded])

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
                renderShowOptions ? <ItemOptions
                    thumbUrl='https://i.scdn.co/image/41fefc15c8c4e72e717885c068804a93ef5318e6'
                    itemTitle={EPISODE_INFO.title}
                    isShowList={true}
                    setOpenItemOptions={setRenderShowOptions} />
                    : ''
            }
            <Header ref={refHeader}>
                <HeaderBody>
                    {/* This div prevents to get a bug by not showing the goBack button */}
                    <BtnGoBack type='button' onClick={handleGoBack}>
                        <IconLeftArrow />
                    </BtnGoBack>
                    <HeaderTitleContainer ref={refHeaderTitle}>
                        <HeaderTitle>{EPISODE_INFO.title}</HeaderTitle>
                    </HeaderTitleContainer>

                    <HeaderOptions>
                        <BtnShowOptions type='button' onClick={() => setRenderShowOptions(true)}>
                            <IconVerticalDots />
                        </BtnShowOptions>
                    </HeaderOptions>
                </HeaderBody>
            </Header>

            <ShowBody>
                <ShowThumbContainer>
                    <ShowThumb src='https://i.scdn.co/image/41fefc15c8c4e72e717885c068804a93ef5318e6' />
                </ShowThumbContainer>
                <ShowInfoContainer>
                    <ShowTitle>{EPISODE_INFO.title}</ShowTitle>
                    <ShowCreator>{SHOW_INFO.title}</ShowCreator>
                    <DivEpisodeTimeInfo>
                        <LastUpdate>{EPISODE_INFO.date}</LastUpdate>
                        <EpisodeDuration>{EPISODE_INFO.duration}</EpisodeDuration>
                    </DivEpisodeTimeInfo>
                </ShowInfoContainer>
            </ShowBody>

            <EpisodeContent>
                <ShowDescriptionContainer ref={refDescriptionContainer}>
                    <BtnPlay type='button'>Play</BtnPlay>
                    <ShowDescription>{EPISODE_INFO.description}</ShowDescription>
                    <DivEpisodeTimeInfo>
                        <LastUpdate>{EPISODE_INFO.date}</LastUpdate>
                        <EpisodeDuration>{EPISODE_INFO.duration}</EpisodeDuration>
                    </DivEpisodeTimeInfo>
                </ShowDescriptionContainer>

                <ShowLargeThumbContainer>
                    <ShowLargeThumb src='https://i.scdn.co/image/41fefc15c8c4e72e717885c068804a93ef5318e6' />
                </ShowLargeThumbContainer>
                <BtnShowAllEpisodes type='button' onClick={() => history.push('/show')}>
                    <SpanBtnAllEpisodes>Ver todos os episódios</SpanBtnAllEpisodes>
                    <RightArrowIcon />
                </BtnShowAllEpisodes>
            </EpisodeContent>
        </Div>
    )
}

export default Show;