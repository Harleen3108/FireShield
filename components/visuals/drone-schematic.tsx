"use client";

import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.4, delay: i * 0.15, ease: "easeInOut" }, opacity: { duration: 0.3, delay: i * 0.15 } },
  }),
};

function Blueprint({ children }: { children: React.ReactNode }) {
  return (
    <motion.svg
      viewBox="0 0 220 160"
      className="h-full w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {/* blueprint grid */}
      <defs>
        <pattern id="bpgrid" width="14" height="14" patternUnits="userSpaceOnUse">
          <path d="M14 0H0V14" fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="220" height="160" fill="url(#bpgrid)" />
      {children}
    </motion.svg>
  );
}

export function GliderSchematic() {
  const stroke = "#FF8A52";
  return (
    <Blueprint>
      <g fill="none" stroke={stroke} strokeWidth="1.4" strokeLinecap="round">
        {/* fuselage */}
        <motion.path variants={draw} custom={0} d="M40 80 C70 72 150 72 185 80 C150 88 70 88 40 80 Z" />
        {/* main wing */}
        <motion.path variants={draw} custom={1} d="M70 80 L60 40 L150 52 L120 80" />
        <motion.path variants={draw} custom={2} d="M70 80 L60 120 L150 108 L120 80" />
        {/* tail */}
        <motion.path variants={draw} custom={3} d="M178 80 L172 62 L190 70" />
        <motion.path variants={draw} custom={3} d="M178 80 L172 98 L190 90" />
        {/* nose sensor */}
        <motion.circle variants={draw} custom={4} cx="44" cy="80" r="5" />
        {/* thermal pod */}
        <motion.circle variants={draw} custom={4} cx="100" cy="92" r="6" />
        <motion.line variants={draw} custom={4} x1="100" y1="98" x2="100" y2="108" />
      </g>
      {/* measurement annotations */}
      <g stroke={stroke} strokeOpacity="0.4" strokeWidth="0.8" fill="none">
        <motion.path variants={draw} custom={5} d="M60 32 L150 44" strokeDasharray="3 3" />
      </g>
      <text x="92" y="28" fill={stroke} fillOpacity="0.7" fontSize="8" fontFamily="monospace">3.2 m span</text>
    </Blueprint>
  );
}

export function PayloadSchematic() {
  const stroke = "#F56565";
  return (
    <Blueprint>
      <g fill="none" stroke={stroke} strokeWidth="1.4" strokeLinecap="round">
        {/* arms (X frame) */}
        <motion.line variants={draw} custom={0} x1="110" y1="80" x2="55" y2="45" />
        <motion.line variants={draw} custom={0} x1="110" y1="80" x2="165" y2="45" />
        <motion.line variants={draw} custom={1} x1="110" y1="80" x2="55" y2="115" />
        <motion.line variants={draw} custom={1} x1="110" y1="80" x2="165" y2="115" />
        {/* rotors */}
        {[
          [55, 45],
          [165, 45],
          [55, 115],
          [165, 115],
        ].map(([cx, cy], i) => (
          <motion.circle key={i} variants={draw} custom={2} cx={cx} cy={cy} r="18" />
        ))}
        {/* body */}
        <motion.rect variants={draw} custom={3} x="92" y="66" width="36" height="28" rx="5" />
        {/* payload tank */}
        <motion.path variants={draw} custom={4} d="M100 94 L120 94 L116 116 L104 116 Z" />
        <motion.line variants={draw} custom={4} x1="110" y1="116" x2="110" y2="124" />
        <motion.circle variants={draw} custom={4} cx="110" cy="80" r="3.5" />
      </g>
      <text x="150" y="135" fill={stroke} fillOpacity="0.7" fontSize="8" fontFamily="monospace">8 kg payload</text>
    </Blueprint>
  );
}
