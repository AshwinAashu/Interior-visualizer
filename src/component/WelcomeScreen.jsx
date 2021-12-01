import React from "react";
import { useNavigate } from "react-router-dom";
const WelcomeScreen = () => {
  let navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/createRooms");
  };

  return (
    <div className="welcome-main">
      <div className="title-main">Welcome to Interior Visualizer!</div>
      <div className="title-sub">Visualize your personal space</div>
      <button className="btn-primary" onClick={handleRedirect}>
        Visualize
      </button>
    </div>
  );
};
export default WelcomeScreen;
