import React, { useRef, useState, useEffect } from 'react'

import {
    Div,
    TrackListContainer,
    TrackListBody,
    TrackListInfoContainer,
    TrackListInfoBody,
    TrackListThumbContainer,
    TrackListThumb,
    TrackListDetails,
    TrackListCategoryContainer,
    TrackListCategory,
    TrackListTitleContainer,
    TrackListTitle,
    TrackListDescriptionContainer,
    TrackListDescription,
    TrackListInfoFooter,
    TrackListCreator,
    TrackListPopularity,
    TrackListDuration,
    TrackListContent,
    TrackListControls,
    BtnPlayTrackList,
    IconPlay,
    BtnLikeTrackList,
    IconHeart,
    BtnTrackListOptions,
    IconEllipsis,
    AdditionalStyleContainer,
    BtnHeaderPlay,
    HeaderTrackListTitle,
    AlbumInfoContainer,
    AlbumInfoArtistContainer,
    AlbumArtistThumb,
    AlbumArtistName,
    AlbumRelease,
    AlbumDuration,
    ShowCreator,
    BtnFollow,
    ShowBioContainer,
    Bio,
    ShowEpisodesTitle,
    AlbumCopyright
} from './styles.js'

import TrackListItem from '../TrackListItem'

import Header from '../Header'
import VerticalScrollBar from '../VerticalScrollBar'

