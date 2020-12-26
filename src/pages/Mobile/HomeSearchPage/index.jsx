import React, { useEffect, useState, useRef } from 'react'

import {useHistory} from 'react-router-dom'

import Loading from '../../../images/loading.svg'
import { ReactComponent as SearchIcon } from '../../../images/icons/search.svg'

import {
    LoadingContainer,
    Div,
    SearchBody,
    Greetings,
    SearchDescription,
    BtnOpenSearchPage,
    SearchSpan,
} from './styles.js'

const HomeSearchPage = (props) => {
    let history = useHistory();

    const [isLoaded, setIsLoaded] = useState(false)

    const refFirstLoad = useRef(true)

    useEffect(() => {
        if (refFirstLoad.current) {
            setIsLoaded(true)
            refFirstLoad.current = false;
            const currentPath = props.history.location.pathname
            props.appendHistoryPath(currentPath)
        }
    }, [props, isLoaded])

    if (!isLoaded) {
        return (
            <LoadingContainer>
                <img src={Loading} alt='loading' width='100px' height='100px'/>
            </LoadingContainer>
        )
    }

    return (
        <Div>
            <SearchBody>
                <Greetings>Olá!</Greetings>
                <SearchDescription>Procure algo que você gosta e comece a curtir a música.</SearchDescription>
                <BtnOpenSearchPage type='button' onClick={() => history.push('/search/recent')}>
                    <SearchIcon />
                    <SearchSpan>Buscar</SearchSpan>
                </BtnOpenSearchPage>
            </SearchBody>
        </Div>
    )

}

export default HomeSearchPage;