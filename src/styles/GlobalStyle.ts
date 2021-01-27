import { createGlobalStyle } from 'styled-components';

import BgImage from '../images/background.jpg';

const GlobalStyle = createGlobalStyle`

    html {
        height: 100%;
    }

    * {
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-image: url(${BgImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content:center;
    }

`;

export default GlobalStyle;