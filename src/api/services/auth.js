import { AXIOS_INSTANCE } from '../api.js';




const BASE_URL = 'Account';

export const authService = {
    async registration({ username, password, email }) {
        return await AXIOS_INSTANCE.post(`/${BASE_URL}/registration`, {
            username,
            password,
            email
        });
    },
    async authorization({ username, password }) {
        return await AXIOS_INSTANCE.post(`/${BASE_URL}/authorization`, {
            username,
            password
        });
    }
};

export default authService;