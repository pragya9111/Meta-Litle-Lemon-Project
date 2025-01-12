import React from "react";
import "./testimonials.css";
import TestimonialCard from "../../../components/TestimonialCard/testimonialCard";

const testimonials = [
  {
    id: 1,
    author: "Jennie Wilson",
    description:
      "Little Lemon's Bruschetta is a symphony of flavors; perfectly crispy bread coupled with the freshest tomatoes.",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
    rating: 5,
    date: "2025-01-01",
  },
  {
    id: 2,
    author: "Alex Thompson",
    description:
      "The burger at Little Lemon was a taste revelation with its juicy, perfectly cooked meat and harmonious ingredient pairing.",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    date: "2024-12-14",
  },
  {
    id: 3,
    author: "Sophia Lee",
    description:
      "The Greek Salad at Little Lemon was delightfully fresh and flavorful, with a high-quality dressing. ",
    image:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4,
    date: "2024-05-14",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <h1 className="testimonial-title">Testimonials</h1>

      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <TestimonialCard

            key={testimonial.id}
            author={testimonial.author}
            description={testimonial.description}
            image={testimonial.image}
            rating={testimonial.rating}
            date={testimonial.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;