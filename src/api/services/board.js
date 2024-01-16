import { AXIOS_INSTANCE } from '../api.js';




const BASE_URL = 'TaskBoard';

export const BoardService = {
   async getProjects(token) {
      return await AXIOS_INSTANCE.get(`/${BASE_URL}/taskBoard`, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
   }
};