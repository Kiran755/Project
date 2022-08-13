import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Donate from "./components/Donate";
import Register from './components/Register';
import StartUpPage from './components/StartUpPage';
import KnowMorePage from './components/KnowMorePage';
import CreateStartUp from './components/CreateStartUp';
import LandingPage from './components/LandingPage';
import './App.css';
import { Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [loggedIn, setUserLoggedIn] = useState(false);
  console.log(loggedIn);
  return (
    <div className="App">
      <Navbar user={loggedIn} setUser={setUserLoggedIn} />
      <Routes>
        <Route path="/Project" element={<LandingPage />}></Route>
        <Route path="/StartUps" element={<StartUpPage />} />
        <Route path="/KnowMore" element={<KnowMorePage />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Register" element={<Register user={loggedIn} setUser={setUserLoggedIn} />} />
        <Route path="/createStartUpPage" element={<CreateStartUp setUser={setUserLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
