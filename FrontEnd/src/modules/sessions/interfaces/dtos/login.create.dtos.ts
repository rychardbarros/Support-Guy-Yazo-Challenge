import { ILogin } from '../login.interfaces';
import { AxiosResponse } from 'axios';

export type ICreateLoginDTO = {
  uid: string;
  password: string;
};

export type ICreateLoginAPI = Promise<AxiosResponse<ILogin>>;
