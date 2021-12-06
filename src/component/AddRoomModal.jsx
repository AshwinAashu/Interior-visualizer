import { useNavigate } from "react-router-dom";
const AddRoomModal = ({ setRoomName, showModal }) => {
  let name;
  //Show modal False
  let navigate = useNavigate();
  if (!showModal) {
    return null;
  }
  //set roomName
  const handleRoomName = (e) => {
    name = e.target.value();
  };
  return (
    <div className="new-room-modal">
      <div className="modal-main">
        <div className="modal-head">Create a new room</div>
        <div className="modal-container">
          <span>drop image here</span>
        </div>
        <div className="modal-footer">
          <input placeholder="Name your room" value={handleRoomName} />
          <button
            className="btn-primary"
            onSubmit={() => {
              setRoomName(name);
              navigate("/dashboard");
            }}
          >
            Save Room
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddRoomModal;
