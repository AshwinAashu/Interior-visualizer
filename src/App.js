import "./styles.css";
import WelcomeScreen from "./component/WelcomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRooms from "./component/CreateRooms";
export default function App() {
  return (
    <div className="App">
      <div className="container-main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/createRooms" element={<CreateRooms />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
