import React from 'react';
//context
import { useAppContext } from '../../context/AppContextProvider';
//Styles
import { Wrapper, Content, StatusButton } from './VehicleStatus.styles';

const VehicleStatus = () => {
    const {status, toggleStatus} = useAppContext();
    
    const handleWaiting = (e) => {
        if(status === 'done') {
            toggleStatus();
        } 
    }
    const handleDone = (e) => {
        if(status === 'waiting') {
            toggleStatus();
        } 
    }
  return (
    <Wrapper>
        <Content>
            <StatusButton onClick={handleWaiting} className={status === "waiting" ? "active" : ""}>Vehicles In-Waiting</StatusButton>
            <StatusButton onClick={handleDone} className={status === "done" ? "active" : ""}>Vehicle Done</StatusButton>
        </Content>
    </Wrapper>
  );
}

export default VehicleStatus;