import Home from "./Home/Home"
import Navfile from "./NavBar/Navfile"
import './App.css';
import List from "./components/List";
import React, { useEffect } from 'react';
import AdminLogin from "./Login page/AdminLogin";
import UserLogin from "./Login page/UserLogin";

const App = () => {
    useEffect(() => {
        document.title = "Food Saver";
    }
    , []);
  return (
    <div className="app-root">
      {/* <Navfile />
      <Home /> */}
        <List/>
    </div>
  )
}

export default App;
