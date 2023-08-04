import { useEffect, useState } from "react";
import { getAllUsers, removeUser, updateUserStatus } from "../services/UserServices";
import { useAuth } from "../contexts/AuthContext";



export default function UserList(){

    const {user} = useAuth();

    const [userList, setUserList] = useState([]);

    const [userChange, setUserChange] = useState();

    useEffect(() => {
        getAllUsers(user)
        .then(data => setUserList(data))
        .catch(error => console.log(error));
    }, [userChange]);

    const changeUserStatus = async (username) => {
        updateUserStatus(username, user)
        .then(data => console.log(data))
        .catch(error => console.log(error))
        setUserChange(!userChange);
    }

    const deleteUserAccount = async (username) => {
        removeUser(username, user)
        .then(data => console.log(data))
        .catch(error => console.log(error))
        setUserChange(!userChange);
    }

    return(
        <div className="flex flex-col justify-between text-white bg-grey-div mx-auto my-10 w-4/5 p-4 gap-y-2 rounded-main-div shadow-mobile-shadow">
            {userList.map(user => <div key={user.userName} className="border-2 border-black p-3">
                <p>Name: {user.firstName} {user.lastName}</p>
                <p>username: {user.userName}</p>
                <p>email: {user.email}</p>
                <p>isTrainer: {user.isTrainer}</p>
                <button onClick={() => {changeUserStatus(user.userName)}}>Edit Profile</button>
                <button onClick={() => {deleteUserAccount(user.userName)}}>Remove Account</button>
                </div>)}
        </div>
    )
}