import { createContext, useReducer } from "react";
import { CustomerReducer, initialState } from "../reducers/CustomerReducer";

// Create Customer Context
export const CustomerContext = createContext();

// Customer Provider
export function CustomerProvider({ children }) {
    const [customers, dispatch] = useReducer(CustomerReducer, initialState);

    return (
        <CustomerContext.Provider value={[customers, dispatch]}>
            {children}
        </CustomerContext.Provider>
    );
}
