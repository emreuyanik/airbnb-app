import React from "react";

export default function Card({ imageSrc, rating, reviews, country, title, price }) {
  return (
    <div className="card">
      <img src={imageSrc} className="card--image" alt="Event Cover" />
      <div className="card--stats">
        <img src="./images/star.png" className="card--star" alt="Star Rating" /> {/* Adjusted path */}
        <span>{rating}</span>
        <span className="gray">({reviews}) • </span>
        <span className="gray">{country}</span>
      </div>
      <p>{title}</p>
      <p><span className="bold">From ${price}</span> / person</p>
    </div>
  );
}
