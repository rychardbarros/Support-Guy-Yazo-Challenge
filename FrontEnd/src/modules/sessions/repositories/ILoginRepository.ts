import { IBaseRepository } from 'shared/interfaces/IBaseRepository';

import { ILogin } from '../interfaces/login.interfaces';

export interface ILoginRepository
  extends IBaseRepository<ILogin> {
  data: ILogin[];
}
