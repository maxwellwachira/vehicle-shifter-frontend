import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    width:38%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background: var(--gold);

    h3 {
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 500px) {
        width:90%;
    }
    @media screen and (max-width: 768px) {
        width:60%;
    }
`;

export const Content = styled.div`
    margin:15px;
    padding-top: 25px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin: 25px 0;

`;


export const SubmitButton = styled.button`
   
    width: 40%;
    padding: 10px;
    border:none;
    font-weight:bold;
    background: var(--blue);
    color: var(--white);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    :hover {
        opacity: 0.8;
    }
`;