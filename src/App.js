import React from "react";

/* Components */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

/* Styles */
import "./style.css"

const App = () => {
  const CardData = data.map(details => {
    return <Card
      key={details.id}
      {...details}
      />
  })

  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <div className="main--card">
          {CardData}
        </div>
    </div>
  );
}

export default App
