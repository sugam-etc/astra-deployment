import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Events from "./components/Events";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />}></Route>
        <Route path="/events" element={<Events />}></Route>
      </Routes>
    </>
  );
}

export default App;
