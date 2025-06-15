"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // 👈 anti-spam

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      // bot filled hidden field — block it!
      console.log("Spam detected");
      return;
    }

    setState("submitting");

    try {
      const res = await fetch("https://formspree.io/f/mdkzzgew", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.ok) {
        setState("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setState("error");
      }
    } catch (error) {
      console.error(error);
      setState("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-left">
      {/* honeypot field — hidden */}
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-3 rounded bg-neutral-800 text-white placeholder-gray-400"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded bg-neutral-800 text-white placeholder-gray-400"
        required
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-3 rounded bg-neutral-800 text-white placeholder-gray-400"
        rows={5}
        required
      />

      <button
        type="submit"
        className="bg-white text-black font-bold py-3 px-6 rounded hover:bg-gray-200 transition"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {state === "success" && (
        <p className="text-green-400">Thank you! We’ll be in touch soon.</p>
      )}
      {state === "error" && (
        <p className="text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
