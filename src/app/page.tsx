import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import BlogSection from '@/components/BlogSection'
import JobsSection from '@/components/JobsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import ContactButtons from '@/components/ContactButtons' // updated import

export const metadata = {
  title: 'Pathsync Recruitment',
  description: 'IT and Tech Recruitment Solutions'
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Features />
      <ContactButtons />  {/* This section now displays the two options */}
      <BlogSection />
      <JobsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
