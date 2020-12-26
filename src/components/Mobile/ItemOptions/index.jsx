import React from 'react'

import {
    Div,
    Body,
    BackgroundDiv,
    Background,
    Foreground,
    ItemContainer,
    ItemThumb,
    ItemInfo,
    ItemTitle,
    ItemCategory,
    OptionContainer,
    BtnOption,
    BtnClose,
    SpanBtn,
    FollowIcon,
    LikeIcon,
    ShareIcon,
    ArtistIcon,
    AlbumIcon
} from './styles.js'

const ItemOption = (props) => {

    const renderOptions = () => {
        return (
            <OptionContainer>
                {
                    props.isArtist || props.isPlaylist || props.isShowList ?
                        <BtnOption type="button" id="item--btn-follow">
                            <FollowIcon />
                            <SpanBtn>Seguir</SpanBtn>
                        </BtnOption>
                        :
                        <BtnOption type="button" id="item--btn-like">
                            <LikeIcon />
                            <SpanBtn>Curtir</SpanBtn>
                        </BtnOption>

                }
                {
                    !props.isShowList ?
                        <BtnOption type="button" id="item--btn-share">
                            <ShareIcon />
                            <SpanBtn>Compartilhar</SpanBtn>
                        </BtnOption> : ``
                }
                {
                    props.isTrack ?
                        <BtnOption type="button" id="item--btn-go-to-artist">
                            <ArtistIcon />
                            <SpanBtn>Ver o artista</SpanBtn>
                        </BtnOption> : ''
                }
                {
                    props.isTrack ?
                        <BtnOption type="button" id="item--btn-go-to-album">
                            <AlbumIcon />
                            <SpanBtn>Ver o álbum</SpanBtn>
                        </BtnOption> : ''
                }

            </OptionContainer>
        )
    }

    return (
        <Div>
            <BackgroundDiv>
                <Background />
                <Foreground />
                <Body>
                    <ItemContainer>
                        <ItemThumb src={props.thumbUrl} />
                        <ItemInfo>
                            <ItemTitle hasItemCategory={props.itemCategory ? true : false}>{props.itemTitle}</ItemTitle>
                            {
                                props.itemCategory ? <ItemCategory>{props.itemCategory}</ItemCategory> : ''
                            }

                        </ItemInfo>
                    </ItemContainer>

                    {renderOptions()}

                    <BtnClose type="button" onClick={() => props.setOpenItemOptions(false)}>Cancelar</BtnClose>
                </Body>
            </BackgroundDiv>
        </Div>
    )
}

export default ItemOption;