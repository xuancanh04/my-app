import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Bach Xuan Canh delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are impressive.",
      name: "John Smith",
      position: "CEO, Tech Company",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      content: "Working with Canh was a pleasure. He understood our requirements quickly and delivered a beautiful, functional website that our customers love.",
      name: "Sarah Johnson",
      position: "Product Manager, StartupX",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      content: "Canh's technical expertise and creative approach helped us transform our outdated platform into a modern, user-friendly application.",
      name: "Michael Chen",
      position: "CTO, Enterprise Solutions",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>Client <span>Testimonials</span></h2>
        <p>What people say about working with me</p>
        
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;