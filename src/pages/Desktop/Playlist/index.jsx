import React, {useEffect} from 'react'

import TrackList from '../../../components/Desktop/TrackList'

const Playlist = props => {
    let data
    let tracks

    const fetchData = () => {
        data = {
            isPlaylist: true,
            tracklistName: 'This Is Cuco',
            tracklistCategory: 'playlist',
            tracklistDescription: 'The best of Cuco, right here on Spotify.',
            tracklistCreator: 'Spotify',
            tracklistPopularity: '100.700 curtidas',
            tracklistDuration: '2h 26min',
            tracklistThumb: 'https://i.scdn.co/image/ab67706f0000000390665954c5ba28557199359a'
        }
        tracks = [
            {
                isTrack: true,
                name: 'Bossa No Sé (feat. Jean Carter)',
                isExplicit: true,
                artist: [{
                    name: 'cuco',
                    link: '/artist'
                }, {
                    name: 'Jean Carter',
                    link: '/artist'
                }
                ],
                album: {
                    name: 'Bossa No Sé',
                    link: '/album'
                },
                duration: '3:21'
            },
            {
                isTrack: true,
                name: 'Lo Que Siento',
                isExplicit: false,
                artist: [{
                    name: 'cuco',
                    link: '/artist'
                }
                ],
                album: {
                    name: 'Wannabewithu',
                    link: '/album'
                },
                duration: '5:12'
            },
            {
                isTrack: true,
                name: 'Feelings',
                isExplicit: false,
                artist: [{
                    name: 'cuco',
                    link: '/artist'
                }
                ],
                album: {
                    name: 'Feelings',
                    link: '/album'
                },
                duration: '3:10'
            },
            {
                isTrack: true,
                name: 'Dontmakemefallinlove',
                isExplicit: false,
                artist: [{
                    name: 'cuco',
                    link: '/artist'
                }
                ],
                album: {
                    name: 'Chiquito',
                    link: '/album'
                },
                duration: '3:27'
            },
            {
                isTrack: true,
                name: 'Bossa No Sé (feat. Jean Carter)',
                isExplicit: true,
                artist: [{
                    name: 'cuco',
                    link: '/artist'
                }, {
                    name: 'Jean Carter',
                    link: '/artist'
                }
                ],
                album: {
                    name: 'Bossa No Sé',
                    link: '/album'
                },
                duration: '3:21'
            },
            {
                isTrack: true,
                name: 'Lo Que Siento',
                isExplicit: false,
                artist: [{
                    name: 'cuco',
                    link: '/artist'
                }
                ],
                album: {
                    name: 'Wannabewithu',
                    link: '/album'
                },
                duration: '5:12'
            },
            {
                isTrack: true,
                name: 'Feelings',
                isExplicit: false,
                artist: [{
                    name: 'cuco',
                    link: '/artist'
                }
                ],
                album: {
                    name: 'Feelings',
                    link: '/album'
                },
                duration: '3:10'
            },
            {
                isTrack: true,
                name: 'Dontmakemefallinlove',
                isExplicit: false,
                artist: [{
                    name: 'cuco',
                    link: '/artist'
                }
                ],
                album: {
                    name: 'Chiquito',
                    link: '/album'
                },
                duration: '3:27'
            },
            {
                isTrack: true,
                name: 'Bossa No Sé (feat. Jean Carter)',
                isExplicit: true,
                artist: [{
                    name: 'cuco',
                    link: '/artist'
                }, {
                    name: 'Jean Carter',
                    link: '/artist'
                }
                ],
                album: {
                    name: 'Bossa No Sé',
                    link: '/album'
                },
                duration: '3:21'
            },
            {
                isTrack: true,
                name: 'Lo Que Siento',
                isExplicit: false,
                artist: [{
                    name: 'cuco',
                    link: '/artist'
                }
                ],
                album: {
                    name: 'Wannabewithu',
                    link: '/album'
                },
                duration: '5:12'
            },
            {
                isTrack: true,
                name: 'Feelings',
                isExplicit: false,
                artist: [{
                    name: 'cuco',
                    link: '/artist'
                }
                ],
                album: {
                    name: 'Feelings',
                    link: '/album'
                },
                duration: '3:10'
            },
            {
                isTrack: true,
                name: 'Dontmakemefallinlove',
                isExplicit: false,
                artist: [{
                    name: 'cuco',
                    link: '/artist'
                }
                ],
                album: {
                    name: 'Chiquito',
                    link: '/album'
                },
                duration: '3:27'
            }
        ]
    }

    fetchData()

    useEffect(()=>{
        props.handlePushHistoryPath(props.history.location.pathname)
    })

    return (
        <TrackList 
            data={data}
            tracks={tracks}
            trackListInfoBackground='rgb(52, 43, 24)'
            headerBackgroundOnScroll='rgb(70, 57, 32)'
            handlePushHistoryPath ={props.handlePushHistoryPath }
            handleGoBackHistory={props.handleGoBackHistory}
            handleGoForwardHistory={props.handleGoForwardHistory}
            getCustomHistoryInfo={props.getCustomHistoryInfo} 
            history={props.history}/>
    )
}

export default Playlist