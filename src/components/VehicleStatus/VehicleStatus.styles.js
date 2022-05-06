import styled from "styled-components";

export const Wrapper = styled.div`

    padding: 10px 20px;
    margin-top:100px;

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: var(--maxWidth);
    margin: 10px auto;
`;

export const StatusButton =  styled.button`
    padding: 10px 15px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 10px;
    cursor: pointer;

    &.active{
        background: var(--gold);
        &:hover{
            opacity: 0.8;
        }
    }

    &:hover{
        background: var(--gold);
    }
`;
