import React from 'react';
//Modal Provider
import { ModalProvider } from 'styled-react-modal';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//auth context
import { useAuthContext } from './context/AuthContextProvider';
import { useAppContext } from './context/AppContextProvider';
//components
import { GlobalStyles } from './GlobalStyles';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
//Pages
import Home from './pages/Home';
import AddVehicle from './pages/AddVehicle';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import AdminDashboard from './pages/AdminDashboard';
import Matatus from './pages/Matatus';

function App() {
  const { auth } = useAuthContext();
  const { loading } = useAppContext();

  if(loading){
    return (
      <Loader />
    );
  }

  return (
    <ModalProvider>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
            <Route path="/"  element = { <Home /> } />
            <Route path="/admin/sign-in"  element = { <SignIn /> } />
            <Route path="/admin/dashboard"  element = { auth ? <AdminDashboard /> : <SignIn /> } />
            <Route path="/admin/matatus"  element = { auth ? <Matatus /> : <SignIn /> } />
            <Route path="/add-vehicle"  element = { auth ? <AddVehicle /> : <SignIn /> } />
            <Route path="/*"  element = { <NotFound  /> } />
          </Routes>
      </Router>
    </ModalProvider>
   
  );
}

export default App;
