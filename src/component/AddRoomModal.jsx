const AddRoomModal = ({ setRoomName, showModal }) => {
  //Show modal False
  if (!showModal) {
    return null;
  }
  //set roomName
  const handleRoomName = (e) => {
    let name = e.target.value();
    setRoomName(name);
  };
  return (
    <div className="new-room-modal">
      <div className="modal-main">
        <div className="modal-head">Create a new room</div>
        <div className="modal-container">drop image here</div>
        <div className="modal-footer">
          <input placeholder="Name your room" value={handleRoomName} />
        </div>
      </div>
    </div>
  );
};
export default AddRoomModal;
