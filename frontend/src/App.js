import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
   const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
        <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />

        {/* Sections */}
      </div>
  );
}

export default App;
