const CreateRooms = () => {
  return (
    <div className="create-rooms-main">
      <div className="create-rooms-container">
        <div className="create-rooms-message">
          Create a room!
          <br />
          <span className="title-sub">
            Create a room or explore your saved rooms
          </span>
          <button className="btn-primary create-rooms">
            Create a new room
          </button>
          <button className="btn-primary create-rooms">Go to your rooms</button>
        </div>
      </div>
    </div>
  );
};
export default CreateRooms;
