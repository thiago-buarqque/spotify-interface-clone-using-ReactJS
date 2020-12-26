import styled from 'styled-components'

export const Div = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    background: #121212;        
`
export const HomeContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px;
    overflow-y: scroll;
`

export const HomeBody = styled.section`
    width: 100%;
    height: auto;

    position: relative;

    background: #121212;    
`

export const Section = styled.div`
    width: 100%;
    min-height: 300px;
    position: relative;

    padding-bottom:24px;
    padding-right: 32px;
    padding-left: 32px;
`
export const SectionBody = styled.div`
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

export const SectionTitle = styled.span`
    font-size: 24px;
    color: #fff;
    text-align: left;
    font-weight: bold;
`
export const SectionDescription = styled.p`
    font-size: 14px;
    text-align: left;

    margin: 8px 0 0 0;
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