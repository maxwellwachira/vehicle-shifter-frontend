import Modal from 'styled-react-modal';
import styled from 'styled-components';

export const AddModal = Modal.styled`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gold);
    width: 40%;
    border-radius: 5px;
    

    form {
        width: 80%;

        h3 {
            display: flex;
            align-items: center;
            justify-content: center;
        }
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

    :hover {
        opacity: 0.8;
    }
`;