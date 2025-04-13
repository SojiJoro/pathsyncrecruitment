'use client'
import { IconQuote } from '@tabler/icons-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Thanks to Pathsync Recruitment, we hired a senior DevOps Engineer in under two weeks. Their expertise in tech hiring is unmatched.",
      name: "Michael Andrews",
      position: "Head of Talent Acquisition, Nexa Solutions"
    },
    {
      quote: "Working with Pathsync was seamless. They understood our unique needs and presented top-tier candidates with impressive speed.",
      name: "Rebecca Liu",
      position: "HR Manager, Quantum Systems"
    },
    {
      quote: "Pathsync Recruitment helped me land a role that aligned perfectly with my skills and career goals. Highly recommended for any tech professional!",
      name: "Daniel Osei",
      position: "Senior Software Engineer"
    },
    {
      quote: "We struggled to fill our cybersecurity roles until Pathsync stepped in. Their team is knowledgeable, responsive, and incredibly professional.",
      name: "Aisha Thompson",
      position: "CTO, CybSecure Ltd"
    }
  ]

  return (
    <section className="testimonials_section py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What People Are Saying</h2>
      <div className="testimonials_container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial_card bg-white p-6 shadow rounded-lg relative">
            <IconQuote size={28} stroke={1.5} className="text-blue-600 mb-4" />
            <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
            <p className="font-semibold text-gray-900">
              {testimonial.name}
              <br />
              <span className="text-sm text-gray-600">{testimonial.position}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
