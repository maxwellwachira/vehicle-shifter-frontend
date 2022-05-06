import React from 'react';
//styles
import { Wrapper, Content } from './ResponseMessage.styles';
//context
import { useAppContext } from '../../context/AppContextProvider';

const ResponseMessage = ({message, children}) => {
    const { setResponse } = useAppContext();
    return(
        <Wrapper >
            <button onClick={e => setResponse('')}> &#10005;</button>
            <Content className={message === 'success' ? 'success' : 'error'}>
                {children}
            </Content>
        </Wrapper>
    );
}

export default ResponseMessage;
