import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    :root {
        --black: #202020;

    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px)  {
            font-size: 93.75%;
        }

        @media (max-width: 720px)  {
            font-size: 87.5%;
        }
    }

    body {
        max-width: 100%;
        background: #fff; 
        color: #000;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;  
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;