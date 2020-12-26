import React from 'react'

import TrackList from '../../../components/Desktop/TrackList'

const Playlist = props => {
    let data
    let tracks

    const fetchData = () => {
        data = {
            isAlbum: true,
            tracklistName: 'Slave to the Rhythm (Audien Remix Radio Edit)',
            tracklistCategory: 'single',
            albumDuration: '3min 13s',
            tracklistThumb: 'https://i.scdn.co/image/ab67616d00001e0223a87d14354ae1bc4ea33bcf',
            artistThumb: 'https://i.scdn.co/image/51dad9aaabe5643818840207a9a8957c2ad91bf2',
            artistLink: '/artist',
            artistName: 'Michael Jackson',
            albumRelease: '2014',
            albumCopyright: '℗ 2014 MJJ Productions, Inc.'
        }
        tracks = [
            {
                isTrack: true,
                name: 'Slave to the Rhythm (Audien Remix Radio Edit)',
                isExplicit: false,
                artist: [{
                    name: 'Michael Jackson',
                    link: '/artist'
                }, {
                    name: 'Audien',
                    link: '/artist'
                }
                ],
                duration: '3:13'
            }
        ]
    }

    fetchData()

    return (
        <TrackList 
            data={data}
            tracks={tracks}
            trackListInfoBackground='rgb(34, 35, 43)'
            headerBackgroundOnScroll='rgb(45, 47, 57)'
            handlePushHistoryPath ={props.handlePushHistoryPath }
            handleGoBackHistory={props.handleGoBackHistory}
            handleGoForwardHistory={props.handleGoForwardHistory}
            getCustomHistoryInfo={props.getCustomHistoryInfo}
            history={props.history}/>
    )
}

export default Playlist