const TrackList = props => {
    const TRACKS = props.tracks
    const DATA = props.data

    const refParentContainer = useRef(null)
    const refParentBody = useRef(null)
    const refTrackListInfo = useRef(null)

    const [firstRender, setFirstRender] = useState(false)
    const [trackListInfoHeight, setTrackListInfoHeight] = useState(0)
    const [headerHeight, setHeaderHeight] = useState(0)

    const refHeaderAdditionalElement = useRef(null)

    const renderHeaderAdditionalElements = () => {
        return (
            <AdditionalStyleContainer ref={refHeaderAdditionalElement} id='--header--additional-content-container'>
                <BtnHeaderPlay type='button'>
                    <IconPlay id='--header--additional--icon-play' />
                </BtnHeaderPlay>
                <HeaderTrackListTitle>{DATA.tracklistName}</HeaderTrackListTitle>
            </AdditionalStyleContainer>
        )
    }

    const handleHeaderAdditionalContentFX = () => {
        let styleTrackListInfo = window.getComputedStyle(refTrackListInfo.current)
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

    const renderTrackListDetails = () => {
        //Render tracklist info according DATA
        return (
            <TrackListDetails>
                {
                    !DATA.isShow ? <TrackListCategoryContainer>
                        <TrackListCategory>{DATA.tracklistCategory}</TrackListCategory>
                    </TrackListCategoryContainer> : ``
                }

                <TrackListTitleContainer>
                    <TrackListTitle isShow={DATA.isShow} isAlbum={DATA.isAlbum}>{DATA.tracklistName}</TrackListTitle>
                </TrackListTitleContainer>

                <TrackListDescriptionContainer>
                    {
                        DATA.isPlaylist ?
                            <TrackListDescription>{DATA.tracklistDescription}</TrackListDescription> : ``
                    }
                    {

                    }
                    <TrackListInfoFooter>
                        {
                            DATA.isPlaylist ?
                                <TrackListCreator>{DATA.tracklistCreator}</TrackListCreator> : ``
                        }
                        {
                            DATA.isAlbum ?
                                <AlbumInfoContainer>
                                    <AlbumInfoArtistContainer>
                                        <AlbumArtistThumb src={DATA.artistThumb} alt={DATA.artistName} title={DATA.artistName}/>
                                        <AlbumArtistName to={DATA.artistLink}>{DATA.artistName}</AlbumArtistName>
                                    </AlbumInfoArtistContainer>
                                    <AlbumRelease>{DATA.albumRelease}</AlbumRelease>
                                    <AlbumDuration>{DATA.albumDuration}</AlbumDuration>
                                </AlbumInfoContainer> : ``
                        }
                        {
                            DATA.isShow ?
                                <ShowCreator>{DATA.tracklistCreator}</ShowCreator> : ``
                        }
                        {
                            DATA.isPlaylist ?
                                <TrackListPopularity>{DATA.tracklistPopularity}</TrackListPopularity> : ``
                        }
                        {
                            DATA.isPlaylist ?
                                <TrackListDuration>{DATA.tracklistDuration}</TrackListDuration> : ``
                        }

                    </TrackListInfoFooter>
                </TrackListDescriptionContainer>
            </TrackListDetails >
        )
    }

    useEffect(() => {
        const Init = () => {
            setFirstRender(true)
            props.handlePushHistoryPath(props.history.location.pathname)

            let styleTrackListInfo = window.getComputedStyle(refTrackListInfo.current)
            let header = document.getElementById('--top-header')
            let styleHeader = window.getComputedStyle(header)

            let track_list_info_height = styleTrackListInfo.getPropertyValue('height').split('px')[0]
            let header_height = styleHeader.getPropertyValue('height').split('px')[0]

            setTrackListInfoHeight(track_list_info_height)
            setHeaderHeight(header_height)

            refParentContainer.current.addEventListener('scroll', handleHeaderAdditionalContentFX)
        }

        if (!firstRender) Init()
    })

    return (
        <Div>
            <VerticalScrollBar refParentContainer={refParentContainer} refParentBody={refParentBody} />
            <TrackListContainer ref={refParentContainer}>
                <TrackListBody ref={refParentBody}>
                    <Header
                        refParentContainer={refParentContainer}
                        headerAdditionalStyle={`
                        //No margin for trackList component
                        margin-bottom: 0 !important;
                        `}
                        backgroundOnScroll={props.headerBackgroundOnScroll}
                        scrollValueMarker={(trackListInfoHeight - headerHeight)}
                        additionalElements={renderHeaderAdditionalElements}
                        handleGoBackHistory={props.handleGoBackHistory}
                        handleGoForwardHistory={props.handleGoForwardHistory}
                        getCustomHistoryInfo={props.getCustomHistoryInfo} />

                    <TrackListInfoContainer ref={refTrackListInfo} background={props.trackListInfoBackground}>
                        <TrackListInfoBody>
                            <TrackListThumbContainer>
                                <TrackListThumb src={DATA.tracklistThumb} alt={DATA.tracklistName} />
                            </TrackListThumbContainer>
                            {
                                renderTrackListDetails()
                            }
                        </TrackListInfoBody>
                    </TrackListInfoContainer>

                    <TrackListContent>
                        <TrackListControls>
                            <BtnPlayTrackList type='button'>
                                <IconPlay />
                            </BtnPlayTrackList>
                            {
                                DATA.isPlaylist || DATA.isAlbum ?
                                    <BtnLikeTrackList type='button'>
                                        <IconHeart />
                                    </BtnLikeTrackList> :
                                    <BtnFollow type='button'>
                                        Seguir
                                </BtnFollow>
                            }
                            <BtnTrackListOptions type='button'>
                                <IconEllipsis />
                            </BtnTrackListOptions>
                        </TrackListControls>
                        {
                            DATA.isShow ?
                                <ShowBioContainer>
                                    <Bio>{DATA.bio}</Bio>
                                </ShowBioContainer> : ``
                        }
                        {
                            DATA.isShow ?
                                <ShowEpisodesTitle>Todos os episódios</ShowEpisodesTitle> : ``
                        }
                        {
                            DATA.isShow ?
                                TRACKS.map((episode, i) => {
                                    return (
                                        < TrackListItem
                                            key={i}
                                            isShowEpisode={episode.isShowEpisode}
                                            name={episode.name}
                                            isExplicit={episode.isExplicit}
                                            episodeRelease={episode.episodeRelease}
                                            duration={episode.duration}
                                            episodeLink={episode.episodeLink} />
                                    )
                                }) :
                                TRACKS.map((track, i) => {
                                    return (
                                        < TrackListItem
                                            key={i}
                                            isShowEpisode={track.isShowEpisode}
                                            isTrack={track.isTrack}
                                            name={track.name}
                                            isExplicit={track.isExplicit}
                                            artist={track.artist}
                                            album={track.album}
                                            duration={track.duration} />
                                    )
                                })
                        }
                        {
                            DATA.isAlbum ? <AlbumCopyright>{DATA.albumCopyright}</AlbumCopyright> : ``
                        }
                    </TrackListContent>
                </TrackListBody>
            </TrackListContainer>
        </Div>
    )
}

export default TrackList