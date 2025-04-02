// Features.tsx
"use client"
import {  
  IconBrain,
  IconTargetArrow,
  IconClockPlay
} from '@tabler/icons-react'

export default function Features() {  // Changed from FeaturesSection to Features
  const features = [
    {
      icon: <IconBrain size={28} stroke={1.5} />,
      title: "Expert Team",
      description: "We have professionals who understand the IT industry."
    },
    {
      icon: <IconTargetArrow size={28} stroke={1.5} />,
      title: "Quality Candidates",
      description: "We ensure you meet only the best talent available."
    },
    {
      icon: <IconClockPlay size={28} stroke={1.5} />,
      title: "Fast Process",
      description: "We help you fill your roles quickly without losing quality."
    }
  ]

  return (
    <section className="features_section">
      <h2>Why Choose Pathsync Recruitment</h2>
      <div className="features_cards">
        {features.map((feature, index) => (
          <div key={index} className="feature_card">
            <div className="feature_icon">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
