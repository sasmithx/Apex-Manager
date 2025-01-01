import { createContext, useReducer } from "react";
import { ItemReducer, initialItemState } from "../reducers/ItemReducer";

// Create Item Context
export const ItemContext = createContext();

// Item Provider
export function ItemProvider({ children }) {
    const [items, idispatch] = useReducer(ItemReducer, initialItemState);

    return (
        <ItemContext.Provider value={[items, idispatch]}>
            {children}
        </ItemContext.Provider>
    );
}
