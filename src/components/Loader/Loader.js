import React from 'react';
import Spinner from '../../images/Spin.svg';
import { Wrapper} from './Loader.styles';


const Loader = () => {


    return (
        <Wrapper>
            <img src={Spinner} alt='Loading...' />
        </Wrapper>
       
    );
}

export default Loader;