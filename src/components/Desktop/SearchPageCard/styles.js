import styled from 'styled-components'

export const Div = styled.div`
    width: ${props => props.isLarge ? '344px' : '164px'};
    height: ${props => props.isLarge ? '220px' : '164px'};

    position: relative;

    background: ${props => props.background};
    overflow: hidden;

    border-radius: 8px;

    cursor: pointer;
`
export const ContainerContent = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    background: linear-gradient(0deg,transparent,rgba(0,0,0,.4));
`
export const Title = styled.span`
    position: absolute;
    top: 16px;
    left: 16px;

    font-size: ${props => props.isLarge ? '40px' : '24px'};
    color: #fff;
    font-weight: bold;
    z-index: 1;
`
export const Picture = styled.img`    
    width: ${props => props.isLarge ? '128px' : '100px'};
    height: ${props => props.isLarge ? '128px' : '100px'};

    position: absolute;
    right: 0;
    bottom: 0;

    transform: rotate(25deg) translate(18%,-2%);
`