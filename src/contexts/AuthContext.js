
import { createContext, useContext, useMemo } from "react";
import { toast } from "react-toastify";

import { useLocalStorage } from "react-use";

// Create authenticated Context
const AuthContext = createContext();

// AuthProvider gives what is wrapped around the component 
// Access to the authentication details and functions to login and logout user
export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [isAdmin, setIsAdmin] = useLocalStorage("isAdmin", false);
    const [isTrainer, setIsTrainer] = useLocalStorage("isTrainer", false);

    const login = (data) => {
        if(!data.token){
            toast.error("Error occurred please try again")
        }
        setUser(data.token);
        setIsTrainer(data.trainer);
        setIsAdmin(data.admin);
    }

    const changeStatus = (data) => {
        setIsTrainer(data);
    }

    const logout = () => {
        setUser(null);
    }

    let value = useMemo(() => ({
        user,
        isAdmin,
        isTrainer,
        login,
        logout,
        changeStatus
    }),
    [user, isTrainer, isAdmin]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    
};


// Custom Auth hook, to expose the user, login and logout functions
export const useAuth = () => {
    return useContext(AuthContext)
}