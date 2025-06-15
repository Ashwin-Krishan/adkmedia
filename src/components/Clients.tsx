"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Client 1", logo: "/clients/client1.png" },
  { name: "Client 2", logo: "/clients/client2.png" },
  { name: "Client 3", logo: "/clients/client3.png" },
  { name: "Client 4", logo: "/clients/client4.png" },
  { name: "Client 5", logo: "/clients/client5.png" },
];

export default function Clients() {
  return (
    <section
      id="clients"  // ✅ ADD THIS
      className="w-full py-24 bg-gray-50 text-[var(--foreground)] flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold mb-8 text-center"
      >
        Our Clients
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-8 max-w-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {clients.map((client) => (
          <div
            key={client.name}
            className="w-32 h-16 grayscale opacity-70 hover:opacity-100 transition"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={128}
              height={64}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
