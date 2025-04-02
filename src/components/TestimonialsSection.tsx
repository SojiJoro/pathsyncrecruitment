"use client"
import { IconQuote } from '@tabler/icons-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Pathsync Recruitment transformed our hiring process for the better.",
      name: "John Doe",
      position: "CEO, TechCorp"
    },
    {
      quote: "A truly professional service with remarkable results.",
      name: "Jane Smith",
      position: "HR Director, Innovate Inc."
    }
  ]

  return (
    <section className="testimonials_section">
      <h2>Testimonials</h2>
      <div className="testimonials_container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial_card">
            <IconQuote size={24} stroke={1.5} className="quote_icon" />
            <p className="testimonial_quote">&quot;{testimonial.quote}&quot;</p>
            <p className="testimonial_author">
              {testimonial.name}, <span>{testimonial.position}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
