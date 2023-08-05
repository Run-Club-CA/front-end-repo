import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "react-use";


const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [firstName, setFirstName] = useLocalStorage("firstName", "");
    const [lastName, setLastName] = useLocalStorage("lastName", "");
    const [userName, setUserName] = useLocalStorage("userName", "");
    const [email, setEmail] = useLocalStorage("email", "");
    // const [isTrainer, setIsTrainer] = useLocalStorage("isTrainer", "");

    const userDetails = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
    }

    // Function to store UserDetails in local storage for access
    const storeUserDetails = (data) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setUserName(data.username);
        setEmail(data.email);
    }

    // Function to remove userDetails from local storage
    const removeUserDetails = () => {
        setFirstName("");
        setLastName("");
        setUserName("");
        setEmail("");
        // setIsTrainer("");
    }

    let value = useMemo(() => ({
        userDetails,
        storeUserDetails,
        removeUserDetails
    }), [userDetails]);


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
    
}

// Custom hook to expose user details, and store/remove functions
export const useUser = () => {
    return useContext(UserContext);
}