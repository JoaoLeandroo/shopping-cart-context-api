"use client"

import { useState, createContext } from 'react';

export const UserContext = createContext({});

function UserProvider({ children }) {
    const [cartCounter, setCartCounter] = useState(0);

    return(
        <UserContext.Provider value={{cartCounter, setCartCounter}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
