
import { createContext, useContext, useMemo } from "react";

import { useLocalStorage } from "react-use";

// Create authenticated Context
const AuthContext = createContext();

// AuthProvider gives what is wrapped around the component 
// Access to the authentication details and functions to login and logout user
export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage("user", null);

    const login = (data) => {
        setUser(data);
    }

    const logout = () => {
        setUser(null);
    }

    let value = useMemo(() => ({
        user,
        login,
        logout
    }),
    [user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    
};


// Custom Auth hook, to expose the user, login and logout functions
export const useAuth = () => {
    return useContext(AuthContext)
}