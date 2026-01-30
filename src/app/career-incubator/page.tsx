// File: src/app/career-incubator/page.tsx
'use client';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface ProgrammeStep {
  title: string;
  desc: string;
}

interface InvolvementOption {
  title: string;
  desc: string;
  link: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export default function CareerIncubatorPage() {
  const programmeSteps: ProgrammeStep[] = [
    {
      title: 'Career Discovery',
      desc: 'We help you identify your ideal tech path based on your interests, goals, and learning style.',
    },
    {
      title: 'Training Support',
      desc: 'We guide you through free and paid learning resources, weekly check-ins, and group projects.',
    },
    {
      title: 'Mentorship & Coaching',
      desc: 'Get matched with a mentor, prepare for interviews, and build your portfolio.',
    },
    {
      title: 'Job Readiness & Placement',
      desc: 'Apply for real jobs, get feedback, and receive support through your first 90 days on the job.',
    },
  ];

  const involvementOptions: InvolvementOption[] = [
    {
      title: 'Candidates',
      desc: 'Apply to join our Career Incubator and start your journey into tech.',
      link: '/career-incubator/apply',
    },
    {
      title: 'Companies',
      desc: 'Partner with us to access entry-level tech talent trained with real-world skills.',
      link: '/career-incubator/partner',
    },
    {
      title: 'Mentors',
      desc: 'Volunteer your time to guide someone into the tech world and make an impact.',
      link: '/career-incubator/become-a-mentor',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      quote: 'PathSync helped me go from zero experience to my first tech job in just six months!',
      author: 'Tunde A.',
      role: 'Junior DevOps Engineer',
      avatar: 'https://i.pravatar.cc/80?img=1',
    },
    {
      quote: 'The mentorship I received changed my life. I finally felt guided and supported.',
      author: 'Sandra E.',
      role: 'Frontend Developer Intern',
      avatar: 'https://i.pravatar.cc/80?img=2',
    },
    {
      quote: 'As a career switcher, I was lost. PathSync gave me a map and walked the journey with me.',
      author: 'David I.',
      role: 'Cloud Support Analyst',
      avatar: 'https://i.pravatar.cc/80?img=3',
    },
  ];

  return (
    <>
      <Head>
        <title>Career Incubator | PathSync Recruitment</title>
        <meta
          name="description"
          content="Join PathSync&apos;s Career Incubator to gain mentorship, training, and job placement support for entry-level tech careers."
        />
      </Head>

      <main className="p-4 md:p-8">
        {/* 1. Hero */}
        <motion.section
          className="relative bg-white py-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-teal-50 opacity-10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Building Tech Talent. One Career at a Time.
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Our Career Incubator Programme transforms ambition into employment.
            </p>
            <div className="space-x-4">
              <Link href="/career-incubator/apply">
                <button className="btn">Apply Now</button>
              </Link>
              <Link href="/career-incubator/become-a-mentor">
                <button className="btn outline">Become a Mentor</button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* 2. Newsletter */}
        <section className="my-12 bg-white rounded-xl p-6 text-center shadow-md max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-2">Stay in the Loop</h2>
          <p className="mb-4 text-gray-700">
            Subscribe to updates, tips, and exclusive opportunities.
          </p>
          <form
            action="https://formspree.io/f/moqogoyp"
            method="POST"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="px-4 py-2 rounded border border-gray-300 w-full max-w-sm"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700 transition"
            >
              Subscribe
            </button>
          </form>
        </section>

        {/* 3. How It Works (image) */}
        <section className="my-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
          <div className="max-w-4xl mx-auto px-4">
            <Image
              src="/how-it-works.png"
              alt="Overview of the four steps in the Career Incubator"
              width={1200}
              height={600}
              className="w-full h-auto object-contain rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* 4. Steps */}
        <motion.section
          className="mb-12 py-10 bg-gray-50 rounded-xl px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 border-l-4 pl-4 border-teal-500">
            What is the Career Incubator?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {programmeSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. Testimonials */}
        <motion.section
          className="mb-12 py-10 bg-teal-50 rounded-xl px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center text-teal-800">
            What Our Graduates Say
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white p-6 mx-2 rounded-xl shadow text-center">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    width={80}
                    height={80}
                    className="rounded-full object-cover mx-auto mb-4"
                  />
                  <p className="italic text-gray-700 mb-3">{`"${t.quote}"`}</p>
                  <p className="font-bold text-teal-700">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.section>

        {/* 6. Why PathSync */}
        <motion.section
          className="mb-12 py-10 bg-white rounded-xl px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 border-l-4 pl-4 border-teal-500">
            Why PathSync?
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>We don’t just recruit – we build tech talent from the ground up.</li>
            <li>We provide long-term mentorship until you land your role – and beyond.</li>
            <li>No upfront bootcamp costs – just dedication and consistency.</li>
          </ul>
        </motion.section>

        {/* 7. Get Involved */}
        <motion.section
          className="mb-12 py-10 bg-gray-50 rounded-xl px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 border-l-4 pl-4 border-teal-500">
            Get Involved
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {involvementOptions.map((opt, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow"
              >
                <h3 className="text-xl font-bold mb-2">{opt.title}</h3>
                <p className="mb-4">{opt.desc}</p>
                <Link href={opt.link}>
                  <button className="btn">Apply Now</button>
                </Link>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 8. Final CTA */}
        <motion.section
          className="bg-teal-600 text-white py-12 text-center rounded-xl mb-10 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Start Your Tech Journey?
          </h3>
          <p className="mb-6 text-lg">
            {`Want our help breaking into tech? DM "TECHSTART" on Instagram or apply online today.`}
          </p>
          <Link href="/career-incubator/apply">
            <button className="btn">Apply Now</button>
          </Link>
        </motion.section>
      </main>
    </>
  );
}