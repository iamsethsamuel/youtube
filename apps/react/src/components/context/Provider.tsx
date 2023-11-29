import React, {createContext} from 'react';

export const Context = createContext<{
  numb: number;
  randomize: () => void;
}>({
  numb: 0,
  randomize: function (): void {
    throw new Error('Function not implemented.');
  },
});

export const Provider = Context.Provider