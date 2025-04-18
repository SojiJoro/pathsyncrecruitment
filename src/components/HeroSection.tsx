"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero_section">
      <div className="hero_bg_image_container">
        <Image
          src="/hero-bg.png"
          alt="Tech abstract background"
          fill
          priority
          className="hero_bg_image"
          sizes="100vw"
        />
        <div className="circuit_lines"></div>
      </div>
      <div className="hero_overlay gradient_overlay" />
      <motion.div 
        className="hero_content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Your IT and Tech Recruitment Solution</h1>
        <p>We help you find the best talent for your organisation</p>
        <Link href="/contact" className="hero_button">
          Get Started
          <span className="button_arrow">→</span>
        </Link>
      </motion.div>
    </section>
  )
}
//       </div>