import React, { useState, useEffect } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Footer from "./components/footer";
import Home from './components/home';
import Join from "./components/join";
import Partners from "./components/Partners"; // <-- Correction ici

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
        <Home />
        <Join />
        <Partners /> {/* <-- Correction ici */}
        <Footer />
      </div>
  );
}

export default App;
