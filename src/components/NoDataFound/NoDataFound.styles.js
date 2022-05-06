import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 30px;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    background-color:var(--gold);
    padding: 35px 30px;
    border-radius: 15px;

    @media screen and (max-width: 500px) {
        padding: 35px 10px;
        width:90%;
    }
    @media screen and (max-width: 768px) {
        width:40%;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    color: white;

`;