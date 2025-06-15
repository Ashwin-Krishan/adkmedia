"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

// ✅ Correct type for itemVariants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1], // ✅ Use cubic-bezier for TS safety
    },
  },
};

type ProjectCardProps = {
  title: string;
  imageUrl: string;
};

export default function ProjectCard({ title, imageUrl }: ProjectCardProps) {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
      variants={itemVariants} // ✅ Correct spelling & type
    >
      <Image
        src={imageUrl}
        alt={title}
        width={800}
        height={600}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <h3 className="text-white text-2xl font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
}
