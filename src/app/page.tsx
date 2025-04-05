import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import BlogSection from '@/components/BlogSection'
import JobsSection from '@/components/JobsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

// Export metadata (allowed in server components)
export const metadata = {
  title: 'Pathsync Recruitment',
  description: 'IT and Tech Recruitment Solutions'
}

// Dynamically import the client component for contact buttons (SSR disabled)
const ContactButtons = dynamic(() => import('@/components/ContactButtons'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Features />
      <ContactButtons />
      <BlogSection />
      <JobsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
