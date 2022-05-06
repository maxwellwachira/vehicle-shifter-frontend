//url endpoints
const baseURL = 'https://vehicle-shifter-api.herokuapp.com/';
//const baseURL = 'http://localhost:8000/';
const matatusURL = `${baseURL}matatus/`;
const userURL = `${baseURL}users/me/`;
const loginURL = `${baseURL}auth/token`;
const waitingURL = `${matatusURL}waiting/`;
const doneURL = `${matatusURL}done/`

const apiSettings = {
    fetchMatatus: async (options) => {
        return await (await fetch(matatusURL, options)).json();
    },
    addMatatu: async (options) => {
        return await (await fetch(matatusURL, options)).json();
    },
    deleteMatatu: async (regNo, options) => {
        return await (await fetch(`${matatusURL}${regNo}`, options)).json();
    },
    editMatatu: async (regNo, options) => {
        return await (await fetch(`${matatusURL}${regNo}`, options)).json();
    },
    fetchWaitingMatatus: async () => {
        return await (await fetch(waitingURL)).json();
    },
    addWaitingMatatus: async (options) => {
        return await (await fetch(waitingURL, options)).json();
    },
    removeMatatu: async (regNo, options) => {
        return await (await fetch(`${waitingURL}${regNo}`, options)).json();
    },
    statusDone: async (regNo, options) => {
        return await (await fetch(`${waitingURL}${regNo}`, options)).json();
    },
    fetchDoneMatatus: async () => {
        return await (await fetch(doneURL)).json();
    },
    loginUser: async (loginCredentials) => {
        return await (await fetch(loginURL, {method: 'POST', body: loginCredentials})).json();
    }

}

export default apiSettings; 

