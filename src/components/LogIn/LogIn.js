import React from 'react';
import { inputs } from './InputFields';
import FormInput from '../FormInput/FormInput';
//styles
import { Wrapper, Content, ButtonWrapper, SubmitButton } from './LogIn.styles';
//API Context

//hooks
import { useLoginUser } from '../../hooks/useLoginUser';


const LogiIn = () => {
    
    const { signInData, onChange, handleSubmit} = useLoginUser();
  return (
    <Wrapper>
        <Content>
            <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>
                {inputs.map((input)=>(
                    <FormInput 
                        key={input.id} 
                        {...input} 
                        value={signInData[input.name]} 
                        onChange={onChange}
                    />
                ))}
                <ButtonWrapper>
                    <SubmitButton>Sign In</SubmitButton>
                </ButtonWrapper>
            </form>
        </Content>
    </Wrapper>
  );
}

export default LogiIn;