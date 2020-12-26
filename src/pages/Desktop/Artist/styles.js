import styled from 'styled-components'

import { Verified } from 'styled-icons/material'
import { PlayArrow } from 'styled-icons/material-sharp'
import { DotsHorizontal } from 'styled-icons/heroicons-outline'
import { ChevronThinDown } from 'styled-icons/entypo'

export const ArtistParent = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    background: #121212;        
`
export const ArtistContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px;
    overflow-y: scroll;
`
export const ArtistBody = styled.div`
    width: 100%;
    height: auto;

    position: relative;

    background: #121212;    
`
export const ArtistInfoContainer = styled.div`
    width: 100%;
    height: 340px;

    position: relative;
    top: -60px;

    background: url("${props => props.artistImageCover}");
    background-position: center;
    background-size: cover;

    display: flex;
    align-items: flex-end;
`
export const ArtistInfoBackgroundFX = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    background: linear-gradient(transparent,rgba(0,0,0,.5));
`
export const ArtistInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 0 32px;

    color: #fff;
    z-index: 1;
`
export const VerifiedArtist = styled.div`
    width: 100%;
    margin-bottom: 8px;
`
export const IconVerified = styled(Verified)`
    color: #2e77d0;
    width: 24px;
    height: 24px;
`
export const TxtVerified = styled.span`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    margin-left: 6px;
    letter-spacing: 1px;
`
export const ArtistName = styled.span`
    font-size: 96px;    
    font-weight: bold;
    letter-spacing: -2px;
`
export const ArtistPopularity = styled.p`
    font-size: 15px;
    margin-top: 12px;
    margin-bottom: 32px;
    font-weight: 500;
`
export const ArtistControls = styled.div`
    width: 100%;
    padding: 24px 32px;

    display: flex;
    align-items: center;

    z-index: 1;
    position: relative;
`
export const BtnPlayArtist = styled.button`
    width: 56px;
    height: 56px;

    border-radius: 50%;

    background: #1db954;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const IconPlay = styled(PlayArrow)`
    color: #fff;
    width: 38px;
    height: 38px;
`
export const BtnFollow = styled.button`
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;

    padding: 8px 16px;
    margin: 0 32px;

    border: 1px solid rgb(255, 255, 255, 0.4);
    border-radius: 5px;

    &:hover{
        border: 1px solid #fff;
    }
`
export const BtnArtistOptions = styled.button`
`
export const IconEllipsis = styled(DotsHorizontal)`
    width: 32px;
    height: 32px;
`
export const ArtistSections = styled.div`
    width: 100%;

    padding: 0 32px 24px 32px;

    display: flex;
    align-items: center;

    z-index: 1;
    position: relative;

    .--btn-section--active{
        background: #333333;
    }
`
export const BtnArtistSection = styled.button`
    margin: 0 2px;
    padding: 10px 16px;    
    border-radius: 5px;

    color: #fff;
    font-weight: 600;

    cursor: pointer;
}
`
export const ContentContainer = styled.div`
    width: 100%;
    
    position: relative;
    top: -60px;

    position: relative;
`
export const ContentBackgroundFX = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 232px;

    background: rgb(111, 73, 54);
    background-image: linear-gradient(rgba(0,0,0,.6),#121212);

    z-index: 0;
`
export const ArtistHome = styled.section`
    width: 100%;
    height: auto;

    padding: 0 32px;

    position: relative;
`
export const ArtistSection = styled.section`
    width: 100%;

    position: relative;
    padding-top: 24px;
`
export const SectionTitle = styled.h1`
    font-size: 26px;
    font-weight: 700;
    color:#fff;
    margin: 16px 0;
`
export const SectionContent = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;

    padding-bottom: 24px;
`
export const LoadMoreContainer = styled.div`
    width: 100%;
    padding-bottom: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const BtnLoadMore = styled.button`
    display: flex;
    align-items: center;

    color: #fff;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;

    cursor: pointer;

    &:hover{
        transform: scale(1.05);
    }
`
export const IconChevronDown = styled(ChevronThinDown)`
    width: 18px;
    height: 18px;
    color: #fff;

    margin-left: 7px;
`
export const AdditionalStyleContainer = styled.div`
    max-width: 300px;

    display: flex;
    align-items: center;

    padding-left: 8px;

    opacity: 0;

    transition: opacity 0.5s;
`
export const BtnHeaderPlay = styled.button`
    background: #1db954;

    width: 42px;
    height: 42px;

    margin-right: 16px;
    border-radius: 50%;

    &:hover{
        transform: scale(1.05);
    }
    
    #--header--additional--icon-play{
        width: 24px;
        height: 24px;
    }
`
export const HeaderTitle = styled.div`
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    letter-spacing: -1px;
`

export const Related = styled.div`
    width: 100%;
    height: auto;

    position: relative;
    padding: 0 32px;
`
export const RelatedContent = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill,minmax(164px,1fr));
`

export const About = styled.div`
    width: 100%;
    height: auto;

    position: relative;
    padding: 0 32px;

`
export const AboutContent = styled.div`
    width: 100%;
    position: relative;
    
    display: grid;
    grid-template-columns: 65% 35%;
    grid-gap: 12px;
`
export const BioContainer = styled.div`
    width: 100%;

    position: relative;
    padding: 0 42px 0 32px;
`
export const BioTitle = styled.h2`
    color: #fff;
    font-weight: 700;
    font-size: 16px;
`
export const BioP = styled.p`
    font-size: 14px
`
export const ArtistListeners = styled.div`

`
export const ArtistListenersTitle = styled.h2`
    font-weight: 700;
    color: #fff;
    font-size: 16px;
`
export const CityListenersContainer = styled.div`
    margin: 22px 0;
    display: flex;
    flex-direction: column;
`
export const CityListenersName = styled.span`
    color: #fff;
    font-weight: 700;
    font-size: 14px;
`
export const CityListeners = styled.span`
    font-size: 14px;
`