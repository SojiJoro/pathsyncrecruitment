'use client'
import { IconQuote } from '@tabler/icons-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Pathsync Recruitment helped me find a remote role that fits my lifestyle perfectly. The process was quick and smooth.",
      name: "Daniel Osei",
      position: "Frontend Developer"
    },
    {
      quote: "I was struggling to transition into tech from another field, but Pathsync believed in me and found the perfect opportunity.",
      name: "Aisha Thompson",
      position: "Junior Software Engineer"
    },
    {
      quote: "The team at Pathsync guided me through the interview process and offered great advice along the way.",
      name: "Chukwuemeka Johnson",
      position: "Cloud Support Associate"
    },
    {
      quote: "I had been applying for months with no luck. Within a week of contacting Pathsync, I got two interviews and one offer.",
      name: "Fatima Ahmed",
      position: "IT Support Specialist"
    }
  ]

  return (
    <section className="testimonials_section py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Candidates Say</h2>
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
