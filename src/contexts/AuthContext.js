
import { createContext, useContext, useMemo } from "react";

import { useLocalStorage } from "react-use";

// Create authenticated Context
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage("user", null);

    const login = (data) => {
        setUser(data);
    }

    let value = useMemo(() => ({
        user,
        login
    }),
    [user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    
};

export const useAuth = () => {
    return useContext(AuthContext)
}