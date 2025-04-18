import Image from 'next/image';

export const metadata = {
  title: 'About Us - Pathsync Recruitment',
  description:
    'Discover the story, mission and values of Pathsync Recruitment – connecting brilliant IT talent with leading companies.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Hero Section with image */}
      <section className="relative h-72 md:h-96">
        <Image
          src="/images/about-hero.jpg"
          alt="Pathsync Recruitment team hero"
          fill
          className="object-cover object-center"
          style={{ zIndex: -1 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Our Story */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700">
          At Pathsync Recruitment, we have been connecting high‑calibre IT professionals with leading companies for over
          ten years. Our journey began with a simple belief: every company deserves access to top‐notch talent and every
          professional deserves a career that truly fits. We pride ourselves on a personalised approach, industry
          expertise, and an unwavering commitment to both our clients and candidates.
        </p>
      </section>

      {/* Our Mission */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is simple – to bridge the gap between exceptional talent and opportunity. We work hard to build
          long‑lasting partnerships with our clients by understanding their unique needs and tailoring our recruitment
          strategies accordingly.
        </p>
      </section>

      {/* Our Values and Team Image */}
      <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Integrity and transparency</li>
            <li>Commitment to excellence</li>
            <li>Collaboration and innovation</li>
            <li>Respect for individuals</li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="w-full h-64 md:h-72 relative">
            <Image
              src="/images/team-placeholder.jpg"
              alt="Pathsync team group photo"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
