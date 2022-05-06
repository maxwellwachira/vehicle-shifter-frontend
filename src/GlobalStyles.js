import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --blue: #11407D;
        --gold: #D69922;
        --red: #E96363;
        --green: #48B20A;
        --white: #fff;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;

    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        overflow-x: hidden;
        background: var(--blue);
        color: var(--white);

       

        @media screen and (max-width: 500px){
            font-size: var(--fontSmall);
        }
        
    }

`;