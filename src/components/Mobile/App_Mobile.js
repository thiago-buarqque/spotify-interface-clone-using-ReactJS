import React, { useRef, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Layout } from './layout.js';

import { Main } from './Main/styles.js';

import MiniPlayer from './MiniPlayer'
import NavBottom from './NavBottom'
import HomeSearchPage from '../../pages/Mobile/HomeSearchPage'
import SearchPage from '../../pages/Mobile/SearchPage'
import Home from '../../pages/Mobile/Home'
import Player from './Player'
import TrackList from '../../pages/Mobile/TrackList'
import ShowCollection from '../../pages/Mobile/ShowCollection'
import Show from '../../pages/Mobile/Show'
import Artist from '../../pages/Mobile/Artist'

const AppMobile = () => {
    const refPlayer = useRef(null)

    // Set a Vheight for mobiles
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    let customHistory = useRef([''])

    const appendHistoryPath = (lastPath) => {
        const hasPath_Id = customHistory.current.indexOf(lastPath)

        if (lastPath === '/') customHistory.current = ['/']
        else if (hasPath_Id === -1) customHistory.current.push(lastPath)
        else {
            let aux_arr = [...customHistory.current.slice(0, hasPath_Id+1)]
            customHistory.current = [...aux_arr]
        }
    }

    const handleGoBack = () => {
        customHistory.current.pop()
        return customHistory.current[customHistory.current.length - 1]
    }

    useEffect(() => {
    })

    return (
        <Router>
            <Layout>

                <Main id='mobile--main'>
                    <Switch>
                        <Route exact path='/' component={(matchProps) =>
                            <Home {...matchProps} appendHistoryPath={appendHistoryPath} />} />

                        <Route exact path='/search' component={(matchProps) =>
                            <HomeSearchPage {...matchProps} appendHistoryPath={appendHistoryPath} />} />

                        <Route exact path='/search/recent' component={(matchProps) =>
                            <SearchPage {...matchProps} appendHistoryPath={appendHistoryPath} handleGoBack={handleGoBack} />} />

                        <Route path='/search/:searchTag/:searchValue' component={(matchProps) =>
                            <SearchPage {...matchProps} appendHistoryPath={appendHistoryPath} handleGoBack={handleGoBack} />} />

                        <Route path='/playlist' component={(matchProps) =>
                            <TrackList {...matchProps} appendHistoryPath={appendHistoryPath} handleGoBack={handleGoBack} />} />

                        <Route path='/show' component={(matchProps) =>
                            <ShowCollection {...matchProps} appendHistoryPath={appendHistoryPath} handleGoBack={handleGoBack} />} />

                        <Route path='/episode' component={(matchProps) =>
                            <Show {...matchProps} appendHistoryPath={appendHistoryPath} handleGoBack={handleGoBack} />} />

                        <Route path='/artist' component={(matchProps) =>
                            <Artist {...matchProps} appendHistoryPath={appendHistoryPath} handleGoBack={handleGoBack} />} />
                    </Switch>
                </Main>

                <Player refPlayer={refPlayer} />
                <MiniPlayer openPlayer={() => refPlayer.current.style.marginTop = '0'} />
                <Route path='/' component={(matchProps) =>
                    <NavBottom {...matchProps}
                        appendHistoryPath={appendHistoryPath} />} />

            </Layout>
        </Router>

    )
}

export default AppMobile;
