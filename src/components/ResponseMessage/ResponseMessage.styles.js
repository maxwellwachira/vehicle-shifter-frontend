import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 70px;
    right: 10px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    color: white;
    font-weight: bold;
    z-index: 100;
    width:200px;
    height: 100px;
    border-radius:5px;

    .error {
        background-color: var(--red);
    }

    .success {
        background-color: var(--green);
    }

    button {
        position:absolute;
        top: 0;
        right: 0;
        background-color: transparent;
        border: none;
        font-size: 25px;
        cursor: pointer;
    }

    
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    animation-duration: 2s;
    animation-name: animatetext;
    animation-iteration-count: infinite;
    
    @keyframes animatetext{
        from{
           font-size: 17px;
        } 
        to{
            font-size: 14px;
        }
    }

   

`;