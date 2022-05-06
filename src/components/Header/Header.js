import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
//components
import AddVehicle from '../AddVehicle/AddVehicle';
//context
import { useAppContext } from '../../context/AppContextProvider';
import { useAuthContext } from '../../context/AuthContextProvider';
//svg
import Add from '../../images/add.svg';
import Dashboard from '../../images/dashboard.svg';
//styles
import { Wrapper, Content, AddButton, Logo } from './Header.styles';
//logo
import Image from '../../images/logo.png';
const Header = () => {
  const {toggleModal} = useAppContext();
  const { auth } =useAuthContext();
  const location = useLocation();
  if(location.pathname != '/'){
    return (
      <>
        <Wrapper>
            <Content>
                <Link to = '/'>
                      <Logo src={Image} alt = "Logo" />
                </Link> 
                <span>Vehicle Shifter Schedule</span>
                {auth? 
                (
                  <AddButton onClick={toggleModal}>
                  <img src={Add} />
                  Add Vehicle
                  </AddButton>
                ):
                (
                  <div className='sigin'>
                    <a href = '/admin/sign-in'>Sign in</a>
                  </div>
                )
              }
                
            </Content>
        </Wrapper>
        <AddVehicle />
    </>
    );
  }

  return (
    <>
        <Wrapper>
            <Content>
                <Link to = '/'>
                      <Logo src={Image} alt = "Logo" />
                </Link> 
                <span>Vehicle Shifter Schedule</span>
                {auth? 
                (
                  <div className='sigin'>
                    <a href = '/admin/dashboard'>Dashboard</a>
                  </div>
                ) : 
                (
                  <div className='sigin'>
                    <a href = '/admin/sign-in'>Sign in</a>
                  </div>
                )
              }
                
            </Content>
        </Wrapper>
        <AddVehicle />
    </>
  );

}

export default Header;