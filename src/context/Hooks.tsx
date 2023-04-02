import { useContext } from 'react';
import { GlobalContext } from './ContextProvider';

export const useGlobalState = () => useContext(GlobalContext);
