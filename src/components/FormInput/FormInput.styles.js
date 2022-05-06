import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    margin:15px 0;

    span {
        color:red;
        font-size: 12px;
        display:none;
        margin-top: 5px;
    }

`;

export const Input = styled.input`
    width: 100%;
    padding: 15px 15px;
    border: none;
    border-radius: 10px;
    :focus{
        outline: none;
        border: 1.5px solid var(--blue);
    }
    :invalid[data-focused ="true"]{
        border: 1.5px solid red;
    }

    :invalid[data-focused ="true"] ~ span {
        display: block;
    }
    
`;