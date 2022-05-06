import React, {useState, createContext, useContext} from 'react';

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [status, setStatus] = useState('waiting');
    const [view, setView] = useState('card');
    const [page, setPage] = useState('dashboard');
    const [APIResponse, setAPIResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [action, setAction] = useState('add');
    const [isWaitingOpen, setIsOpenWaiting] = useState(false);
    const [index, setIndex] = useState(0);


    const toggleModal = (e) => {
        setIsOpen(!isOpen);
        if(action === 'edit') setAction('add');
    }

    const toggleWaiting = (e) => {
        setIsOpenWaiting(!isWaitingOpen);
    }

    const toggleView = () => {
        view === 'card' ? setView('table'): setView('card');
     }

    
    const toggleStatus = () => {
        status === 'waiting' ? setStatus('done') : setStatus('waiting');
    }

    return (
        <AppContext.Provider value = {{page, action, loading, index, status, view, isOpen, APIResponse, isWaitingOpen, toggleStatus, toggleView, setPage, toggleModal, setAPIResponse, setLoading, setAction, setIndex, toggleWaiting}}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);