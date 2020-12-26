import styled from 'styled-components'

export const Layout = styled.div`
    height: calc(100vh - 49px);
    height: calc(var(--vh, 1vh) * 100) !important;
    max-height: 100vh;
    width: 100%;
    position: relative;

    display: grid;
    grid-template-rows: 1fr 48px 48px;
`