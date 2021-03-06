import axios from 'axios'

const AXIOS = axios.create({
    baseURL: `/api`,
    timeout: 1000
});


export default {
    hello() {
        return AXIOS.get(`/hello`);
    },
    getUsers() {
        return AXIOS.get(`/users`);
    },
    getUser(userId) {
        return AXIOS.get(`/user/` + userId);
    },
    createUser(lastName, firstName) {
        return AXIOS.post(`/user/` + lastName + '/' + firstName);
    },
    getSecured(user, password) {
        return AXIOS.get(`/secured/`, {
            auth: {
                username: user,
                password: password
            }
        });
    }
}


