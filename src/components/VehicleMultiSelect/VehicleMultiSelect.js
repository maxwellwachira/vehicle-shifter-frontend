import React, {useState} from 'react';
//styling
import { ButtonWrapper, SubmitButton, AddModal, Content } from './VehicleMultiSelect.styles';
//context
import { useAuthContext } from '../../context/AuthContextProvider';
import { useAppContext } from '../../context/AppContextProvider';
import { useMatatuContext } from '../../context/MatatuContextProvider';
//components
import Table from '../Table/Table';
//API
import API from '../../API';


const VehicleMultiSelect = () => {
  const d = new Date();
  let dateString = d.toLocaleDateString();
  let timeString = d.toLocaleTimeString();

  const {token} = useAuthContext();
  const {isWaitingOpen, toggleWaiting} = useAppContext();
  const { matatus } = useMatatuContext();

  let checkedReg = [];
  let waitingData = [];

  const [checkedState, setCheckedState] = useState(
      new Array(matatus.length).fill(false)
  );

  const handleOnChange = (e, position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  
  }
  
  const handleSubmit = async (e) => {
    checkedState.forEach((element, index) => {
      if (element) {
        checkedReg.push(matatus[index]);
      }
    });

    checkedReg.forEach(matatu => {
      const moreData = {
        date: dateString,
        time: timeString,
        status: 'waiting'
      }
      matatu = {...matatu, ...moreData};
      waitingData.push(matatu);
      
    });

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body : JSON.stringify(waitingData)
    };

    try{
        await API.addWaitingMatatus(options); 
       
    }catch(error){
        console.log(error);
    }
    toggleWaiting();
    setCheckedState(new Array(matatus.length).fill(false));
  }
      
  return (
    
    <AddModal
      isOpen={isWaitingOpen}
      onBackgroundClick={toggleWaiting}
      onEscapeKeydown={toggleWaiting}
    >
      <h3>Add Vehicle to Waiting List</h3>
        <Content>
          <Table >
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Reg No</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Bus Fare</th>
                  <th>Driver</th>
  
                </tr>
              </thead>
              <tbody>
                { matatus.map(({reg, stage, to, fare, driver}, index) => (
                <tr key={reg}>
                  <td><input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={reg}
                    value={reg}
                    checked={checkedState[index]}
                    onChange={(e) => handleOnChange(e, index)}
                  /></td>
                  <td>{reg}</td>
                  <td>{stage}</td>
                  <td>{to}</td>
                  <td>{fare} Ksh.</td>
                  <td>{driver}</td>
                 
                </tr>
                ))

                }
              </tbody>
            </Table>
          </Content>
      <ButtonWrapper>
        <SubmitButton onClick={handleSubmit}>Add Vehicle(s)</SubmitButton>
      </ButtonWrapper>    
    </AddModal>
  );
}

export default VehicleMultiSelect;