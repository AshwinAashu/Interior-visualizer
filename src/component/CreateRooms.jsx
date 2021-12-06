import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddRoomModal from "./AddRoomModal";
const CreateRooms = ({ setRoomName }) => {
  //Room Modal
  const [showModal, setShowModal] = useState();
  const handleModal = () => {
    setShowModal(true);
  };

  //navigation
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
          <button className="btn-primary create-rooms" onClick={handleModal}>
            Create a new room
            <AddRoomModal showModal={showModal} setRoomName={setRoomName} />
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
