import React from "react";
import "../Sections/About/about.css";
import ImageChefs from "../../assets/Mario and Adrian b.png"
import ImageRestaurant from "../../assets/restaurant.png";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
          Nestled in the heart of bustling Chicago, Little Lemon is where modern
          flair meets cozy nostalgia. Our diverse, artisanal menu, featuring
          delectable bruschettas, succulent burgers, and refreshing Greek
          salads, is a testament to our belief that food is an art. Crafted by
          expert chefs with locally-sourced ingredients, our dishes not only
          delight the palate but nourish the soul. Whether you're seeking a
          romantic dinner, a family meal, or a relaxed atmosphere with friends,
          Little Lemon is your ideal culinary destination. Find us in the heart
          of Chicago for an unforgettable experience.
        </p>
      </div>

      <img
        className="about-image-chefs"
        src={ImageChefs}
        alt="Restarurant food"
        height={200}
        width={200}
      />
      <img
        className="about-image-restaurant"
        src={ImageRestaurant}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  );
};

export default About;