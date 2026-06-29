"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

export function ProgressRing({
  value,
  label,
  sub,
  size = 96,
  color = "#FF6B2B",
}: {
  value: number;
  label: string;
  sub?: string;
  size?: number;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const stroke = 7;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = useMotionValue(0);
  const [offset, setOffset] = useState(circumference);
  const [text, setText] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(progress, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        setText(Math.round(v));
        setOffset(circumference - (v / 100) * circumference);
      },
    });
    return () => controls.stop();
  }, [inView, value, circumference, progress]);

  return (
    <div ref={ref} className="flex items-center gap-4">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={stroke}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center text-lg font-bold text-white">
          {text}%
        </span>
      </div>
      <div>
        <div className="text-sm font-semibold text-white">{label}</div>
        {sub && <div className="mt-0.5 text-xs leading-relaxed text-slate-400">{sub}</div>}
      </div>
    </div>
  );
}
