import { useNavigate } from "react-router-dom";
const AddRoomModal = ({ showModal, setRoomName }) => {
  let name;
  //Show modal False
  let navigate = useNavigate();
  if (!showModal) {
    return null;
  }
  const handleName = (e) => {
    name = e.target.value;
  };
  //set roomName
  const handleRoomName = () => {
    setRoomName(name);
    navigate("/dashboard");
  };
  return (
    <div className="new-room-modal">
      <div className="modal-main">
        <div className="modal-head">Create a new room</div>
        <div className="modal-container">
          <span>drop image here</span>
        </div>
        <div className="modal-footer">
          <input
            placeholder="Name your room"
            value={name}
            onChange={handleName}
          />
          <button className="btn-primary" onClick={handleRoomName} required>
            Save Room
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddRoomModal;
