import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    // @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    html, body{
        width: 100%;
        height: auto;
        background: var(--primary-background);
        padding: 0;
        margin: 0;
        overflow: hidden;
    }

    body{
        color: var(--default_color);
        background-color: black;
    }

    button, input{
        margin: 0;
        padding: 0;
        border: none;
        background: none;
        color: var(--default-color);
        outline: none;
    }

    *{
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        flex-shrink: 1;
    }

    a{
        color: var(--default-color);
        text-decoration: none;
    }

    #root{
        overflow: hidden;
        // height: calc(100vh - 142px);
        height: calc(var(--vh, 1vh) * 100) !important;
    }

    :root{
        --default_color: #b3b3b3;

        --primary-background: #040404;

        --secondary-background: #121212;
    }

`