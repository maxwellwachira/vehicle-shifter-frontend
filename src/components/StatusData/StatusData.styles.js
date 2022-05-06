import styled from "styled-components";

export const Table = styled.table`
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-collapse: collapse;

`;

export const TableRow = styled.tr`
    background: white;
    color: black;
    border: 12px solid var(--blue);
    &.active {
        background: var(--gold);
    }
    &:hover {
        opacity: 0.8;
    }
    td {
        padding: 10px;

        &.transparent{
            background: var(--blue);
            color: var(--white);
        }

        button {
            background-color:transparent;
            color: black;
            cursor:pointer;
            border: none;
        }

        .icon {
            width:28px;
        }

        
    }
   
    .hidden {
        display:none;
    }

`;

