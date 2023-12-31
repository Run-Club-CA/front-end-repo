import { DeleteButton } from "../components/DeleteButton";
import SingleUser from "../components/SingleUserComponent";
import UserForm from "../components/UserForm";


export default function ProfilePage(props){

    return(
        <div className="flex flex-col justify-between text-white bg-grey-div mx-auto my-10 w-4/5 p-4 rounded-main-div shadow-mobile-shadow">
            <SingleUser />
            <UserForm />
            <DeleteButton />
        </div>
    )
}