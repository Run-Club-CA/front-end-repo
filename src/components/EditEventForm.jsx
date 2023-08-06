import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getTrainers } from "../services/UserServices";
import { updateEvent } from "../services/EventServices";



export default function EditForm(props) {
    let id = props.eventid

    const {user} = useAuth();

    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState(props.name);
    const [location, setLocation] = useState(props.location);
    const [distance, setDistance] = useState(props.distance);
    const [difficulty, setDifficulty] = useState(props.difficulty);
    const [trainer, setTrainer] = useState("");
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        getTrainers(user)
        .then((data) => { 
            if (data.length > 0) {
                let trainerArray = data.map((trainer) => trainer.username);
                setTrainers(trainerArray);
                setTrainer(trainerArray[0])
            }
        }).catch(error => console.log(error))
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        let eventData = {
            name: name,
            date: startDate,
            location: location,
            distance: distance,
            difficulty: difficulty,
            trainer: trainer
        }
        updateEvent(user, id, eventData)
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    return(
        <div>
            <form name="edit-event" className="text-black" onSubmit={handleSubmit}>
                <label className="text-white">Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label className="text-white">Date: </label>
                <ReactDatePicker 
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)} 
                    showTimeSelect
                    timeIntervals={15}
                    dateFormat="Pp" 
                />

                <label className="text-white">Location: </label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

                <label className="text-white">Distance: </label>
                <input type="text" value={distance} onChange={(e) => setDistance(e.target.value)} />

                <label className="text-white">Difficulty: </label>
                <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}/>

                <label className="text-white">Trainer: </label>
                <select 
                    required
                    className="text-black"
                    value={trainer}
                    onChange={(e) => setTrainer(e.target.value)}
                >{trainers.map(trainer => <option key={trainer} value={trainer}>{trainer}</option> )}
                </select>

                <button className="text-white">Submit</button>
            </form>
        </div>
    )
}