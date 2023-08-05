import { useAuth } from "../contexts/AuthContext"
import { registerAttendance, removeAttendance } from "../services/EventServices";

export default function EventCard(props){
    
    const {isTrainer, isAdmin, user} = useAuth();

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
    }

    const handleRemoveAttending = (userJWT, eventID) => {
        let event = {
            eventid: eventID
        }
        removeAttendance(userJWT, event)
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }


    if(isTrainer === true || isAdmin === true){
        return(
            <div className="rounded-md bg-stone-700 shadow-md w-4/5">
            <h1>Name: {name}</h1>
            <p className="text-xs">{date}</p>
            <p className="text-xs">{time}</p>
            <p>Location: {location}</p>
            <p>Distance: {distance}</p>
            <p>Difficulty: {difficulty}</p>
            <p>Trainer: {trainer}</p>
            <button>Edit Event</button>
            <button onClick={() => (handleAttending(user, id))}>Attend</button>
            <button onClick={() => (handleRemoveAttending(user, id))}>Remove Attendance</button>
        </div> 
        )
    } else{
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