import React from "react";
import { useNavigate } from "react-router-dom";
import "./specials.css";
import Button from "../../../components/Button/button";
import FoodCard from "../../../components/FoodCard/foodCard";
import greekSalad from "../../../assets/greek salad.png";
import bruschetta from "../../../assets/bruchetta.png";
import lemonDessert from "../../../assets/lemon dessert.jpg";

const specials = [
  {
    id: 1,
    title: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    image: greekSalad,
    price: "$12.99",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruschetta,
    price: "$ 5.99",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemonDessert,
    price: "$ 5.00",
  },
];

const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate('/order');
  };

  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">Specials</h1>
        <Button title={"Online Menu"} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {specials.map((special) => (
          <FoodCard
            key={special.id}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
