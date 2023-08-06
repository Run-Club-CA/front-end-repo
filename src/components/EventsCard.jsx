import { toast } from "react-toastify";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext"
import { registerAttendance, removeAttendance } from "../services/EventServices";
import EditForm from "../components/EditEventForm"

export default function EventCard(props){
    
    const {isTrainer, isAdmin, user} = useAuth();

    const [toggleEdit, setToggleEdit] = useState(false); 
    

    let {
        name, location, date, distance, difficulty, 
        trainer, id
    } = props

    // let time = date.split("T")[1]
    // time = time.split("Z")[0]
    // time = time.toLocaleString()
    // console.log(time)
    // date = date.split("T")[0]
    let dateString = new Date(date);
    dateString = dateString.toLocaleDateString()
    
    let timeString = new Date(date)
    timeString = timeString.toLocaleTimeString()
    

    

    const handleAttending = (userJWT, eventID) => {
        let event = {
            eventid: eventID
        }
        registerAttendance(userJWT, event)
        .then(data => console.log(data))
        .catch(error => console.log(error))
        toast.success("Event added");
    }

    const handleRemoveAttending = (userJWT, eventID) => {
        let event = {
            eventid: eventID
        }
        removeAttendance(userJWT, event)
        .then(data => console.log(data))
        .catch(error => console.log(error))
        toast.success("attendance removed")
    }


    // Errors!!! with current function and database set up
    // Was not able to fix this problem before due date of this assignment
    // const removeEvent = (userJWT, eventID) => {
    //     deleteEvent(userJWT, eventID)
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error))
    // }

    const toggleEditMode = () => {
        setToggleEdit(!toggleEdit);
    }


    if((isTrainer === true || isAdmin === true) && (toggleEdit === true)){
        return(
            <div className="flex flex-col justify-center gap-y-2 rounded-md bg-stone-700 shadow-md w-4/5 p-5 mx-auto hover:bg-stone-900">
                <EditForm eventid={id}/>
                {/* <button onClick={() => {removeEvent(user, id)}}>Remove Event</button> */}
                <button onClick={() => {toggleEditMode()}} className="mx-auto bg-green-500 hover:bg-green-700 text-white text-center font-bold py-1 px-2 rounded">Cancel</button>
            </div>
        )
    } else if((isTrainer === true || isAdmin === true) && (toggleEdit === false)){
        return(
            <div className="flex flex-col justify-center items-center gap-y-2 rounded-md bg-stone-700 shadow-md w-4/5 p-5 mx-auto hover:bg-stone-900">
            <h1>Name: {name}</h1>
            <p className="text-xs">{dateString}  {timeString}</p>
            {/* <p className="text-xs">{time}</p> */}
            <p>Location: {location}</p>
            <p>Distance: {distance}</p>
            <p>Difficulty: {difficulty}</p>
            <p>Trainer: {trainer}</p>
            <button onClick={() => {toggleEditMode()}} className="mx-auto bg-green-500 hover:bg-green-700 text-white text-center font-bold py-1 px-2 rounded">Edit Event</button>
            <button onClick={() => (handleAttending(user, id))} className="mx-auto bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-1 px-2 rounded">Attend</button>
            <button onClick={() => (handleRemoveAttending(user, id))} className="mx-auto bg-red-500 hover:bg-red-700 text-white text-center font-bold py-1 px-2 rounded">Remove Attendance</button>
        </div> 
        )
    } else {
        return(
            <div className="flex flex-col justify-center items-center gap-y-2 rounded-md bg-stone-700 shadow-md w-4/5 lg:w-2/5 p-5 mx-auto hover:bg-stone-900">
                <h1>Name: {name}</h1>
                <p className="text-sm">{dateString}  {timeString}</p>
                <p>Location: {location}</p>
                <p>Distance: {distance}</p>
                <p>Difficulty: {difficulty}</p>
                <p>Trainer: {trainer}</p>
                <button onClick={() => (handleAttending(user, id))}  className="mx-auto bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-1 px-2 rounded">Attend</button>
                <button onClick={() => (handleRemoveAttending(user, id))} className="mx-auto bg-red-500 hover:bg-red-700 text-white text-center font-bold py-1 px-2 rounded">Remove Attendance</button>
            </div>
        )
    }
    
}