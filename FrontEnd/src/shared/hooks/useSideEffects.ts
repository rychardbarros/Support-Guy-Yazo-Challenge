import { useCallback, Dispatch, SetStateAction } from 'react';

type State = {
  id: string | number;
};

const useSideEffects = <T extends State>(
  setState: Dispatch<SetStateAction<T[]>>
) => {
  const orderOne = useCallback(
    (id, order) => {
      setState(oldState => {
        const foundIndex = oldState.findIndex(oldState => oldState.id === id);

        if (foundIndex !== -1) {
          const filterdArray = oldState.filter(oldState => oldState.id !== id);
          filterdArray.splice(order, 0, oldState[foundIndex]);
          return filterdArray;
        }

        return [...oldState];
      });
    },
    [setState]
  );

  const create = useCallback(
    state => {
      setState((oldState: T[]) => [state, ...oldState]);
    },
    [setState]
  );

  const appendList = useCallback(
    (list: T[]) => {
      setState(oldState => [...oldState, ...list]);
    },
    [setState]
  );

  return {
    create,
    appendList,
    orderOne,
  };
};

export { useSideEffects };
