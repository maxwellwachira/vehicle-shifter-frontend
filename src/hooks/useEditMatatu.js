import {useState} from 'react';
//API
import API from '../API';
//Context
import { useAppContext } from '../context/AppContextProvider';
import { useAuthContext } from '../context/AuthContextProvider';
import { useMatatuContext } from '../context/MatatuContextProvider';

export const useEditMatatu = () => {
    const { token } = useAuthContext();
    const { setAPIResponse, toggleModal, setLoading } = useAppContext();
    const { editValues, setEditValues } = useMatatuContext();
   
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const editChange = (e) => {

        setEditValues({ ...editValues, [e.target.name]:capitalizeFirstLetter(e.target.value)});
       
      }

    const editMatatu = async (e, reg) => {
        e.preventDefault();
        setLoading(true);
        const options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body : JSON.stringify(editValues)
        };
        try{
            const response = await API.editMatatu(reg, options);

            setAPIResponse(response);
            toggleModal();
        }catch(error){
            console.log(error);
        }
        setLoading(false);
    }


  return {editValues, setEditValues, editChange, editMatatu};

}
  

