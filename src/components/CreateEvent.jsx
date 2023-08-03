import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

// Use localhost or backend URL for api depending on whats available
let api = "";
switch (process.env.NODE_ENV) {
  case "development":
    api = "http://localhost:5000";
    break;
  case "production":
    api = process.env.REACT_APP_BACKEND_URL;
    break;
  default:
    break;
}

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDistance = this.onChangeDistance.bind(this);
    this.onChangeDifficulty = this.onChangeDifficulty.bind(this);
    this.onChangeTrainer = this.onChangeTrainer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      trainer: "",
      name: "",
      date: new Date(),
      minDate: new Date(),
      trainers: [],
    };
  }

  componentDidMount() {
    axios
      //      .get("http://localhost:5000/users/allTrainers")
      .get(`${api}/users/allTrainers`)
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            trainers: response.data.map((trainer) => trainer.username),
            trainer: response.data[0].username,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeTrainer(e) {
    this.setState({
      trainer: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onChangeDistance(e) {
    this.setState({
      distance: e.target.value,
    });
  }

  onChangeDifficulty(e) {
    this.setState({
      difficulty: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const event = {
      name: this.state.name,
      location: this.state.location,
      date: this.state.date,
      distance: this.state.distance,
      difficulty: this.state.difficulty,
      trainer: this.state.trainer,
    };

    console.log(event);

    axios
      .post(`${api}/events`, event)
      // .post("http://localhost:5000/events", event)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div className="flex justify-center flex-col">
        <form
          onSubmit={this.onSubmit}
          className="text-white bg-grey-div mx-auto my-10 w-mobile-width
         p-4 rounded-main-div shadow-mobile-shadow"
        >
          <h3>Create New Event</h3>
          <div className="form-group ">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control text-black"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Location: </label>
            <input
              type="text"
              required
              className="form-control text-black"
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
          </div>
          <div className="form-group">
            <div>
              <label>Date: </label>
              <DatePicker
                className="form-control text-black"
                selected={this.state.date}
                onChange={this.onChangeDate}
                minDate={this.state.minDate}
                maxDate={addDays(new Date(this.state.minDate), 90)}
                showTimeSelect
                timeIntervals={15}
                dateFormat="Pp"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Distance (km): </label>
            <input
              type="text"
              required
              className="form-control text-black"
              value={this.state.distance}
              onChange={this.onChangeDistance}
            />
          </div>
          <div className="form-group">
            <label>Difficulty: </label>
            <input
              type="text"
              required
              className="form-control text-black"
              value={this.state.difficulty}
              onChange={this.onChangeDifficulty}
            />
          </div>
          <div className="form-group">
            <label>Trainer: </label>
            <select
              ref="userInput"
              required
              className="form-control text-black"
              value={this.state.trainer}
              onChange={this.onChangeTrainer}
            >
              {this.state.trainers.map(function (trainer) {
                return (
                  <option key={trainer} value={trainer}>
                    {trainer}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Event"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
