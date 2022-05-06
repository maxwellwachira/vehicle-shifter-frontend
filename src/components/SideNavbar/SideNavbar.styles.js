import styled from "styled-components";

export const SideNav = styled.div`
    height:100%;
    width:200px;
    background-color:#fff;
    position:fixed;
    z-index:1;
    overflow:auto;
    display: block;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    text-align:left;
    padding:8px 16px;
    /* animation:animateleft 0.4s;
    
    @keyframes animateleft{
        from{
            left:-300px;
            opacity:0
        } 
        to{
            left:0;
            opacity:1
        }
    } */

    .hidden {
        display: none; 
    }

    .active {
        color:#000;
        background-color:var(--gold);
    }
    
    .signout{
        padding:8px 16px;
        border:none;
        display:block;
        outline:0;
        width:100%;
        text-align:center;
        white-space:normal;
        float:none;
        text-decoration:none;
        color: #000;
        background-color:white;

        :hover{
            color:#000;
            background-color:var(--gold);
        }
    }

    @media screen and (max-width: 992px) {
        display: none;
    }
`;

export const CloseButton = styled.button`
    padding:8px 16px;
    border:none;
    display:block;
    outline:0;
    width:100%;
    text-align:center;
    white-space:normal;
    float:none;
    background-color:#ccc;
    color:#000;
    font-size:18px;
    cursor:pointer;
 
    @media screen and (min-width: 993px) {
        display: none;
    }
`;
 export const LinkItem = styled.a`
    padding:8px 16px;
    border:none;
    display:block;
    outline:0;
    width:100%;
    text-align:center;
    white-space:normal;
    float:none;
    text-decoration:none;
    color: #000;

  


    :hover{
        color:#000;
        background-color:var(--gold);
    }

   
 `;