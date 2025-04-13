import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import JobsSection from '@/components/JobsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactButtons from '@/components/ContactButtons';

export const metadata = {
  title: 'Pathsync Recruitment',
  description: 'IT and Tech Recruitment Solutions',
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <ContactButtons />
      <JobsSection />
      <TestimonialsSection />
    </main>
  );
}
