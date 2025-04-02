import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'  // Make sure this matches
import ContactForm from '@/components/ContactForm'
import BlogSection from '@/components/BlogSection'
import JobsSection from '@/components/JobsSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Pathsync Recruitment',
  description: 'IT and Tech Recruitment Solutions'
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Features />  {/* This should match the import and file name */}
      <ContactForm />
      <BlogSection />
      <JobsSection />
      <Footer />
    </main>
  )
}
