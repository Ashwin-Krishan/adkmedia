"use client";

import React, { useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
  {
    quote: "ADK Media brought our vision to life beautifully. Truly impressed.",
    author: "Sarah M., Creative Director",
  },
  {
    quote: "Professional, innovative, and reliable. Highly recommended!",
    author: "James L., Brand Manager",
  },
  {
    quote: "Their storytelling captured our brand perfectly. Amazing team.",
    author: "Priya K., CEO",
  },
];

export default function Testimonials() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 20 },
    mode: "snap",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 8000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="w-full py-24 bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        Testimonials
      </h2>

      <div className="relative w-full max-w-3xl">
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-white p-8 rounded-lg shadow-md text-center"
            >
              <p className="text-xl italic mb-4">“{testimonial.quote}”</p>
              <p className="text-gray-800 font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>

        {/* Plain Arrow Buttons - no background, just arrow */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-700 text-3xl hover:text-black transition"
          aria-label="Previous"
        >
          ←
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-700 text-3xl hover:text-black transition"
          aria-label="Next"
        >
          →
        </button>
      </div>
    </section>
  );
}
