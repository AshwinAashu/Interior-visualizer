import { useNavigate } from "react-router-dom";
const CreateRooms = () => {
  let navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/dashboard");
  };
  return (
    <div className="create-rooms-main">
      <div className="create-rooms-container">
        <div className="create-rooms-message">
          Create a room!
          <br />
          <span className="title-sub">
            Create a room or explore your saved rooms
          </span>
          <br />
          <button className="btn-primary create-rooms">
            Create a new room
          </button>
          <br />
          <button className="btn-primary create-rooms" onClick={handleRedirect}>
            Go to your rooms
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateRooms;
