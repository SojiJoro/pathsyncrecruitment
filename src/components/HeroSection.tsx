import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="hero_section">
      {/* Background Image Layer */}
      <div className="hero_bg_image">
        <Image
          src="/hero-bg.png"
          alt="Tech abstract background"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Overlay for dark effect */}
      <div className="hero_overlay" />

      {/* Hero Text Content */}
      <div className="hero_content">
        <h1>Your IT and Tech Recruitment Solution</h1>
        <p>We help you find the best talent for your organisation</p>
        <button className="hero_button">Get Started</button>
      </div>
    </section>
  )
}
