import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about PathSync Recruitment - our mission to transform employment for neurodivergent individuals through AI-powered matching and human-led support.',
};

// Team members data
const teamMembers = [
  {
    name: 'Adesoji',
    role: 'Founder & Technical Lead',
    bio: 'Site Reliability Engineer with extensive AWS expertise. Passionate about using technology to create accessible employment opportunities for neurodivergent individuals.',
    specialties: ['Cloud Infrastructure', 'Platform Architecture', 'Accessibility'],
  },
];

// Values data
const values = [
  {
    title: 'Authenticity',
    description: 'Come as you are. We celebrate neurodivergent identities and create spaces where everyone can be themselves.',
    icon: '💫',
  },
  {
    title: 'Evidence-Based',
    description: 'Data-driven decisions guide our approach. We measure outcomes and continuously improve based on results.',
    icon: '📊',
  },
  {
    title: 'Accessibility',
    description: 'Universal design principles inform everything we build. Our platform works for everyone, not just the majority.',
    icon: '♿',
  },
  {
    title: 'Partnership',
    description: 'Collaborative relationships with candidates, employers, and advocacy organisations drive lasting change.',
    icon: '🤝',
  },
];

// Timeline milestones
const milestones = [
  { year: '2024', title: 'Company Founded', description: 'PathSync Recruitment Ltd established with vision for neurodivergent employment' },
  { year: '2024', title: 'Platform Development', description: 'Building AI-powered assessment and matching technology' },
  { year: '2025', title: 'Innovation Visa Pursuit', description: 'Seeking endorsement to scale our innovative approach' },
  { year: '2025', title: 'First Placements', description: 'Target: 50 successful neurodivergent placements' },
  { year: '2026', title: 'Platform Launch', description: 'Full self-service platform for candidates and employers' },
  { year: '2027', title: 'Scale & Expansion', description: 'Target: 500 annual placements, national coverage' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-neutral-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Making Neurodivergent Employment{' '}
              <span className="gradient-text">the Norm</span>
            </h1>
            <p className="text-xl text-neutral-600">
              We believe neurodivergent individuals deserve employment opportunities that recognise their unique strengths. Our mission is to make this the norm, not the exception.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white" aria-labelledby="story-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 id="story-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p className="text-lg leading-relaxed mb-6">
                PathSync was founded with a simple observation: traditional recruitment processes systematically disadvantage neurodivergent candidates. CV screening favours linear career paths. Interviews reward neurotypical social performance. Workplaces lack understanding of accommodations.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                As a technical professional with deep experience in building scalable systems, our founder Adesoji saw an opportunity to apply technology and structured methodology to solve this problem. The result is PathSync: a platform that combines AI-powered cognitive assessment with human-led incubation support.
              </p>
              <p className="text-lg leading-relaxed">
                We are not just another recruitment agency. We are building infrastructure for a more inclusive employment market—one where neurodivergent strengths are recognised, valued, and matched to roles where they can thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="section bg-primary" aria-labelledby="innovation-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center text-white mb-12">
              <h2 id="innovation-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Our Innovation
              </h2>
              <p className="text-lg text-white/80">
                What makes PathSync different from traditional recruitment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Technology-Enabled</h3>
                <p className="text-white/80 text-sm">
                  AI-powered cognitive assessment profiles strengths and preferences, enabling better matching than CV screening or interviews alone.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Human-Centred</h3>
                <p className="text-white/80 text-sm">
                  Technology amplifies human support, not replaces it. Our incubation programmes provide personalised coaching and preparation.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Dual Transformation</h3>
                <p className="text-white/80 text-sm">
                  We prepare candidates AND employers simultaneously, ensuring both sides are ready for successful, lasting employment relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-neutral-50" aria-labelledby="values-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutral-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="card bg-white text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white" aria-labelledby="team-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="team-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-neutral-600">
              Building a diverse team committed to neuroinclusive employment
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="card bg-neutral-50">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-2xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-neutral-600 text-sm mb-3">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <span key={specialty} className="badge badge-primary text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-neutral-600">
              We are actively building our team with diverse perspectives, including neurodivergent team members who bring lived experience to our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Visa Journey */}
      <section className="section bg-neutral-50" aria-labelledby="journey-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="journey-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Innovation Visa Journey
            </h2>
            <p className="text-lg text-neutral-600">
              Building a scalable, innovative business that transforms neurodivergent employment
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-4 mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 w-3 h-3 bg-primary rounded-full md:left-1/2 md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card bg-white inline-block">
                      <span className="text-primary font-bold">{milestone.year}</span>
                      <h3 className="font-semibold text-neutral-900 mt-1">{milestone.title}</h3>
                      <p className="text-sm text-neutral-600 mt-1">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section bg-white" aria-labelledby="company-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="company-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Company Information
            </h2>
            <div className="card bg-neutral-50">
              <p className="text-lg font-semibold text-neutral-900">PathSync Recruitment Ltd</p>
              <p className="text-neutral-600 mt-2">Registered in England and Wales</p>
              <p className="text-neutral-600">Company Number: 14979338</p>
              <p className="text-neutral-600 mt-4">
                Kemp House, 152-160 City Road<br />
                London EC1V 2NX<br />
                United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Whether you are a job seeker, employer, or want to partner with us, we would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-4 no-underline"
              >
                Get in Touch
              </Link>
              <Link
                href="/job-seekers"
                className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 no-underline"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
