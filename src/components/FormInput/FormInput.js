import React, {useState} from 'react';
import { Wrapper, Input} from './FormInput.styles';

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocused = (e) => {
      setFocused(true);
    }

  return (
    <Wrapper>
        <label>{label}</label>
        <Input {...inputProps} onChange={onChange}  onBlur={handleFocused} data-focused={focused.toString()} />
        <span>{errorMessage}</span>
    </Wrapper>
  );
}

export default FormInput;