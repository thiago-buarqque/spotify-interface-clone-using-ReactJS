import styled from 'styled-components';

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Div = styled.div`
    width: 100%;
    height: 60%;

    background-image: linear-gradient(48.366deg, rgb(80, 155, 245), rgb(175, 40, 150));

    position: absolute;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ::after{
        background-image: linear-gradient(rgba(18, 18, 18, 0), rgb(18, 18, 18));
        content: "";
        height: 100%;
        left: 0px;
        position: absolute;
        top: 0px;
        width: 100%;
    }
`
export const SearchBody = styled.div`    
    width: 100%;
    height: 100%;

    position: absolute;
    top:0;

    padding: 0 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    text-align: center;

    z-index: 2;
`
export const Greetings = styled.span`
    font-size: 2.2em;
    color: #fff;
    font-weight: bold;
`
export const SearchDescription = styled.span`
    color: #fff;
    font-weight: bold;
    max-width: 90%;
    margin: 0 auto;
    line-height: 1.6em;
    margin-top: 10px;
`
export const BtnOpenSearchPage = styled.button`
    width: 100%;
    height: 48px;

    background: #fff;

    border-radius: 4px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #333333;

    margin-top: 30px;    
`
export const SearchSpan = styled.span`
    margin-left: 8px;
    color: black;
    font-weight: bold;

    font-size: 14px;
`