import Modal from 'styled-react-modal';
import styled from 'styled-components';

export const AddModal = Modal.styled`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--gold);
    color:black;
    width: 60%;
    border-radius: 5px;   

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
    }
    
    @media screen and (max-width: 300px){
        width: 100%;
    }

    @media screen and (max-width: 500px){
        width: 80%;
    }

    @media screen and (max-width: 768px){
        width: 65%;
    }
`;
export const Content = styled.div`
    width: 100%;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin: 25px 0;

`;


export const SubmitButton = styled.button`
   
    width: 100%;
    padding: 8px 16px;
    border:none;
    font-weight:bold;
    background: var(--blue);
    color: var(--white);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    cursor:pointer;

    :hover {
        opacity: 0.8;
    }
`;