import React, {useState, useEffect, createContext, useContext} from 'react';

import { useCookies } from 'react-cookie';
import API from '../API';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [auth, setAuth] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();
    const [token, setToken] = useState(cookies.token);
    const [userMe, setUserMe] = useState({});

    const readTokenCookie = () => {
        let token = cookies.token;
        if (token) {
            setAuth(true);
        }
    }

    const readUserMe = async () => {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
        };

        try{
            const user = await API.userMe(options);
            setUserMe(user[0]);

        } catch (error) {
            console.log(error);
        }
    }

    const logout = (e) => {
        setAuth(false);
        removeCookie('token', {path:'/'});
    }

    useEffect(() => {
        readTokenCookie();
        if(auth)  readUserMe();   
    }, [auth]);

    return (
        <AuthContext.Provider value={{auth, token, userMe, setAuth, setToken, logout}}>
            {children}
        </AuthContext.Provider>
    );
}


export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error('AuthContext must be used with AuthContextProvider!');
    return context;
};
