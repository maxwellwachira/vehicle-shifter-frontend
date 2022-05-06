import React from 'react';
//styles
import { Wrapper, Content } from './Card.styles';

const Card = ({children}) => (
    <Wrapper>
        <Content>
            {children}
        </Content>
    </Wrapper>
)

export default Card;