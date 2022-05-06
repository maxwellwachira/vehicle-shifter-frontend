import styled from "styled-components";

export const Wrapper  = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;
    color: var(--gold);

    .goldbg {
        background: #eac57b;
    }
    
    .bluebg {
        background: #78abed;
    }

    h1 {
       

        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }

`;

export const Content =  styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;

`;

export const DashGridStyle =  styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-gap: 2rem;


  

`;

