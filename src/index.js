import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { AuthContextProvider } from './context/AuthContextProvider';
import { AppContextProvider } from './context/AppContextProvider';
import { MatatuContextProvider } from './context/MatatuContextProvider';
import App from './App';

ReactDOM.render(
  <CookiesProvider>
    <AuthContextProvider>
      <AppContextProvider>
        <MatatuContextProvider>
          <App />
        </MatatuContextProvider>
      </AppContextProvider>
    </AuthContextProvider> 
   </ CookiesProvider>
   ,
    
  document.getElementById('root')
);