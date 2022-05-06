import styled from "styled-components";


export const Wrapper = styled.div`
     margin:15px;

     @media screen and (max-width: 500px) {
        margin:0;
    }
`;

export const Content = styled.table`
    width: 80%;
    margin:0 auto;
    border: 1px solid var(--blue);
    border-collapse: collapse;

    thead{
        background: var(--blue);
        color: var(--gold);
        text-align:left;
        
    }

    tbody{
        background: white;
        color: black;
    }

    tr, td {
        padding: 5px;
        border: 1px solid var(--blue);
        border-collapse: collapse;
    }

    button{
           margin:0 5px;
           background-color: white;
           border: none;
           cursor:pointer; 

       }

       .more-button {
            color:var(--blue); 
            border: 2px solid var(--blue); 

            :hover {
                color: white;
                background-color: var(--blue);
            }
        }

        .edit-button {
            color:var(--gold); 
            border: 2px solid var(--gold); 

            :hover {
                color: white;
                background-color: var(--gold);
            }
        }
        .delete-button {
            color: red; 
            border: 2px solid red; 

            :hover {
                color: white;
                background-color:red;
            }
        }

    @media screen and (max-width: 500px) {
        width: 100%;
    }

`;