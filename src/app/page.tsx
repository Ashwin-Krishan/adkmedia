"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";

// Animation container for staggered child animations
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// ✅ Smooth fade+scale spring variant

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1], // smoother cubic-bezier ease
    },
  },
};





export default function Home() {
  return (
    <main className="relative">
      {/* Navbar */}
      <Navbar />

{/* Hero */}
<section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
  {/* ✅ Animated gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradientBlur"></div>

  {/* ✅ Content */}
  <motion.div
  variants={fadeUp}
  initial="hidden"
  animate="show"
  className="relative z-10 flex flex-col items-center text-center"
>
  <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
    Bold Creative, Cinematic Storytelling.
  </h1>
  <p className="text-lg md:text-2xl max-w-3xl text-gray-200">
    ADK Media transforms brands with stunning visuals & powerful narratives.
  </p>
</motion.div>

  {/* ✅ Scroll arrow */}
  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    className="absolute bottom-8 text-2xl text-white opacity-70"
  >
    ↓
  </motion.div>
</section>




      {/* About - darker */}
      <section
        id="about"
        className="w-full min-h-screen flex items-center justify-center bg-gray-50 text-[var(--foreground)] px-6 py-24"
      >
        <motion.div
          className="max-w-3xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">About Us</h2>
          <div className="h-1 w-16 bg-[var(--foreground)] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl leading-relaxed text-gray-800">
            ADK Media is a creative studio specializing in impactful media
            production, branding, and storytelling. We collaborate with
            ambitious brands to craft visually stunning content that leaves a
            lasting impression. Our team merges strategy, design, and production
            to bring bold ideas to life.
          </p>
        </motion.div>
      </section>

      {/* Our Work */}
      <section
        id="work"
        className="w-full min-h-screen px-6 py-24 bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center"
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          Our Work
        </motion.h2>
        <motion.p
          className="text-center max-w-2xl mb-12 text-gray-700"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          A selection of projects showcasing our passion for storytelling,
          design, and creative strategy.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectCard title="Project One" imageUrl="/work/project1.png" />
          <ProjectCard title="Project Two" imageUrl="/work/project2.png" />
          <ProjectCard title="Project Three" imageUrl="/work/project3.png" />
          <ProjectCard title="Project Four" imageUrl="/work/project4.png" />
          <ProjectCard title="Project Five" imageUrl="/work/project5.png" />
          <ProjectCard title="Project Six" imageUrl="/work/project6.png" />
        </motion.div>
      </section>

      {/* Clients - darker */}
      <section className="w-full py-24 bg-gray-50 text-[var(--foreground)] flex flex-col items-center" id="clients">
        <Clients />
      </section>

      {/* Testimonials - default white */}
      <Testimonials />

      {/* Contact - darker */}
      <section
        id="contact"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 text-[var(--foreground)] px-6 py-24"
      >
        <motion.div
          className="text-center max-w-xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Contact</h2>
          <div className="h-1 w-16 bg-[var(--foreground)] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl mb-6 text-gray-800">
            Ready to bring your vision to life? Let&apos;s connect and make
            something amazing together.
          </p>
          <ContactForm />
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
