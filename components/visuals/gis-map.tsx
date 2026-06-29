"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Stylized GIS operations map — dark tactical basemap with a coastline,
 * topographic contours, a graticule grid, thermal hotspots, live incident
 * pings and an animated drone flight path. Pure SVG, no external tiles.
 */
export function GisMap({ className }: { className?: string }) {
  const incidents = [
    { x: 168, y: 150, level: "critical" },
    { x: 250, y: 232, level: "warning" },
    { x: 120, y: 250, level: "info" },
  ];

  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="0 0 360 320"
        className="h-full w-full"
        role="img"
        aria-label="Live GIS incident map"
      >
        <defs>
          <radialGradient id="seaGlow" cx="50%" cy="40%" r="75%">
            <stop offset="0%" stopColor="#0e1a30" />
            <stop offset="100%" stopColor="#070b14" />
          </radialGradient>
          <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#13243a" />
            <stop offset="100%" stopColor="#0c1626" />
          </linearGradient>
          <radialGradient id="heat" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF6B2B" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#E53E3E" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#E53E3E" stopOpacity="0" />
          </radialGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* sea base */}
        <rect width="360" height="320" fill="url(#seaGlow)" />

        {/* graticule */}
        <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 45} y1="0" x2={i * 45} y2="320" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 45} x2="360" y2={i * 45} />
          ))}
        </g>

        {/* landmass (stylised coastline) */}
        <path
          d="M70 20 C120 30 150 25 175 55 C205 90 195 130 215 165 C235 200 230 245 250 285 C255 300 250 320 250 320 L60 320 C58 280 70 250 58 210 C48 175 70 150 60 115 C52 85 50 45 70 20 Z"
          fill="url(#land)"
          stroke="#274867"
          strokeOpacity="0.6"
          strokeWidth="1.2"
        />

        {/* topographic contour lines */}
        <g
          stroke="#3a5e85"
          strokeOpacity="0.35"
          strokeWidth="1"
          fill="none"
        >
          <path d="M95 90 C130 95 150 120 150 150 C150 185 125 205 95 205" />
          <path d="M110 110 C135 118 142 138 140 158 C138 182 122 192 105 190" />
          <path d="M150 235 C175 238 188 255 185 278" />
        </g>

        {/* thermal hotspots */}
        <circle cx="168" cy="150" r="46" fill="url(#heat)" filter="url(#soft)">
          <animate
            attributeName="r"
            values="40;50;40"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="250" cy="232" r="30" fill="url(#heat)" filter="url(#soft)" />

        {/* animated drone flight path */}
        <motion.path
          d="M40 285 C110 250 130 180 168 150 C210 118 250 200 250 232"
          fill="none"
          stroke="#FF6B2B"
          strokeWidth="1.6"
          strokeDasharray="5 7"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />

        {/* drone moving along path (SMIL — reliable on SVG) */}
        <g>
          <circle r="3.5" fill="#fff" />
          <circle r="7" fill="none" stroke="#FF6B2B" strokeWidth="1" opacity="0.7" />
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            rotate="auto"
            path="M40 285 C110 250 130 180 168 150 C210 118 250 200 250 232"
          />
        </g>

        {/* incident pings */}
        {incidents.map((inc, i) => {
          const color =
            inc.level === "critical"
              ? "#E53E3E"
              : inc.level === "warning"
                ? "#FF6B2B"
                : "#38bdf8";
          return (
            <g key={i}>
              <circle cx={inc.x} cy={inc.y} r="4" fill={color} />
              <circle
                cx={inc.x}
                cy={inc.y}
                r="4"
                fill="none"
                stroke={color}
                strokeWidth="1.5"
              >
                <animate
                  attributeName="r"
                  values="4;16"
                  dur="2.4s"
                  begin={`${i * 0.6}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.9;0"
                  dur="2.4s"
                  begin={`${i * 0.6}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* scanning sweep line */}
        <motion.line
          x1="0"
          y1="0"
          x2="360"
          y2="0"
          stroke="#FF6B2B"
          strokeOpacity="0.25"
          strokeWidth="2"
          initial={{ y: 0 }}
          animate={{ y: [0, 320, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
