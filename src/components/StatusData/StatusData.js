import React from 'react';
//context
import { useAppContext } from '../../context/AppContextProvider';
import { useAuthContext } from '../../context/AuthContextProvider';
import { useMatatuContext } from '../../context/MatatuContextProvider';
//API
import API from '../../API';
//styling
import { Table, TableRow } from './StatusData.styles';
//svgs
import checkIcon from '../../images/check.icon.svg';
import crossIcon from '../../images/cancel.png';


const StatusData = () => {
   
    const {status, setAPIResponse } = useAppContext();
    const {auth, token} = useAuthContext();
    const { waitingList, doneList, dateString, timeString} = useMatatuContext();


    const removeMatatu = async (reg) => {
        const confirmation = window.confirm(`Are you sure you want to remove ${reg} from waiting List?`);
        if(!confirmation) return;
        const options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body : JSON.stringify(reg)
        };
        try {
            const response = await API.removeMatatu(reg, options);
            if (response.message === 'success')  setAPIResponse(response);
        }catch (error){
            console.log(error);
        }
    }
    const statusDone = async (reg) => {
        const confirmation = window.confirm(`Are you sure you want to add ${reg} to done List?`);
        if(!confirmation) return;
        const options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body : JSON.stringify({date: dateString, time: timeString})
        };
        try {
            const response = await API.statusDone(reg, options);
            if (response.message === 'success')  setAPIResponse(response);
        }catch (error){
            console.log(error);
        }
    }


    if (status === 'waiting' && waitingList.length === 0){
        return (
            <div>No data Found</div>
        )
    }

    if (status === 'done' && doneList.length === 0){
        return (
            <div>No data Found</div>
        )
    }



  return (
      <Table>
          <tbody>
            {status === 'waiting' ?
                waitingList.map(({reg, stage, to, driver}, index) => (  
                    <TableRow key = {index} className = {index === 0 ? "active" : ""}>
                        <td>{index + 1}.  {reg}</td>
                        <td>{driver}</td>
                        <td>{stage}</td>
                        <td>{to}</td>
                        {auth ? 
                            (<td className="transparent"><button onClick={e => index === 0 ? statusDone(reg) : removeMatatu(reg)}><img src={index === 0? checkIcon : crossIcon} alt="remove" className = "icon"/></button></td>) :
                            <></>
                        }
                    </TableRow>
                )):
                doneList.map(({reg, driver, stage, to, done_time}, index) => (  
                    <TableRow key = {index} className="active">
                        <td>{index + 1}.  {reg}</td>
                        <td>{driver}</td>
                        <td>{stage}</td>
                        <td>{to}</td>
                        <td className="transparent">{done_time}</td>        
                    </TableRow>
                )) 
                }
            </tbody>
      </Table>
   
  );
}

export default StatusData;