import React from 'react'

import TrackList from '../../../components/Desktop/TrackList'

const Playlist = props => {
    let data
    let tracks

    const fetchData = () => {
        data = {
            isShow: true,
            tracklistName: 'Sociedades Secretas',
            tracklistCreator: 'Spotify Studios & Parcast',
            bio: `
            Eles já existem há milhares de anos...orquestrando alguns dos eventos mais
            controversos da história. E se não fosse por suas ações radicais, talvez você
            nunca soubesse que eles existiam. Toda quinta-feira, faça uma jornada por
            passagens ocultas e torne-se um membro da série diabólica da Parcast, SOCIEDADES
            SECRETAS. Cada sociedade é explorada em dois episódios - expondo as pessoas e o
            contexto responsável por sua fundação e analisando a psicologia por trás de suas
            crenças. SOCIEDADES SECRETAS foi criado por Max Cutler e é uma produção da Parcast
            Network. É produzido por Max & Ron Cutler.
            `,
            tracklistThumb: 'https://i.scdn.co/image/41fefc15c8c4e72e717885c068804a93ef5318e6'
        }
        tracks = [
            {
                isShowEpisode: true,
                name: 'Cosa Nostra - Parte 2',
                isExplicit: false,
                episodeRelease: "6 de agosto de 2020",                
                duration: '48:29',
                episodeLink: '/episode'
            },
            {
                isShowEpisode: true,
                name: 'Cosa Nostra - Parte 1',
                isExplicit: false,
                episodeRelease: "30 de julho de 2020",                
                duration: '47:36',
                episodeLink: '/episode'
            },{
                isShowEpisode: true,
                name: 'Ordem Hermética da Aurora Dourada - Parte 2',
                isExplicit: true,
                episodeRelease: "6 de agosto de 2020",                
                duration: '52:58',
                episodeLink: '/episode'
            },
            {
                isShowEpisode: true,
                name: 'Ordem Hermética da Aurora Dourada - Parte 1',
                isExplicit: false,
                episodeRelease: "6 de agosto de 2020",                
                duration: '52:58',
                episodeLink: '/episode'
            },
            {
                isShowEpisode: true,
                name: 'Cosa Nostra - Parte 2',
                isExplicit: false,
                episodeRelease: "6 de agosto de 2020",                
                duration: '48:29',
                episodeLink: '/episode'
            },
            {
                isShowEpisode: true,
                name: 'Cosa Nostra - Parte 1',
                isExplicit: false,
                episodeRelease: "30 de julho de 2020",                
                duration: '47:36',
                episodeLink: '/episode'
            },{
                isShowEpisode: true,
                name: 'Ordem Hermética da Aurora Dourada - Parte 2',
                isExplicit: true,
                episodeRelease: "6 de agosto de 2020",                
                duration: '52:58',
                episodeLink: '/episode'
            },
            {
                isShowEpisode: true,
                name: 'Ordem Hermética da Aurora Dourada - Parte 1',
                isExplicit: false,
                episodeRelease: "6 de agosto de 2020",                
                duration: '52:58',
                episodeLink: '/episode'
            },
        ]
    }

    fetchData()

    return (
        <TrackList
            data={data}
            tracks={tracks}
            trackListInfoBackground='rgb(40, 40, 40)'
            headerBackgroundOnScroll='rgb(55, 55, 55)'
            handlePushHistoryPath ={props.handlePushHistoryPath }
            handleGoBackHistory={props.handleGoBackHistory}
            handleGoForwardHistory={props.handleGoForwardHistory}
            getCustomHistoryInfo={props.getCustomHistoryInfo}
            history={props.history}  />
    )
}

export default Playlist