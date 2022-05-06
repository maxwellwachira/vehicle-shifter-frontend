import {useState} from 'react';
//API
import API from '../API';
//Context
import { useAppContext } from '../context/AppContextProvider';
import { useAuthContext } from '../context/AuthContextProvider';

export const useAddVehicle = () => {
    const { token } = useAuthContext();
    const { setAPIResponse, toggleModal, setLoading } = useAppContext();
    const initialValues = {
        reg: "",
        to:"",
        stage: "",
        fare: "",
        driver: "",
    };

    
    const [values, setValues] = useState(initialValues);

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]:capitalizeFirstLetter(e.target.value)});
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
               'Authorization': `Bearer ${token}`,
            },
            body : JSON.stringify(values)
        };

        try{
            const response = await API.addMatatu(options);
            if (response.message === 'success') setValues(initialValues);
            setAPIResponse(response);
            toggleModal();
        }catch(error){
            console.log(error);
        }
        setLoading(false);
    }


  return {values, onChange, handleSubmit};
}

