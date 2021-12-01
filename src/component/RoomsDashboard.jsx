import { useState } from "react";
const RoomsDashboard = () => {
  const [rooms, setRooms] = useState({});

  return (
    <div className="dashboard-main">
      <div className="dashboard-container">
        <div className="dashboard-head">
          <span className="title-main rooms-heading">Rooms</span>
          <button className="btn-primary add-rooms">Add a room</button>
        </div>
        <hr className="head-divider" />
      </div>
    </div>
  );
};
export default RoomsDashboard;
