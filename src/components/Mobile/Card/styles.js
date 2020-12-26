import styled from 'styled-components';

export const Div = styled.div`
    width: auto;
    height: auto;

    ${
    props => props.isCardCollection ? `margin: 0;`
    : `
    margin: 0 8px 0 -8px;

    padding: 0 16px 0 0;

    &:first-child{
        margin: 0 8px 0 16px;
        padding: 0 16px 0 0;
    }
    `
    }
    
    text-align: center;  
    
    ${
        props => props.additionalStyle ? props.additionalStyle : ''
    }
`
export const CardImageContainer = styled.div`
    width: ${props => props.imgSize ? props.imgSize : '134px'};
    height: ${props => props.imgSize ? props.imgSize : '134px'};

    background: ${props => props.cardBackground};
    background-position: center;
    background-size: cover;

    ${
    props => props.isArtist ? `border-radius: 50%` : ``
    }
`
export const CardTitle = styled.div`
    color: #fff;
    font-size: 13px;
    font-weight: bold;

    padding: 8px 0 0;

    height: 48px;
`