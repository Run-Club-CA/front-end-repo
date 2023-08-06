import { toast } from "react-toastify";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext"
import { deleteEvent, registerAttendance, removeAttendance } from "../services/EventServices";
import EditForm from "../components/EditEventForm"

export default function EventCard(props){
    
    const {isTrainer, isAdmin, user} = useAuth();

    const [toggleEdit, setToggleEdit] = useState(false); 
    

    let {
        name, location, date, 
        time, distance, difficulty, 
        trainer, id
    } = props

    date = date.split("T")[0]

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
            <div className="rounded-md bg-stone-700 shadow-md w-4/5">
                <EditForm />
                <button onClick={() => {toggleEditMode()}}>Cancel</button>
            </div>
        )
    } else if((isTrainer === true || isAdmin === true) && (toggleEdit === false)){
        return(
            <div className="rounded-md bg-stone-700 shadow-md w-4/5">
            <h1>Name: {name}</h1>
            <p className="text-xs">{date}</p>
            <p className="text-xs">{time}</p>
            <p>Location: {location}</p>
            <p>Distance: {distance}</p>
            <p>Difficulty: {difficulty}</p>
            <p>Trainer: {trainer}</p>
            <button onClick={() => {toggleEditMode()}}>Edit Event</button>
            <button onClick={() => (handleAttending(user, id))}>Attend</button>
            <button onClick={() => (handleRemoveAttending(user, id))}>Remove Attendance</button>
        </div> 
        )
    } else {
        return(
            <div className="rounded-md bg-stone-700 shadow-md w-4/5">
                <h1>Name: {name}</h1>
                <p className="text-xs">{date}</p>
                <p className="text-xs">{time}</p>
                <p>Location: {location}</p>
                <p>Distance: {distance}</p>
                <p>Difficulty: {difficulty}</p>
                <p>Trainer: {trainer}</p>
                <button onClick={() => (handleAttending(user, id))}>Attend</button>
            <button onClick={() => (handleRemoveAttending(user, id))}>Remove Attendance</button>
            </div>
        )
    }
    
}