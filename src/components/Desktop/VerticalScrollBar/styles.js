import styled from 'styled-components'

export const Div = styled.div`
    position: absolute;
    right: 0;
    top:0;
    bottom:0;
    width: 12px;
    height: 100%;

    background: transparent;

    z-index: 2;
`

export const Bar = styled.div`
    z-index: 1;
    background: hsla(0, 0%, 100%, .3);

    transform: translate(0px, 0px);

    width: 100%;
`