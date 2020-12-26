import React, {useRef} from 'react'

import {
    Div,
    ContainerLargeThumb,
    LargeThumbBody,
    LargeThumb,
    BtnHideLargeThumb,
    IconArrowDown,
    ContainerTrackThumb,
    ThumbContainer,
    TrackThumb,
    BtnExpandLargeThumb,
    IconArrowUp,
    ContainerTrackInfo,
    TrackName,
    TrackArtist,
    TrackOptions,
    IconHeart,
    IconPictureInPicture,
    ContainerPlayer,
    ContainerPlayerControls,
    PlayerButton,
    IconShuffle,
    IconPrevTrack,
    IconPlay,
    IconNextTrack,
    IconRepeat,
    ContainerTrackProgress,
    CurrentTrackTime,
    TotalTrackTime,
    ContainerProgressBar,
    ProgressBar,
    BtnMoveProgressBar,
    ContainerPlayerOptions,
    BtnPlayerOption,
    IconAddToQueue,
    IconDevices,
    ContainerTrackVolume,
    IconVolume,
    ContainerVolumeProgressBar
} from './styles.js'

const Player = props => {
    const refTrackThumb = useRef(null)
    const refLargeThumb = useRef(null)

    const expandLargeThumb = () => {
        refLargeThumb.current.style.height = '232px'
        refLargeThumb.current.style.opacity = '1'
        refTrackThumb.current.style.transform = 'translateX(-72px)'
    }

    const hideLargeThumb = () => {
        refLargeThumb.current.style.height = '0px'
        refLargeThumb.current.style.opacity = '0'
        refTrackThumb.current.style.transform = 'translateX(0px)'
    }

    return (
        <Div>
            <ContainerLargeThumb ref={refLargeThumb}>
                <LargeThumbBody >
                    <LargeThumb src='https://i.scdn.co/image/ab67616d00001e02f89d2d949f9671982e9e732c' />
                    <BtnHideLargeThumb type='button' id='btn-hide-large-thumb' onClick={hideLargeThumb}>
                        <IconArrowDown />
                    </BtnHideLargeThumb>
                </LargeThumbBody>
            </ContainerLargeThumb>

            <ContainerTrackThumb ref={refTrackThumb}>
                <ThumbContainer>
                    <TrackThumb src='https://i.scdn.co/image/ab67616d00004851f89d2d949f9671982e9e732c' />
                    <BtnExpandLargeThumb type='button' id='btn-expand-large-thumb' onClick={expandLargeThumb}>
                        <IconArrowUp />
                    </BtnExpandLargeThumb>
                </ThumbContainer>
                <ContainerTrackInfo>
                    <TrackName>Still Feel.</TrackName>
                    <TrackArtist>half alive</TrackArtist>
                </ContainerTrackInfo>
                <TrackOptions>
                    <IconHeart />
                    <IconPictureInPicture />
                </TrackOptions>
            </ContainerTrackThumb>

            <ContainerPlayer>
                <ContainerPlayerControls>
                    <PlayerButton type='button'>
                        <IconShuffle />
                    </PlayerButton>

                    <PlayerButton type='button'>
                        <IconPrevTrack />
                    </PlayerButton>

                    <PlayerButton type='button'>
                        <IconPlay />
                    </PlayerButton>

                    <PlayerButton type='button'>
                        <IconNextTrack />
                    </PlayerButton>

                    <PlayerButton type='button'>
                        <IconRepeat />
                    </PlayerButton>
                </ContainerPlayerControls>

                <ContainerTrackProgress>
                    <CurrentTrackTime>1:03</CurrentTrackTime>
                    <ContainerProgressBar>
                        <ProgressBar id='track-progress-bar'>
                            <BtnMoveProgressBar type='button' />
                        </ProgressBar>
                    </ContainerProgressBar>
                    <TotalTrackTime>1:03</TotalTrackTime>
                </ContainerTrackProgress>
            </ContainerPlayer>
            <ContainerPlayerOptions>
                <BtnPlayerOption type='button'>
                    <IconAddToQueue />
                </BtnPlayerOption>

                <BtnPlayerOption type='button'>
                    <IconDevices />
                </BtnPlayerOption>

                <ContainerTrackVolume>

                    <BtnPlayerOption type='button'>
                        <IconVolume />
                    </BtnPlayerOption>

                    <ContainerVolumeProgressBar>
                        <ProgressBar id='volume-progress-bar'>
                            <BtnMoveProgressBar type='button' />
                        </ProgressBar>
                    </ContainerVolumeProgressBar>

                </ContainerTrackVolume>
            </ContainerPlayerOptions>


        </Div>
    )
}

export default Player;