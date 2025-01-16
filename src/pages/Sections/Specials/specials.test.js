import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Specials from "./specials";

jest.mock("../../../components/Button/button", () => () => <button>Explore Menu</button>);
jest.mock("../../../components/FoodCard/foodCard", () => () => <div>Food Card</div>);

describe("Specials component", () => {
  test("renders the Specials component with the title and Explore Menu button", () => {
    render(
      <MemoryRouter>
        <Specials />
      </MemoryRouter>
    );

    // Check if the title is rendered
    const specialsTitle = screen.getByText("Specials");
    expect(specialsTitle).toBeInTheDocument();

    // Check if the button is rendered
    const button = screen.getByText("Explore Menu");
    expect(button).toBeInTheDocument();
  });
});
