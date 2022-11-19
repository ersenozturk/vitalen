import { useContext } from "react";
import {AppContext} from '../context/AppContext'

//! consume context via custom hook
export const useAppContext = () => useContext(AppContext);