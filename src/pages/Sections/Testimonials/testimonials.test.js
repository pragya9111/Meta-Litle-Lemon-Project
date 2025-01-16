import React from "react";
import { render, screen } from "@testing-library/react";
import Testimonials from "./testimonials";

describe("Testimonials component", () => {
  test("renders the testimonial cards", () => {
    render(<Testimonials />);

    // Check if the testimonial cards are rendered
    const testimonialCards = screen.getAllByTestId("testimonial-card");
    expect(testimonialCards).toHaveLength(3);
  });
});
