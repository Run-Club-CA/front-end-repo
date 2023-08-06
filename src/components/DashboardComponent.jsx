import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { useAuth } from "../contexts/AuthContext";
import { getUser } from "../services/UserServices";
import React, { useState } from "react";
import { getUserCompletedEvents } from "../services/EventServices";
import { subDays } from "date-fns";

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

  const today = new Date();
  const todayMinus30 = subDays(today, 30)
  const filterByDate = arr => arr.filter(({ date }) => new Date(date) > todayMinus30);
  let filteredRuns = filterByDate(userCompletedRuns);

  let monthlyRun = filteredRuns.reduce(
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
    <div className=" flex flex-col text-white bg-grey-div mx-auto my-10 gap-y-1 w-mobile-width  p-4 rounded-main-div shadow-mobile-shadow">
      <h1 className="mx-auto font-mono">Welcome! {userDetails.firstName || "Testname"}</h1>
      <p className="mx-auto mb-2">Total run: <strong>{totalRun}km </strong>  Monthly run: <strong>{monthlyRun}km</strong></p>
      <div className="mx-auto mb-2">
        <a className="mx-auto bg-blue-500 hover:bg-blue-700 text-xs text-white text-center font-bold py-1 px-2 rounded" href="/">Home</a>
        <a href="/dashboard/profile" className="mx-2 bg-green-500 hover:bg-green-700 text-xs text-white text-center font-bold py-1 px-2 rounded">Edit Profile</a>
        <button className="mx-auto bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-1 px-2 rounded" onClick={logoutUser}>Logout</button>
      </div>
      <div className="mx-auto">
        {(isTrainer || isAdmin) && <a href="/dashboard/events" className=" bg-green-500 hover:bg-green-700 text-xs text-white text-center font-bold py-1 px-2 rounded">Create Event</a>}
        {isAdmin && <a href="/dashboard/admin/users" className="mx-2 bg-green-500 hover:bg-green-700 text-xs text-white text-center font-bold py-1 px-2 rounded">Users List</a>}    
      </div>
    </div>
  );
}
