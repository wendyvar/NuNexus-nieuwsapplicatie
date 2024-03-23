import React, { useState } from "react";
import './index.css';
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Home from "./components/Home";
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  const [category, setCategory] = useState("home"); // Use "home" as the initial state
  
  return (
    <div className="bg-dark-subtle min-vh-100">
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
