import React, {useState} from 'react'

import {
    Div,
    TrackId,
    TrackInfo,
    TrackName,
    TrackDescription,
    BtnTrackOptions,
    IconVerticalDots
} from './styles.js'

import ItemOptions from '../ItemOptions'

const Track = (props) => {
    const [renderTrackOptions, setRenderTrackOptions] = useState(false);

    return(
        <Div>
            {
                renderTrackOptions ? <ItemOptions 
                                        thumbUrl={props.thumbUrl}
                                        itemTitle={props.trackName}
                                        setOpenItemOptions={setRenderTrackOptions} /> : ``
            }
            {
                props.isArtistPageTrack ? 
                <TrackId>{props.id}</TrackId> : ``
            }
            <TrackInfo>
                <TrackName>{props.trackName}</TrackName>
                <TrackDescription isArtistPageTrack={props.isArtistPageTrack ? true : false}>{props.artist || props.popularity}</TrackDescription>
            </TrackInfo>
            <BtnTrackOptions type="Button" onClick={() => setRenderTrackOptions(true)}>
                <IconVerticalDots/>
            </BtnTrackOptions>
        </Div>
    )
}
export default Track;