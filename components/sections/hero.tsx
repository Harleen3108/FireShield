"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Activity, Plane, Timer, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Counter } from "../ui/counter";
import { DashboardMockup } from "../visuals/dashboard-mockup";
import { VideoModal } from "../ui/video-modal";

const stats = [
  { icon: Activity, to: 6, label: "Active Incidents" },
  { icon: Plane, to: 3, label: "Drones Deployed" },
  { icon: Timer, to: 12, suffix: " min", label: "Avg Response" },
  { icon: ShieldCheck, to: 94, suffix: "%", label: "Containment Rate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-28">
      {/* Photographic background */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/ff-action.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* darkening + brand gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-base-900 via-base-900/85 to-base-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/40 to-base-900/70" />
        <div className="absolute inset-0 grid-overlay opacity-60" />
      </div>

      <div className="container relative pb-16 pt-2 md:pb-20">
        <div className="grid items-center gap-10 sm:gap-12 lg:min-h-[56vh] lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-base-900/60 px-4 py-1.5 text-xs font-medium text-slate-200 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
              </span>
              Live for Goa Fire &amp; Emergency Services
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 font-display text-4xl font-medium leading-[1.08] text-white drop-shadow-lg sm:text-5xl lg:text-[3.25rem]"
            >
              AI-Powered Fire
              <br />
              Response.
              <br />
              <span className="text-gradient-ember">Faster. Smarter. Safer.</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg lg:mx-0"
            >
              End-to-end fire detection, drone deployment &amp; suppression
              platform — built for India&apos;s fire departments.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            >
              <Button variant="primary" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#how-it-works">
                  See the Dashboard
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setVideoOpen(true)}
                className="w-full bg-base-900/40 backdrop-blur sm:w-auto"
              >
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Right: product mockup */}
          <DashboardMockup />
        </div>

        {/* Live stats bar */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="grid grid-cols-2 divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-base-900/70 backdrop-blur-xl md:grid-cols-4 md:divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 px-5 py-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-ember/10 text-ember">
                  <stat.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xl font-bold text-white">
                    <Counter to={stat.to} suffix={stat.suffix} />
                  </div>
                  <div className="truncate text-xs text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
