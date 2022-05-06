import React from 'react';
//components
import SideNavbar from '../components/SideNavbar/SideNavbar';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import { DashGrid } from '../components/Grid/Grid';
import Card from '../components/Card/Card';
//context
import { useMatatuContext } from '../context/MatatuContextProvider';


const AdminDashboard = () => {
  const { matatus , waitingList, doneList, hourString } = useMatatuContext();
  let greetings = '';
  if (hourString <  12) greetings = "Good Morning";
  if (hourString >=  12 && hourString < 17) greetings = "Good Afternoon";
  if (hourString >=  17 && hourString <= 24) greetings = "Good Evening";
  return (
   <>
    <SideNavbar />
    <PageWrapper>

      <DashGrid header={`${greetings} Maxwell Mwangi`}>
        <div className='goldbg'><Card >Total Matatus<br /> <h1 >{matatus.length}</h1></Card></div>
        <div className='goldbg'><Card>Total Drivers<br /> <h1>{0}</h1></Card></div>
        <div className='bluebg'><Card>Matatus Waiting<br /> <h1>{waitingList.length}</h1></Card></div>
        <div className='bluebg'><Card>Matatus Done<br /> <h1>{doneList.length}</h1></Card></div>
      </DashGrid>
    </PageWrapper>
   </>
  );
}

export default AdminDashboard;