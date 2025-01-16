import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "./hero";

test("renders Hero component without errors", () => {
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

  expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  expect(screen.getByText("Chicago")).toBeInTheDocument();
  expect(
    screen.getByText(
      "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Little Lemon is where modern flair meets cozy nostalgia, offering bespoke cocktails and a premium wine selection."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Reserve a table")).toBeInTheDocument();
  expect(screen.getByAltText("Restarurant food")).toBeInTheDocument();
});
