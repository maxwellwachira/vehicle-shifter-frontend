import React, { useEffect} from 'react';
//components
import SideNavbar from '../components/SideNavbar/SideNavbar';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import Card from '../components/Card/Card';
import { Grid } from '../components/Grid/Grid';
import Table from '../components/Table/Table';
import MatatuOption from '../components/MatatuOptions/MatatuOption';
import ResponseMessage from '../components/ResponseMessage/ResponseMessage';
import VehicleMultiSelect from '../components/VehicleMultiSelect/VehicleMultiSelect';
//Context Provider
import { useAppContext } from '../context/AppContextProvider';
import { useMatatuContext } from '../context/MatatuContextProvider';
//hooks
import { useDeleteMatatu } from '../hooks/useDeleteMatatu';



const Matatus = () => {
  const { view, setPage, APIResponse, setAPIResponse } = useAppContext();
  const { matatus, editClick } = useMatatuContext();
  const { deleteMatatu } = useDeleteMatatu();
 
 
  useEffect(() => {
    setPage('matatus');
  }, []);

  const responseMessage = () => {
    if(APIResponse.length === 0) return;
    if(APIResponse.message === 'success') {
      setTimeout(() => {
        setAPIResponse('');
        }, 6000);
      return (
        <ResponseMessage message="success">
          <div>success</div>
        </ResponseMessage>
      )
    }

    return (
      <ResponseMessage message="error">
        {APIResponse.message}
      </ResponseMessage>
    )
  }
  
  if (view === 'table'){
    let rowNumber = 1;

    return (
      <>
        <SideNavbar />
          <PageWrapper>  
          <MatatuOption /> 
          <VehicleMultiSelect />
          {responseMessage()}
            <Table >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Reg No</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Bus Fare</th>
                  <th>Driver</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { matatus.map(({reg, stage, to, fare, driver}) => (
                <tr key={reg}>
                  <td>{rowNumber++}</td>
                  <td>{reg}</td>
                  <td>{stage}</td>
                  <td>{to}</td>
                  <td>{fare} Ksh.</td>
                  <td>{driver}</td>
                  <td>
                      <button className='more-button'>More</button>
                      <button className='edit-button' onClick={e => editClick(reg)}>Edit</button>
                      <button className='delete-button' onClick={e => deleteMatatu(reg)}>Delete</button>
                  </td>
                 
                </tr>
                ))

                }
              </tbody>
            </Table>
          </PageWrapper>
      </>
    );
  }

  return (
    <>
      <SideNavbar />
      <PageWrapper>
      <MatatuOption />
      <VehicleMultiSelect />
      {responseMessage()}
        <Grid>
            { matatus.map(({reg, stage, to, fare, driver}) => (
             <Card key={reg}>
               <div className='spacing'>Reg No: {reg}</div>
               <div className='spacing'>From: {stage}</div>
               <div className='spacing'>To: {to}</div>
               <div className='spacing'>Bus Fare: {fare} Ksh.</div>
               <div className='spacing'>Driver: {driver}</div>

               <div className='button-wrapper'>
                 <button className='more-button'>More</button>
                 <button className='edit-button' onClick={e => editClick(reg)}>Edit</button>
                 <button className='delete-button' onClick={e => deleteMatatu(reg)}>Delete</button>
               </div>
               
            
             </Card>
            ))

            }
        </Grid>
      </PageWrapper>
        
     
    </>
    
  );
}

export default Matatus;