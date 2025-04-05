import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import ContactForm from '@/components/ContactForm'
import BlogSection from '@/components/BlogSection'
import JobsSection from '@/components/JobsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Pathsync Recruitment',
  description: 'IT and Tech Recruitment Solutions'
}

export default function Home() {
  // Optional: Remove these logs once everything is stable
  console.log({
    Navbar: !!Navbar,
    HeroSection: !!HeroSection,
    Features: !!Features,
    ContactForm: !!ContactForm,
    BlogSection: !!BlogSection,
    JobsSection: !!JobsSection,
    TestimonialsSection: !!TestimonialsSection,
    Footer: !!Footer
  })

  return (
    <main>
      {Navbar && <Navbar />}
      {HeroSection && <HeroSection />}
      {Features && <Features />}
      {ContactForm && <ContactForm />}
      {BlogSection && <BlogSection />}
      {JobsSection && <JobsSection />}
      {TestimonialsSection && <TestimonialsSection />} {/* ✅ Added here */}
      {Footer && <Footer />}
    </main>
  )
}
