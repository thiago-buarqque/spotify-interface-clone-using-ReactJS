import styled from 'styled-components';

import {DotsVertical} from 'styled-icons/heroicons-outline';

export const Div = styled.div`
    width: 100%;
    height: 72px;

    padding: 0 18px;

    display: flex;
    align-items: center;
`
export const TrackId = styled.span`
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    color: rgb(179, 179, 179);
    margin-right: 16px;
`

export const TrackInfo = styled.div`
    width: 100%;
    min-width: 0;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    text-align:left;
`
export const TrackName = styled.span`
    color: #fff;
`
export const TrackDescription = styled.span`
    color: #b3b3b3;
    ${props => props.isArtistPageTrack ? 'font-size: 13px;' : 'font-size: 11px;'}
`
export const BtnTrackOptions = styled.button`
    width: 34px;
    height: 72px;

    background: none;
`
export const IconVerticalDots = styled(DotsVertical)`
    width: 22px;
    height: 22px;
    color: #fff;
`