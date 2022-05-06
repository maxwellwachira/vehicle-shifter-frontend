import React, {useState, useEffect, createContext, useContext} from 'react';
import { useCookies } from 'react-cookie';
const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [auth, setAuth] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();
    const [token, setToken] =useState(cookies.token);

    const readTokenCookie = () => {
        let token = cookies.token;
        if (token) {
            setAuth(true);
        }
    }

    const logout = (e) => {
        setAuth(false);
        removeCookie('token', {path:'/'});
    }

    useEffect(() => {
        readTokenCookie();
    }, []);

    return (
        <AuthContext.Provider value={{auth, token, setAuth, setToken, logout}}>
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
