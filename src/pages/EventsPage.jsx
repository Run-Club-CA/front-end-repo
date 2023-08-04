import CreateEvent from "../components/CreateEvent";
import { useAuth } from "../contexts/AuthContext";

export default function EventsPage() {
  const { isTrainer } = useAuth();
  const { isAdmin } = useAuth();

  if (isTrainer === true || isAdmin === true) {
    return (
      <div>
        <h1>Events </h1>
        <CreateEvent />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Events </h1>
      </div>
    );
  }
}
