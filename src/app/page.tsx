// app/page.tsx

import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ProgressionModel from '@/components/ProgressionModel'
import PlatformSections from '@/components/PlatformSections'
import ImpactMetrics from '@/components/ImpactMetrics'
import SystemArchitecture from '@/components/SystemArchitecture'

export const metadata = {
  title: 'PathSync - Career Infrastructure Platform',
  description: 'Structured learning, skill validation, and employment readiness through evidence-based progression',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProgressionModel />
      <PlatformSections />
      <SystemArchitecture />
      <ImpactMetrics />
    </main>
  )
}
