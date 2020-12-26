import React from 'react'

import {useHistory} from 'react-router-dom'

import {
    Div,
    ShowHeader,
    ShowTitleContainer,
    ShowTitle,
    BtnPlay,
    PlayIcon,
    ShowInfo,
    SpanIsExplicit,
    ShowDate,
    ShowDuration,
    ShowDescription,
    Description
} from "./styles.js"

const ShowItem = (props) => {
    let history = useHistory();

    return (
        <Div>
            <ShowHeader>
                <ShowTitleContainer>
                    <ShowTitle onClick={() => history.push('/episode')}>{props.showTitle}</ShowTitle>
                    <ShowInfo>
                        {
                            props.isExplicit ?
                            <SpanIsExplicit>Explícito</SpanIsExplicit> : ''
                        }
                        <ShowDate>{props.showDate}</ShowDate>
                        <ShowDuration>{props.showDuration}</ShowDuration>
                    </ShowInfo>
                </ShowTitleContainer>
                <BtnPlay type="button">
                    <PlayIcon />
                </BtnPlay>
            </ShowHeader>

            <ShowDescription>
                <Description>{props.showDescription}</Description>
            </ShowDescription>
        </Div>
    )
}

export default ShowItem;