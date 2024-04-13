import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Home from "./components/Home";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';


const App = () => {
  const [category, setCategory] = useState("home"); // Use "home" as the initial state
  
  return (
    <div className="custom-gradient min-vh-100">
      <Navbar setCategory={setCategory} />
      {category === "home" ? (
        <Home />
      ) : (
        <NewsBoard category={category} />
      )}
    </div>
  );
};

export default App;
