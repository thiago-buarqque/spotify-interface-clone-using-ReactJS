import styled from 'styled-components'

//Grid areas
//SN -> Side Nav
//PL -> Player
//MA -> Main

export const Layout = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    display: grid;
    grid-template-areas:
    "SN MA"
    "SN MA"
    "PL PL";
    grid-template-rows: 60px 1fr 90px;
    grid-template-columns: 232px 1fr;
`