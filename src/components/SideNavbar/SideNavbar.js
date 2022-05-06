import React, { useState } from 'react';
//styles
import { SideNav, CloseButton, LinkItem } from './SideNavbar.styles';

import { useAppContext } from '../../context/AppContextProvider';
import { useAuthContext } from '../../context/AuthContextProvider';
const SideNavbar = () => {
    const {page} = useAppContext();
    const {logout} = useAuthContext();
    const [navOpen, setNavOpen] = useState(true);

    const toggleSideNav = (e) => {
        setNavOpen(!navOpen);
    }

  return (
    <SideNav className={navOpen ? 'hidden': ''}>
        <CloseButton onClick={toggleSideNav}>close</CloseButton>
        <LinkItem href='/admin/dashboard' className={page === 'dashboard' ? 'active' : ''}>Dashboard</LinkItem>
        <LinkItem href='/admin/matatus' className={page === 'matatus' ? 'active' : ''}>Matatus</LinkItem>
        <LinkItem href='/admin/drivers' className={page === 'drivers' ? 'active' : ''}>Drivers</LinkItem>
        <LinkItem href='/admin/settings' className={page === 'settings' ? 'active' : ''}>Settings</LinkItem>
        <button onClick={logout} className='signout'>Sign Out</button>
    </SideNav>
  );
}

export default SideNavbar;