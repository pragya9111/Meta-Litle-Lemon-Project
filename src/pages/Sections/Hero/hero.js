import React from 'react'
import './hero.css'
import Button from "../../../components/Button/button"
import Image from "../../../assets/hero image.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  const onClickReserve = () => {
    navigate('/reservations');
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
        <p>
          We are a family owned Mediterranean
          restaurant, focused on traditional
          recipes served with a modern twist.
          Little Lemon is where
          modern flair meets cozy nostalgia, offering
          bespoke cocktails and a premium wine selection.
        </p>
        <Button title={"Reserve a table"} onClick={onClickReserve} />
      </div>

      <img
        className="image"
        src={Image}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  )
}

export default Hero