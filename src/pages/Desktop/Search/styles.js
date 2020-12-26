import styled from 'styled-components'

import {ChevronThinLeft} from 'styled-icons/entypo/'
import {ChevronThinRight} from 'styled-icons/entypo'
import { ReactComponent as Search } from '../../../images/icons/search.svg'

export const Div = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    background: #121212;
`
export const SearchPageContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px;

    overflow-y: scroll;
`
export const SearchPageBody = styled.div`
    width: 100%;
    height: auto;

    position: relative;

    background: #121212;
`

export const Section = styled.section`
    width: 100%;
    height: auto;
    min-height: 300px;

    padding: 0 32px 24px 32px;

    overflow-x: hidden;
`
export const SectionTitle = styled.span`
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    text-align: left;
    letter-spacing: -1px;
`
export const SectionBody = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 24px;

    position: relative;
`
export const RecentSearchContainer = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));
    overflow-y: hidden;
    grid-auto-rows: 0;
    grid-template-rows: auto 1fr;
`

export const CarouselContainer = styled.div`
    width: 100%;
    height: 100%;

    overflow: hidden;
`
export const CarouselLargeCards = styled.div`
    min-width: 1440px;
    height: 250px;

    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill,344px);

    transform: translateX(0px);

    transition: all .25s ease-in-out;
`
export const CarouselControl = styled.button`
    background: none;

    width: 40px;
    height: 40px;

    background: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: calc(50% - 40px);

    border-radius: 50%;
    z-index: 1;

    &#btn-prev-carousel{
        left: -20px;
        display: none;
    }
    &#btn-next-carousel{
        right: -20px;
    }
`
export const IconLeftArrow = styled(ChevronThinLeft)`
    width: 24px;
    height: 24px;

    color: #121212;
`
export const IconRightArrow = styled(ChevronThinRight)`
    width: 24px;
    height: 24px;

    color: #121212;
`

export const AllGenresContainer = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill,minmax(164px,1fr));
    overflow: hidden;
    grid-auto-rows: auto;
    grid-template-rows: auto 1fr;
`

export const AdditionalContent = styled.div`
    width: 364px;
    height: 40px;

    background: #fff;
    border-radius: 500px;

    display: flex;
    align-items: center;
    padding: 16px 8px;
`
export const IconSearch = styled(Search)`
    width: 24px;
    height: 24px;

    color: #121212;
    margin: 0 4px;
`
export const InputSearch = styled.input`
    padding: 12px 2px;
    font-size: 14px;
    text-overflow: ellipsis;
    width: 100%;

    font-weight: 500;
    color: #333333;
`
export const ContainerTopResult = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: 344px 1fr;
    grid-gap: 16px;
`
export const SectionTopResult = styled.div`
    width: 100%;
    min-height: 300px;
    position: relative;

    padding-bottom:24px;
    padding-right: 32px;
    padding-left: 32px;
`
export const SectionTopResultTracks = styled.div`
    width: 100%;
    min-height: 300px;
    position: relative;

    padding-bottom:24px;
    padding-right: 32px;
    padding-left: 32px;

    overflow-x: hidden;
`
export const ContainerMainResult = styled.div`
    width: 344px;
    height: 240px;

    background: #282828;

    display: flex;
    flex-direction: column;

    border-radius: 4px;
    padding: 20px 20px 16px 20px;
`
export const MainResultThumb = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-bottom:16px;
`
export const MainResultTitle = styled.span`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -1px;
    padding-bottom: 8px;
`
export const MainResultCategory = styled.span`
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    padding: 4px 12px;
`
export const MainResultTracks = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`
export const CardCollectionBody = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill,minmax(164px,1fr));
    overflow-y: hidden;
    grid-auto-rows: 0;
    grid-template-rows: auto 1fr;
`

export const SectionHeader = styled.div`
    width: 100%;
    min-height: 35px;
    max-height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;

    position: relative;
`

export const SectionHeaderInfo = styled.div`
    width: 100%;
`

export const ButtonSectionSeeMore = styled.button`
    background: none;

    width: 90px;

    position: absolute;
    top: 10px;
    right: 0;

    font-size:12px;
    text-transform:uppercase;
    font-weight: 700;
    letter-spacing: 1px;

    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`