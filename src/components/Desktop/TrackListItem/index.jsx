import React from 'react'

import {
    Parent,
    LeftContainer,
    IconTrack,
    BtnPlay,
    IconPlay,
    InfoContainer,
    TrackInfoNameContainer,
    TrackName,
    EpisodeName,
    TrackInfoDescription,
    ExplicitSpan,
    TrackArtistList,
    Artist,
    DotSeparator,
    TrackAlbum,
    ControlsContainer,
    BtnControls,
    IconEllipsis,
    TrackDurationContainer,
    TrackDuration,
    EpisodeRelease,
    IconRadio
} from './styles.js'

const TrackListItem = props => {
    return (
        <Parent>
            <LeftContainer>
                <IconTrack id='icon-track' isShowEpisode={props.isShowEpisode}/>
                <IconRadio id='icon-radio' isShowEpisode={props.isShowEpisode}/>
                <BtnPlay type='button' id='btn-play-track-list'>
                    <IconPlay />
                </BtnPlay>
            </LeftContainer>
            <InfoContainer>
                <TrackInfoNameContainer>
                    {
                        props.isShowEpisode ? 
                            <EpisodeName to={props.episodeLink ? props.episodeLink : ``} isShowEpisode={props.isShowEpisode}>{props.name}</EpisodeName>
                            : <TrackName>{props.name}</TrackName>
                    }                    
                </TrackInfoNameContainer>
                <TrackInfoDescription>
                    {
                        props.isExplicit ? <ExplicitSpan>E</ExplicitSpan> : ``
                    }
                    {
                        props.isTrack ?
                            <TrackArtistList>
                                {
                                    props.artist.map((artist, i) => {
                                        return (
                                            <Artist to={artist.link}
                                                key={i}
                                                className='track-item--artist'>{artist.name}{i !== props.artist.length - 1 ? `,` : ``}</Artist>
                                        )
                                    })
                                }</TrackArtistList> : ``
                    }

                    {
                        props.isTrack && props.album ? <DotSeparator>•</DotSeparator> : ``
                    }
                    {
                        props.isTrack && props.album ? <TrackAlbum to={props.album.link}>{props.album.name}</TrackAlbum> : ``
                    }                   
                    {
                        props.isShowEpisode ? <EpisodeRelease>{props.episodeRelease}</EpisodeRelease> : ``
                    }                    
                </TrackInfoDescription>
            </InfoContainer>
            <ControlsContainer>
                <BtnControls type='button' id='track-list-item--btn-controls'>
                    <IconEllipsis />
                </BtnControls>
            </ControlsContainer>
            <TrackDurationContainer>
                <TrackDuration>{props.duration}</TrackDuration>
            </TrackDurationContainer>
        </Parent>
    )
}

export default TrackListItem