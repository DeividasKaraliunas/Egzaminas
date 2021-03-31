require('dotenv').config({ path: 'client/.env' })

const { SERVER_PORT } = process.env;

const requestOptions = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',
    reffererPolicy: 'no-refferer'
};

const domain = SERVER_PORT;

export const getUsers = async (success, failure) => {
    try {
        const response = await fetch(domain + '/users', requestOptions);
        const data = await response.json();
        success(data);
    } catch (message) {
        failure(message);
    }
}

const api = {
    getUsers
};

export default api;
