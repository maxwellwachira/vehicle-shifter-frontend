import React from 'react';
//styles
import { Wrapper, Content } from './PageWrapper.styles';

const PageWrapper = ({children}) => (
    <Wrapper>
        <Content>
            {children}
        </Content> 
    </Wrapper>
)


export default PageWrapper;