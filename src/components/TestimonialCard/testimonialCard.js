import React from "react";
import "./testimonialCard.css";
import starIcon from "../../assets/star.svg"

const TestimonialCard = ({ author, description, image, rating, date }) => {

  return (
    <div className="testimonial-card" data-testid="testimonial-card">
      <div className="testimonial-card-container">
        <img className="testimonial-profile-picture" src={image} alt="author" height={60}></img>
        <div className="testimonial-card-info">
          <p className="testimonial-card-author">{author}</p>
          <p className="testimonial-card-date">{date}</p>
        </div>
      </div>
      <p className="testimonial-description">{description}</p>
      <div className="testimonial-rating">
        {rating &&
          [...Array(rating)].map((_, index) => (
            <img className="testimonial-rating-star" key={index} src={starIcon} alt="star" />
          ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
