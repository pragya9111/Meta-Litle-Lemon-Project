import React from "react";
import { render, screen, within } from "@testing-library/react";
import Menu from "./menu";
import { menuData } from "./menuData";

jest.mock("../../components/FoodCard/foodCard", () => ({ title, description, image, price }) => (
  <div data-testid="food-card" className="food-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <img src={image} alt={title} />
    <p>{price}</p>
  </div>
));

describe.only("Menu Component", () => {
  it("renders without crashing", () => {
    render(<Menu />);
  });

  it("renders the section titles correctly", () => {
    render(<Menu />);
    expect(screen.getByText("Drinks")).toBeInTheDocument();
    expect(screen.getByText("Main Dishes")).toBeInTheDocument();
    expect(screen.getByText("Desserts")).toBeInTheDocument();
  });

  it("renders FoodCard components for drinks", () => {
    render(<Menu />);
    // const drinkCards = screen.getAllByTestId("food-card");
    // const drinks = menuData.filter(item => item.type === "drinks");
    // expect(drinkCards.length).toBe(drinks.length);
    const drinksSection = screen.getByText("Drinks").closest(".menu-section");
    const drinkCards = within(drinksSection).getAllByTestId("food-card");
    const drinks = menuData.filter(item => item.type === "drinks");
    expect(drinkCards.length).toBe(drinks.length);
  });

  it("renders FoodCard components for main dishes", () => {
    render(<Menu />);
    // const mainCards = screen.getAllByTestId("food-card");
    // const mains = menuData.filter(item => item.type === "main");
    // expect(mainCards.length).toBe(mains.length);
    const mainSection = screen.getByText("Main Dishes").closest(".menu-section");
    const mainCards = within(mainSection).getAllByTestId("food-card");
    const mains = menuData.filter(item => item.type === "main");
    expect(mainCards.length).toBe(mains.length);
  });

  it("renders FoodCard components for desserts", () => {
    render(<Menu />);
    // const dessertCards = screen.getAllByTestId("food-card");
    // const desserts = menuData.filter(item => item.type === "dessert");
    // expect(dessertCards.length).toBe(desserts.length);
    const dessertsSection = screen.getByText("Desserts").closest(".menu-section");
    const dessertCards = within(dessertsSection).getAllByTestId("food-card");
    const desserts = menuData.filter(item => item.type === "dessert");
    expect(dessertCards.length).toBe(desserts.length);
  });
});

