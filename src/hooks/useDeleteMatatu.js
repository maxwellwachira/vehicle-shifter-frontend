//API
import API from '../API';
//Context
import { useAppContext } from '../context/AppContextProvider';
import { useAuthContext } from '../context/AuthContextProvider';

export const useDeleteMatatu = () => {
    const { setAPIResponse,  setLoading } = useAppContext();
    const { token } = useAuthContext();

    const deleteMatatu = async (reg) => {
        const confirmation = window.confirm("Are you sure you want to delete?");
        if(!confirmation) return;
        const options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body : JSON.stringify(reg)
        };

        setLoading(true);
        try{
            const response = await API.deleteMatatu(reg, options);
            if (response.message === 'success')  setAPIResponse(response);
        }catch(error){
            console.log(error);
        }
        setLoading(false);
    }

    return {deleteMatatu};
 
}
