// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

function App() {
  const selectedData = data.filter(item => item.title === "Life Lessons with Katie Zaferes" || item.title === "Group Mountain Biking" || item.title === "Learn Wedding Photography");

  const cards = selectedData.map(item => (
    <Card
      key={item.id}
      imageSrc={`/images/${item.coverImg}`}
      rating={item.stats.rating}
      reviews={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
    />
  ));

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-container">
        {cards}
      </section>
    </div>
  );
}

export default App;
