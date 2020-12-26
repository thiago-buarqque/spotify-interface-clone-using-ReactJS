import React, { useState } from 'react';

import { Div, ItemThumb, InfoContainer, Title, Description, Button, RemoveRecentSearch, Options } from './styles.js';

import ItemOptions from '../ItemOptions'

const ItemLeftThumb = (props) => {
    const [openItemOption, setOpenItemOptions] = useState(false);

    return (
        <Div>
            <ItemThumb src={props.thumbUrl} isArtist={props.isArtist} />
                <InfoContainer>
                    <Title>{props.title}</Title>
                    <Description>{props.category || props.description}</Description>
                </InfoContainer>
            {
                props.isRecentItem ?
                    <Button type="button">
                        <RemoveRecentSearch />
                    </Button>
                    : ``
            }
            {
                (!props.isRecentItem && !props.isArtistPageItem ) ? 
                    <Button type="button" onClick={() => setOpenItemOptions(true)}>
                        <Options />
                    </Button> : ``
            }

            {
                openItemOption ? <ItemOptions
                    thumbUrl={props.thumbUrl}
                    itemCategory={props.category}
                    itemTitle={props.title}
                    isTrack={props.isTrack}
                    isPlaylist={props.isPlaylist}
                    isAlbum={props.isAlbum}
                    isArtist={props.isArtist}
                    setOpenItemOptions={setOpenItemOptions} /> : ''
            }
        </Div>
    )
}

export default ItemLeftThumb;