// src/app/page.tsx
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import ContactForm from '@/components/ContactForm'
import BlogSection from '@/components/BlogSection'
import JobsSection from '@/components/JobsSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Pathsync Recruitment',
  description: 'IT and Tech Recruitment Solutions'
}

export default function Home() {
  // Add console.log to check which components are defined
  console.log({
    Navbar: !!Navbar,
    HeroSection: !!HeroSection,
    Features: !!Features,
    ContactForm: !!ContactForm,
    BlogSection: !!BlogSection,
    JobsSection: !!JobsSection,
    Footer: !!Footer
  })

  return (
    <main>
      {/* Add components one by one */}
      {Navbar && <Navbar />}
      {HeroSection && <HeroSection />}
      {Features && <Features />}
      {ContactForm && <ContactForm />}
      {BlogSection && <BlogSection />}
      {JobsSection && <JobsSection />}
      {Footer && <Footer />}
    </main>
  )
}
