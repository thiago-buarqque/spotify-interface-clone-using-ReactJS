import React, { useRef } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Layout } from './layout.js';
import SideNav from './SideNav'
import { Main } from './Main/styles.js'
import Home from '../../pages/Desktop/Home'
import Player from './Player'
import SearchPage from '../../pages/Desktop/Search'
import Collection from '../../pages/Desktop/Collection'
import Playlist from '../../pages/Desktop/Playlist'
import Show from '../../pages/Desktop/Show'
import Album from '../../pages/Desktop/Album'
import ArtistPage from '../../pages/Desktop/Artist'

const AppDesktop = (props) => {

    let customHistory = useRef([])
    let customHistory_currentId = useRef(0)

    const handlePushHistoryPath = (newPath) => {
        const hasPath_id = customHistory.current.indexOf(newPath)

        let aux_arr
        let historyId = customHistory_currentId.current
        let _customHistory = [...customHistory.current]

        if (hasPath_id !== -1 && _customHistory[historyId] === newPath) {
            //Backwards event
            return
        } else if (hasPath_id !== -1 && _customHistory[historyId + 1] === newPath) {
            //Forward event
            customHistory_currentId.current += 1
            return
        }

        if ((hasPath_id === -1 && historyId < (_customHistory.length - 1)) ||
            (historyId < _customHistory.length - 1 && _customHistory[historyId + 1] !== newPath)) {
            //Change history next paths when it's on a path < _customHistory.length - 1
            //and isn't a backwards or forwards event, removing next paths and increment the current
            aux_arr = [..._customHistory.slice(0, historyId + 1)]

            _customHistory = [...aux_arr]
            _customHistory.push(newPath)

            customHistory.current = [..._customHistory]
            customHistory_currentId.current = _customHistory.length - 1
        }
        else if (hasPath_id === -1 || (hasPath_id !== -1 && (historyId === (_customHistory.length - 1)))) {
            //Just incrementing new path
            _customHistory.push(newPath)

            customHistory.current = [..._customHistory]
            customHistory_currentId.current = _customHistory.length - 1
        }
        return customHistory_currentId.current
    }

    const handleGoBackHistory = () => {
        const _customHistory = customHistory.current

        // GoBackwards increment 1 on history_id 'cause needs
        //to be verified at handlePushHistoryPath as a backwards event
        if (customHistory_currentId.current > 0) customHistory_currentId.current -= 1

        return {
            path: _customHistory[customHistory_currentId.current]
        }
    }

    const handleGoForwardHistory = () => {
        const _customHistory = customHistory.current

        // GoForwards does not increment 1 on history_id 'cause needs
        //to be verified at handlePushHistoryPath as a forward event
        return {
            path: _customHistory[customHistory_currentId.current+1]
        }
    }

    const getCustomHistoryInfo = () => {
        const _customHistory = customHistory.current
        const currentHistoryId = customHistory_currentId.current

        return {
            isFirstIndex: currentHistoryId === 0 ? true : false,
            isLastIndex: currentHistoryId === (_customHistory.length - 1) ? true : false,
            currentPath: _customHistory[currentHistoryId]
        }
    }

    return (
        <Router>
            <Layout>
                <Route path='/' component={(match) => <SideNav {...match} />} />
                <Main>
                    <Switch>
                        <Route exact path='/' component={(match) => <Home {...match}
                            handlePushHistoryPath={handlePushHistoryPath}
                            handleGoBackHistory={handleGoBackHistory}
                            handleGoForwardHistory={handleGoForwardHistory}
                            getCustomHistoryInfo={getCustomHistoryInfo} />} />

                        <Route path='/search' component={(match) => <SearchPage {...match}
                            handlePushHistoryPath={handlePushHistoryPath}
                            handleGoBackHistory={handleGoBackHistory}
                            handleGoForwardHistory={handleGoForwardHistory}
                            getCustomHistoryInfo={getCustomHistoryInfo} />} />

                        <Route path='/collection' component={(match) => <Collection {...match}
                            handlePushHistoryPath={handlePushHistoryPath}
                            handleGoBackHistory={handleGoBackHistory}
                            handleGoForwardHistory={handleGoForwardHistory}
                            getCustomHistoryInfo={getCustomHistoryInfo} />} />

                        <Route path='/playlist' component={(match) => <Playlist {...match}
                            handlePushHistoryPath={handlePushHistoryPath}
                            handleGoBackHistory={handleGoBackHistory}
                            handleGoForwardHistory={handleGoForwardHistory}
                            getCustomHistoryInfo={getCustomHistoryInfo} />} />

                        <Route path='/show' component={(match) => <Show {...match}
                            handlePushHistoryPath={handlePushHistoryPath}
                            handleGoBackHistory={handleGoBackHistory}
                            handleGoForwardHistory={handleGoForwardHistory}
                            getCustomHistoryInfo={getCustomHistoryInfo} />} />

                        <Route path='/album' component={(match) => <Album {...match}
                            handlePushHistoryPath={handlePushHistoryPath}
                            handleGoBackHistory={handleGoBackHistory}
                            handleGoForwardHistory={handleGoForwardHistory}
                            getCustomHistoryInfo={getCustomHistoryInfo} />} />

                        <Route path='/artist' component={(match) => <ArtistPage {...match}
                            handlePushHistoryPath={handlePushHistoryPath}
                            handleGoBackHistory={handleGoBackHistory}
                            handleGoForwardHistory={handleGoForwardHistory}
                            getCustomHistoryInfo={getCustomHistoryInfo} />} />

                    </Switch>
                </Main>
                <Player />
            </Layout>
        </Router>
    )
}

export default AppDesktop;