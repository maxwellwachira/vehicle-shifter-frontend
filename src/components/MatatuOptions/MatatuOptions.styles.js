import styled from "styled-components";

export const Wrapper = styled.div`
    padding:10px 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

   
`;

export const PDFButton = styled.button`
    background-color:var(--gold);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 8px 16px;
    color:black;
    border: none;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
    @media screen and (max-width: 500px){
        padding: 4px 8px;
        margin: 5px;
        font-size: 12px;
    }

`;

export const AddButton = styled(PDFButton)`
    background-color:var(--blue);
    color:white;
`;

export const SearchInput = styled.input`
    padding: 8px 16px;
    border: 2px solid var(--gold);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    :focus {
        outline: none;
        border: 2px solid var(--gold);
    }

    @media screen and (max-width: 500px){
     margin: 5px;
     width: 90px;
    }

`;

export const ViewButton = styled(AddButton)`
     
`;

