import React, { useState, useRef, useEffect } from 'react'

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
    BtnCollectionOptions,
    IconVerticalDots,
    ShowBody,
    ShowThumbContainer,
    ShowThumb,
    ShowInfoContainer,
    ShowTitle,
    ShowCreator,
    LastUpdate,
    ShowDescriptionContainer,
    ShowDescription,
    BtnShowFullDescription,
    ShowEpisodesContainer,
    TitleEpisodes
} from './styles.js'

import ShowItem from '../../../components/Mobile/ShowItem'
import ItemOptions from '../../../components/Mobile/ItemOptions'

const ShowCollection = (props) => {
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

    const EPISODES = [
        {
            episodeTitle: 'Ordem Hermética da Aurora Dourada – Parte 1',
            episodeDate: '16 de julho de 2020',
            episodeDuration: '62 min',
            episodeDescription: `Em 1887, três maçons e rosacruzes descobriram um tomo antigo e criptografado:
            o manuscrito Cypher. Eles o traduziram e usaram seus ensinamentos para formar a mística Ordem
            Hermética da Aurora Dourada. Mas enquanto eles alegavam promover a verdade, o conhecimento e a
            compreensão, a Ordem Hermética rapidamente se envolveu em disputas mesquinhas.`,
            isExplicit: false
        }, {
            episodeTitle: 'Apresentando: Sofia',
            episodeDate: '15 de julho de 2020',
            episodeDuration: '12 min',
            episodeDescription: `Apresentando Sofia: a nova áudio série do Spotify. Helena sempre sonhou em sair
            de sua cidade natal, então quando finalmente consegue um emprego na empresa responsável por SOFIA,
            o programa de inteligência artificial favorito do momento, ela sente que essa é sua chance. Estrelado
            por Monica Iozzi, Cris Vianna, Otaviano Costa e Hugo Bonemer. Direção por Mabel Cézar. Criado por Matthew
            Derby e Kevin Moffat. Produção executiva por Mimi O'Donnell. Produção por Katie Pastore. Desenho de som
            por Ryan Billia e Matthew Boll.`,
            isExplicit: false
        }, {
            episodeTitle: 'Filhos da Liberdade - Parte 2',
            episodeDate: '8 de julho de 2020',
            episodeDuration: '40 min',
            episodeDescription: `Apresentando Sofia: a nova áudio série do Spotify. Helena sempre sonhou em sair
            de sua cidade natal, então quando finalmente consegue um emprego na empresa responsável por SOFIA,
            o programa de inteligência artificial favorito do momento, ela sente que essa é sua chance. Estrelado
            por Monica Iozzi, Cris Vianna, Otaviano Costa e Hugo Bonemer. Direção por Mabel Cézar. Criado por Matthew
            Derby e Kevin Moffat. Produção executiva por Mimi O'Donnell. Produção por Katie Pastore. Desenho de som
            por Ryan Billia e Matthew Boll.`,
            isExplicit: false
        }, {
            episodeTitle: 'Filhos da Liberdade - Parte 1',
            episodeDate: '1 de julho de 2020',
            episodeDuration: '42 min',
            episodeDescription: `Apresentando Sofia: a nova áudio série do Spotify. Helena sempre sonhou em sair
            de sua cidade natal, então quando finalmente consegue um emprego na empresa responsável por SOFIA,
            o programa de inteligência artificial favorito do momento, ela sente que essa é sua chance. Estrelado
            por Monica Iozzi, Cris Vianna, Otaviano Costa e Hugo Bonemer. Direção por Mabel Cézar. Criado por Matthew
            Derby e Kevin Moffat. Produção executiva por Mimi O'Donnell. Produção por Katie Pastore. Desenho de som
            por Ryan Billia e Matthew Boll.`,
            isExplicit: false
        }, {
            episodeTitle: 'Ordo Templi Orientis - Parte 2',
            episodeDate: '24 de junho de 2020',
            episodeDuration: '48 min',
            episodeDescription: `Apresentando Sofia: a nova áudio série do Spotify. Helena sempre sonhou em sair
            de sua cidade natal, então quando finalmente consegue um emprego na empresa responsável por SOFIA,
            o programa de inteligência artificial favorito do momento, ela sente que essa é sua chance. Estrelado
            por Monica Iozzi, Cris Vianna, Otaviano Costa e Hugo Bonemer. Direção por Mabel Cézar. Criado por Matthew
            Derby e Kevin Moffat. Produção executiva por Mimi O'Donnell. Produção por Katie Pastore. Desenho de som
            por Ryan Billia e Matthew Boll.`,
            isExplicit: true
        }, {
            episodeTitle: 'Ordo Templi Orientis- Parte 1',
            episodeDate: '17 de junho de 2020',
            episodeDuration: '47 min',
            episodeDescription: `Apresentando Sofia: a nova áudio série do Spotify. Helena sempre sonhou em sair
            de sua cidade natal, então quando finalmente consegue um emprego na empresa responsável por SOFIA,
            o programa de inteligência artificial favorito do momento, ela sente que essa é sua chance. Estrelado
            por Monica Iozzi, Cris Vianna, Otaviano Costa e Hugo Bonemer. Direção por Mabel Cézar. Criado por Matthew
            Derby e Kevin Moffat. Produção executiva por Mimi O'Donnell. Produção por Katie Pastore. Desenho de som
            por Ryan Billia e Matthew Boll.`,
            isExplicit: true
        }
    ]

    const [showFullDescription, setShowFullDescription] = useState(false)
    const [renderShowOptions, setRenderShowOptions] = useState(false)

    const refDescriptionContainer = useRef(null)
    const refParentContainer = useRef(null)
    const refHeader = useRef(null)
    const refHeaderTitle = useRef(null)
    const refBtnFollow = useRef(null)

    let history = useHistory()

    const [isLoaded, setIsLoaded] = useState(false)

    const refFirstLoad = useRef(true)

    const handleGoBack = () => {
        let newPath = props.handleGoBack()
        history.push(newPath)
    }

    useEffect(() => {
        const parentContainer = refParentContainer.current
        const header = refHeader.current
        const headerTitle = refHeaderTitle.current
        const btnFollfow = refBtnFollow.current        

        if (refFirstLoad.current) {
            setIsLoaded(true)
            refFirstLoad.current = false;
            const currentPath = props.history.location.pathname
            props.appendHistoryPath(currentPath)
        }
        if (isLoaded) {
            if (showFullDescription) {
                const descriptionContainer = refDescriptionContainer.current

                descriptionContainer.style.background = 'linear-gradient(transparent, rgb(18, 18, 18) 42px) rgb(18, 18, 18)'
                descriptionContainer.style.paddingBottom = '18px'
            }

            parentContainer.addEventListener('scroll', () => {
                if (parentContainer.scrollTop >= 380) {
                    header.style.backgroundColor = 'black';
                    headerTitle.style.opacity = '1';
                    btnFollfow.style.opacity = '0'
                } else {
                    header.style.backgroundColor = 'transparent';
                    headerTitle.style.opacity = '0';
                    btnFollfow.style.opacity = '1'
                }
            });
        }

    }, [props, showFullDescription, isLoaded])

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
                    itemTitle={SHOW_INFO.title}
                    isShowList={true}
                    setOpenItemOptions={setRenderShowOptions} />
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
                        <HeaderTitle>{SHOW_INFO.title}</HeaderTitle>
                    </HeaderTitleContainer>

                    <HeaderOptions>
                        <BtnFollow ref={refBtnFollow} type='button'>
                            Seguir
                        </BtnFollow>

                        <BtnCollectionOptions type='button' onClick={() => setRenderShowOptions(true)}>
                            <IconVerticalDots />
                        </BtnCollectionOptions>
                    </HeaderOptions>
                </HeaderBody>
            </Header>

            <ShowBody>
                <ShowThumbContainer>
                    <ShowThumb src='https://i.scdn.co/image/41fefc15c8c4e72e717885c068804a93ef5318e6' />
                </ShowThumbContainer>
                <ShowInfoContainer>
                    <ShowTitle>{SHOW_INFO.title}</ShowTitle>
                    <ShowCreator>{SHOW_INFO.creator}</ShowCreator>
                    <LastUpdate>{SHOW_INFO.lastUpdate}</LastUpdate>
                </ShowInfoContainer>
            </ShowBody>
            <ShowDescriptionContainer ref={refDescriptionContainer}>
                <ShowDescription>
                    {
                        showFullDescription ? SHOW_INFO.fullDescription : SHOW_INFO.shortDescription
                    }
                    {
                        !showFullDescription ?
                            <BtnShowFullDescription type='button' onClick={() => setShowFullDescription(true)}>
                                Saiba mais
                        </BtnShowFullDescription> : ''
                    }
                </ShowDescription>
            </ShowDescriptionContainer>
            <ShowEpisodesContainer>
                <TitleEpisodes>Todos os episódios</TitleEpisodes>
                {
                    EPISODES.map((episode, i) => {
                        return <ShowItem
                            key={i}
                            showTitle={episode.episodeTitle}
                            showDate={episode.episodeDate}
                            showDuration={episode.episodeDuration}
                            showDescription={episode.episodeDescription}
                            isExplicit={episode.isExplicit} />
                    })
                }
            </ShowEpisodesContainer>
        </Div>
    )

}

export default ShowCollection;