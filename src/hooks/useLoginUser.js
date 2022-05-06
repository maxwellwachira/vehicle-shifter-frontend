import {useState} from 'react';
import { useCookies } from 'react-cookie';
import { useLocation } from 'react-router-dom'
//API
import API from '../API';

export const useLoginUser = () => {
    const [cookies, setCookie] = useCookies(['token']);
    const location = useLocation();
    const [signInData, setSignInData] = useState({
        username: "",
        password:"", 
     });

    const onChange = (e) => {
        setSignInData({ ...signInData, [e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginCredentials = new FormData();
        loginCredentials.append('username', signInData.username);
        loginCredentials.append('password', signInData.password);

        try{
            const response = await API.loginUser(loginCredentials);
            if (response.message){
                setCookie('token', response.access_token, { path: '/' });
                if(location.pathname === '/admin/sign-in'){
                    window.location.href = '/admin/dashboard';
                } else {
                    window.location.reload();
                }
            }
        }catch (error){
            console.log(error);
        }
    }

    return {signInData, onChange, handleSubmit};
}
