import React, { useState, useMemo } from 'react';
//components
import NoDataFound from '../NoDataFound/NoDataFound';
import Pagination from '../Pagination/Pagination';
//context
import { useAppContext } from '../../context/AppContextProvider';
import { useAuthContext } from '../../context/AuthContextProvider';
import { useMatatuContext } from '../../context/MatatuContextProvider';
//
//API
import API from '../../API';
//styling
import { Table, TableRow } from './StatusData.styles';
//svgs
import checkIcon from '../../images/check.icon.svg';
import crossIcon from '../../images/cancel.png';


let PageSize = 5;

const StatusData = () => {
   
    const {status, setAPIResponse, loading } = useAppContext();
    const {auth, token} = useAuthContext();
    const { waitingList, doneList, dateString, timeString } = useMatatuContext();

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return waitingList.slice(firstPageIndex, lastPageIndex);
      }, [currentPage, waitingList]);

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


    if (status === 'waiting' && waitingList.length === 0 && loading === false){
        return (
            <NoDataFound />
        )
    }

    if (status === 'done' && doneList.length === 0 && loading === false){
        return (
            <NoDataFound />
        )
    }



  return (
      <>
      <Table>
          <tbody>
            {status === 'waiting' ?
                currentTableData.map(({reg, stage, to, driver}, index) => (  
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

      <Pagination
        className="pagination-container"
        currentPage={currentPage}
        totalCount={waitingList.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      </>
   
  );
}

export default StatusData;