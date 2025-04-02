// Features.tsx
import { IconBriefcase, IconUsers, IconRocket } from '@tabler/icons-react' // Install @tabler/icons-react

export default function FeaturesSection() {
  const features = [
    {
      icon: <IconBriefcase size={24} />,
      title: "Expert Team",
      description: "We have professionals who understand the IT industry."
    },
    {
      icon: <IconUsers size={24} />,
      title: "Quality Candidates",
      description: "We ensure you meet only the best talent available."
    },
    {
      icon: <IconRocket size={24} />,
      title: "Fast Process",
      description: "We help you fill your roles quickly without losing quality."
    }
  ]

  return (
    <section className="features_section">
      <h2>Why Choose Pathsync Recruitment</h2>
      <div className="features_cards">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature_card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="feature_icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
