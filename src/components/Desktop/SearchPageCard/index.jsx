import React from 'react'

import {
    Div,
    ContainerContent,
    Title,
    Picture
} from './styles.js'

const SearchPageCard = props => {
    return(
        <Div isLarge={props.large} background={props.background} className={props.large ? 'search-page--large-card' : ''}>
            <ContainerContent>
                <Title isLarge={props.large}>{props.title}</Title>
                <Picture src={props.picture} isLarge={props.large}/>
            </ContainerContent>            
        </Div>
    )
}

export default SearchPageCard