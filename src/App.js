import "./styles.css";
import { useState } from "react";
import WelcomeScreen from "./component/WelcomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRooms from "./component/CreateRooms";
import RoomsDashboard from "./component/RoomsDashboard";
export default function App() {
  const [roomName, setRoomName] = useState();
  return (
    <div className="App">
      <div className="container-main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route
              path="/createRooms"
              element={<CreateRooms setRoomName={setRoomName} />}
            />
            <Route path="/dashboard" element={<RoomsDashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
