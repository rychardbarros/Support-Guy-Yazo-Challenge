import { useState } from 'react';

import { ILogin } from 'modules/sessions/interfaces/login.interfaces';
import { useSideEffects } from 'shared/hooks/useSideEffects';
import { ILoginRepository } from '../ILoginRepository';

export const useLoginRepository = (): ILoginRepository => {
  const [data, setData] = useState<ILogin[]>([]);
  const { create } = useSideEffects<ILogin>(setData);

  return {
    data,
    create,
  };
};
