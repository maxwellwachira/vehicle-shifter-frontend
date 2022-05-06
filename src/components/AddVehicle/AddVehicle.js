import React, { useEffect } from 'react';
//input fields
import { inputs } from './InputFields';
//components
import FormInput from '../FormInput/FormInput';
//hooks
import { useAddVehicle } from '../../hooks/useAddVehicle';
import { useEditMatatu } from '../../hooks/useEditMatatu';
//context
import { useAppContext } from '../../context/AppContextProvider';
import { useMatatuContext } from '../../context/MatatuContextProvider';
//styles
import { ButtonWrapper, SubmitButton, AddModal } from './AddVehicle.styles';





const AddVehicle = () => {
  const { isOpen, toggleModal, action, index} = useAppContext();
  const {values, onChange, handleSubmit} = useAddVehicle();
  const { matatus } = useMatatuContext();
  const { editValues, editChange, editMatatu } = useEditMatatu();



  return (
    <AddModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
    >
       {action === 'add' ? 
        ( <form onSubmit={handleSubmit}>
              <h3>Add New Vehicle</h3>
              {inputs.map((input)=>(
                  <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
              ))}
              <ButtonWrapper>
                <SubmitButton>Add Vehicle</SubmitButton>
              </ButtonWrapper>    
          </form>): 

        ( <form onSubmit={e => editMatatu(e, `${matatus[index].reg}`)}>
              <h3>Edit Vehicle Details</h3>
            
              {inputs.map((input)=>(
                <FormInput key={input.id} {...input} value={editValues[input.name]} onChange={e => editChange(e)}/>
                ))}

              <ButtonWrapper>
                <SubmitButton>Edit Vehicle</SubmitButton>
              </ButtonWrapper>    
          </form>)}
       
    </AddModal>
  );
}

export default AddVehicle;