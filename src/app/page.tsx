import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import JobsSection from '@/components/JobsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactButtons from '@/components/ContactButtons';
import CareerBuilderSection from '@/components/CareerBuilderSection';

export const metadata = {
  title: 'Pathsync Recruitment',
  description: 'IT and Tech Recruitment Solutions',
};

export default function Home() {
  return (
    <main className="p-6 space-y-10">
      <HeroSection />
      <Features />
      <ContactButtons />
      <JobsSection />
      <CareerBuilderSection />
      <TestimonialsSection />
    </main>
  );
}
