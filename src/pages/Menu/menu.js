import React from "react";
import './menu.css'
import { menuData } from "./menuData"
import FoodCard from "../../components/FoodCard/foodCard";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="header-container">
        <h1 className="specials-title">Our Menu</h1>
      </div>
      <div className="menu-section">
        <h2>Drinks</h2>
        <div className="special-body">
          {menuData.map((element, index) => {
            return element.type === "drinks" ?
              <FoodCard
                key={element.id}
                title={element.title}
                description={element.description}
                image={element.image}
                price={element.price}
              /> : "";
          })}
        </div>
      </div>

      <div className="menu-section">
        <h2>Main Dishes</h2>
        <div className="special-body">
          {menuData.map((element, index) => {
            return element.type === "main" ?
              <FoodCard
                key={element.id}
                title={element.title}
                description={element.description}
                image={element.image}
                price={element.price}
              /> : "";
          })}
        </div>
      </div>

      <div className="menu-section">
        <h2>Desserts</h2>
        <div className="special-body">
          {menuData.map((element, index) => {
            return element.type === "dessert" ?
              <FoodCard
                key={element.id}
                title={element.title}
                description={element.description}
                image={element.image}
                price={element.price}
              /> : "";
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;