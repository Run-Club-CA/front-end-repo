import { useEffect, useState } from "react";
import { getAllUsers, removeUser, updateUserStatus } from "../services/UserServices";
import { useAuth } from "../contexts/AuthContext";



export default function UserList(){

    const {user} = useAuth();

    const [userList, setUserList] = useState([]);


    useEffect(() => {
        getAllUsers(user)
        .then(data => setUserList(data))
        .catch(error => console.log(error));
    }, []);

    const changeUserStatus = async (username) => {
        updateUserStatus(username, user)
        .then(data => console.log(data))
        .then(() => getAllUsers(user))
        .then(data => setUserList(data))
        .catch(error => console.log(error))
    }

    const deleteUserAccount = async (username) => {
        removeUser(username, user)
        .then(data => console.log(data))
        .then(() => getAllUsers(user))
        .then(data => setUserList(data))
        .catch(error => console.log(error))
    }

    return(
        <div className="flex flex-col justify-between text-white bg-grey-div mx-auto my-10 w-4/5 p-4 gap-y-2 rounded-main-div shadow-mobile-shadow">
            {userList.map(user => <div key={user.userName} className="flex flex-col justify-center gap-y-2 rounded-md bg-stone-700 shadow-md w-4/5 p-3 mx-auto hover:bg-stone-900">
                <p>Name: {user.firstName} {user.lastName}</p>
                <p>Username: {user.userName}</p>
                <p>Email: {user.email}</p>
                <p>Trainer: {user.isTrainer}</p>
                <button onClick={() => {changeUserStatus(user.userName)}} className="mx-auto bg-green-500 hover:bg-green-700 text-white text-center font-bold py-1 px-2 rounded">Edit Profile</button>
                <button onClick={() => {deleteUserAccount(user.userName)}} className="mx-auto bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Remove Account</button>
                </div>)}
        </div>
    )
}