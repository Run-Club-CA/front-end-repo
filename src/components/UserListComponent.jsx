

export default function UserList(){

    let userList = ["random", "users", "that", "needs"];


    return(
        <div>
            {userList.map(user => <li key={user}>{user}</li>)}
        </div>
    )
}