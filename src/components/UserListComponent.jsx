import { useEffect, useState } from "react";
import { getAllUsers } from "../services/UserServices";
import { useAuth } from "../contexts/AuthContext";


export default function UserList(){

    const {user} = useAuth();

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getAllUsers(user)
        .then(data => setUserList(data))
        .catch(error => console.log(error));
        console.log(userList);
    }, [userList]);

    return(
        <div>
            {userList.map(user => <div key={user._id}>
                <p>Name: {user.firstName} {user.lastName}</p>
                <p>username: {user.username}</p>
                <p>email: {user.email}</p>
                <p>isTrainer: {user.isTrainer}</p>
                </div>)}
        </div>
    )
}