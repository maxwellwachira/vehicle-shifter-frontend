import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 20px;
    position:fixed;
    left: 0;
    top:0;
    right:0;
    background: var(--blue);
    z-index:10;
`;

export const Content = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    margin: 0 auto;
   

    .sigin{
        background-color:var(--gold);
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 8px 16px;
        cursor: pointer;

        :hover {
            opacity: 0.8;
        }
    
        @media screen and (max-width: 500px){
            padding: 4px 8px;
            margin: 5px;
            font-size: 12px;
        }
    }

    a:link { text-decoration: none;  color:black;}
    a:visited { text-decoration: none;  color:black;}
    a:hover { text-decoration: none;  color:black;}
    a:active { text-decoration: none;  color:black;}
`;

export const Logo = styled.img`
    height: 100px;
    width: 110px;

    @media screen and (max-width: 500px){
        width: 90px;
        height: 80px
    }

`;

export const AddButton = styled.button`
    display:flex;
    flex-direction: column;
    align-items:center;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    
    img{
        width:50px;
        height:50px;
    }

`;