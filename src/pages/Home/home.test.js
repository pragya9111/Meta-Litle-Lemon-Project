import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./home";

// Mock the section components
jest.mock("../Sections/Hero/hero", () => () => <div data-testid="hero-section"></div>);
jest.mock("../Sections/Specials/specials", () => () => <div data-testid="specials-section"></div>);
jest.mock("../Sections/Testimonials/testimonials", () => () => <div data-testid="testimonials-section"></div>);
jest.mock("../Sections/About/aboutSection", () => () => <div data-testid="about-section"></div>);

describe("Home component", () => {
  test("renders the Hero, Specials, Testimonials, and About sections", () => {
    render(<Home />);

    // Check if the Hero section is rendered
    const heroSection = screen.getByTestId("hero-section");
    expect(heroSection).toBeInTheDocument();

    // Check if the Specials section is rendered
    const specialsSection = screen.getByTestId("specials-section");
    expect(specialsSection).toBeInTheDocument();

    // Check if the Testimonials section is rendered
    const testimonialsSection = screen.getByTestId("testimonials-section");
    expect(testimonialsSection).toBeInTheDocument();

    // Check if the About section is rendered
    const aboutSection = screen.getByTestId("about-section");
    expect(aboutSection).toBeInTheDocument();
  });
});
