"use client"
import { FaQuoteLeft } from 'react-icons/fa'

export default function TestimonialsSection() {
  const testimonials = [
    { quote: "PathSync Recruitment transformed our hiring process!", name: "John Doe", position: "CEO, TechCorp" },
    { quote: "A truly professional service with fantastic results.", name: "Jane Smith", position: "HR Director, Innovate Inc." }
  ]

  return (
    <section className="testimonials_section">
      <h2>Testimonials</h2>
      <div className="testimonials_container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial_card">
            <FaQuoteLeft className="quote_icon" />
            <p className="testimonial_quote">"{testimonial.quote}"</p>
            <p className="testimonial_author">{testimonial.name}, <span>{testimonial.position}</span></p>
          </div>
        ))}
      </div>
    </section>
  )
}
