"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      variants={fadeUp} // ✅ now TS knows it's the right type
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-4 text-left"
    >
      <input type="text" name="_gotcha" className="hidden" />

      <label className="block">
        <span className="text-gray-800">Name</span>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-3 w-full border border-gray-300 rounded"
        />
      </label>

      <label className="block">
        <span className="text-gray-800">Email</span>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-3 w-full border border-gray-300 rounded"
        />
      </label>

      <label className="block">
        <span className="text-gray-800">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 p-3 w-full border border-gray-300 rounded"
        />
      </label>

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded font-bold hover:bg-gray-900 transition"
        onClick={() => setSubmitted(true)}
      >
        {submitted ? "Sent!" : "Send Message"}
      </button>
    </motion.form>
  );
}
