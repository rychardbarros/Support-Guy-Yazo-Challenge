import { api } from 'shared/services/api';

export const createSessionAPI = data => api.post('login', data);
