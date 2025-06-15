"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group transition-transform"
    >
      {/* Project Image */}
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="w-full h-auto object-cover transition-transform duration-300"
      />

      {/* Subtle Transparent Hover Overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
}
