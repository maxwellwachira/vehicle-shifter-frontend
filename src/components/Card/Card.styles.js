import styled from "styled-components";

export const Wrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    
`;


export const Content = styled.div`
    padding: 8px 16px;
    color: black;

    .spacing {
        margin:15px;
    }

    .hidden {
        display: none;
    }

 

   .button-wrapper {
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: center;
       margin-bottom:12px;


       button{
           display:block;
           padding: 8px 10px;
           margin:5px;
           background-color: white;
           border: none;
           /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);  */
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
   }


   

   

`;