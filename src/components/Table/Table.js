import React from 'react';
import { Wrapper, Content } from './Table.styles';


const Table = ({children}) =>  (
    <Wrapper>
        <Content>
            {children}
        </Content>
    </Wrapper>
)

export default Table;