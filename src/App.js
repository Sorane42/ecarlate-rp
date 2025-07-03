import React, { useState, useEffect } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Footer from "./components/footer";
import Home from './components/home';
import Join from "./components/join";
import Partners from "./components/Partners";
import Regiment from "./components/Regiment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reglement from "./pages/Reglement";
import ReglementButton from "./components/ReglementButton";

function App() {
   const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Join />
                <ReglementButton />
                <Regiment />
                <Partners />
                <Footer />
              </>
            }
          />
          <Route path="/reglement" element={<Reglement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
