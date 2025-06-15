"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <main className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src="/logo.png"
            alt="ADK Media Logo"
            width={400}
            height={400}
            className="w-[40vw] md:w-[20vw] drop-shadow-2xl"
            priority
          />
        </motion.div>
      </section>

      {/* Our Work */}
      <section
        id="work"
        className="w-full min-h-screen px-6 py-24 bg-neutral-900 flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center text-white">
          Our Work
        </h2>
        <p className="text-center max-w-2xl mb-12 text-gray-300">
          A selection of projects showcasing our passion for storytelling,
          design, and creative strategy.
        </p>

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

      {/* About */}
      <section
        id="about"
        className="w-full min-h-screen flex items-center justify-center bg-black text-white px-6 py-24"
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">About Us</h2>
          <div className="h-1 w-16 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            ADK Media is a creative studio specializing in impactful media
            production, branding, and storytelling. We collaborate with
            ambitious brands to craft visually stunning content that leaves a
            lasting impression. Our team merges strategy, design, and production
            to bring bold ideas to life.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white px-6 py-24"
      >
        <div className="text-center max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Contact</h2>
          <div className="h-1 w-16 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            Ready to bring your vision to life? Let&apos;s connect and make something
            amazing together.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
