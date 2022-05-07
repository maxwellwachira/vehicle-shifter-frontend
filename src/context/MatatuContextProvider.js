import React, { useState, useEffect, createContext, useContext } from 'react';

//API
import API from '../API';
//Contex
import { useAuthContext } from './AuthContextProvider';
import { useAppContext } from './AppContextProvider';

const MatatuContext = createContext();

const d = new Date();
let dateString = d.toLocaleDateString();
let timeString = d.toLocaleTimeString();
let hourString = d.getHours();

export const MatatuContextProvider = ({children}) => {
    const { setLoading, APIResponse, setIndex, setAction, toggleModal } = useAppContext();
    const { auth, token } = useAuthContext();
    const [matatus, setMatatus] = useState([]);
    const [waitingList, setWaitingList] = useState([]);
    const [doneList, setDoneList] = useState ([]);
    const [searchTerm, setSearchTerm] = useState('');
     

    const initialValues = {
        reg: "",
        to:"",
        stage: "",
        fare: "",
        driver: "",
    };
    
    const [editValues, setEditValues] = useState(initialValues);

    const setMatatuAction = (matatuIndex) => {
        const {reg, to, stage, fare, driver } = matatus[matatuIndex];
        const matatuValues = {
            reg: reg,
            to: to,
            stage: stage,
            fare: fare,
            driver: driver,
        };
        setEditValues(matatuValues);
    }

    const searchChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }


    const editClick = (reg) => {
        setAction('edit');
        const matatuIndex = matatus.findIndex((matatu) => {
            return matatu.reg === reg
        })
        setIndex(matatuIndex);
        setMatatuAction(matatuIndex);
        toggleModal();

    }

    const fetchMatatus = async () => {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
        };

        try{
            const matatuData = await API.fetchMatatus(options);
            setMatatus(matatuData);
        }catch (error) {
            console.log(error);
        }
        
    }

   
    const fetchWaitingMatatus = async () => {
        
        try {
            const waitingData = await API.fetchWaitingMatatus();
            setWaitingList(waitingData);
        } catch (error){
            console.log(error);
        }
       
    }

    const fetchDoneMatatus = async () => {
        
        try {
            const doneData = await API.fetchDoneMatatus();
            setDoneList(doneData);
        } catch (error){
            console.log(error);
        }
    }


    useEffect(() => {
        setLoading(true);
        if(auth) fetchMatatus();
        fetchWaitingMatatus();
        fetchDoneMatatus();
        setLoading(false);
    }, [APIResponse, auth]);




  return (
    <MatatuContext.Provider value={{matatus, dateString, timeString, waitingList, doneList, hourString, editValues, searchTerm, setEditValues, editClick, searchChange}}>
        {children}
    </MatatuContext.Provider>
  )
}

export const useMatatuContext = () => useContext(MatatuContext);
