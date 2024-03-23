import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Home from "./components/Home";

const App = () => {
  const [category, setCategory] = useState("home"); // Use "home" as the initial state
  
  return (
    <div>
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
