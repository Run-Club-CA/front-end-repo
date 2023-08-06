import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { useAuth } from "../contexts/AuthContext";
import { getUser } from "../services/UserServices";
import React, { useState } from "react";
import { getUserCompletedEvents } from "../services/EventServices";

// Renders with the user's name, logout and edit profile links
export default function DashBoardComponent(props) {
  const { userDetails, storeUserDetails, removeUserDetails } = useUser();
  const { user, logout, isTrainer, isAdmin } = useAuth();
  const [userCompletedRuns, setuserCompletedRuns] = useState([]);

  useEffect(() => {
    getUserCompletedEvents(user)
      .then((data) => setuserCompletedRuns(data))
      .catch((error) => console.log(error));
  }, []);

  // const userCompletedRunsItems = userCompletedRuns.map((run) => (
  //   <li key={run.id}>
  //     <p>{run.name}</p>
  //     <span>{run.distance}</span>
  //   </li>
  // ));

  let totalRun = userCompletedRuns.reduce(
    (accum, item) => accum + item.distance,
    0
  );

  // useEffect hook to get user details and store them in local storage
  // Uses the supplied JWT that relates to the current user
  useEffect(() => {
    console.log(user);
    getUser(user)
      .then((data) => storeUserDetails(data))
      .catch((error) => console.log(error));
    console.log(userDetails);
  }, []);

  const logoutUser = () => {
    logout();
    removeUserDetails();
  };

  return (
    <div className="text-white bg-grey-div mx-auto my-10 w-mobile-width h-mobile-height p-4 rounded-main-div shadow-mobile-shadow">
      <h1>Welcome! {userDetails.firstName || "Testname"}</h1>
      <p>Total run:{totalRun}km </p>
      <a href="/dashboard/profile">Edit Profile</a>
      <a href="/">Home</a>
      {(isTrainer || isAdmin) && <a href="/dashboard/events">Create Event</a>}
      {isAdmin && <a href="/dashboard/admin/users">Users List</a>}
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}
