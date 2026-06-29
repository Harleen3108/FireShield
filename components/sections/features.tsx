"use client";

import { motion } from "framer-motion";
import {
  MapPinned,
  Flame,
  Plane,
  HeartPulse,
  BellRing,
  ScrollText,
} from "lucide-react";
import { SectionHeading } from "../ui/section-heading";
import { StaggerGroup, staggerItem } from "../ui/reveal";

const features = [
  {
    icon: MapPinned,
    title: "Real-Time GIS Dashboard",
    description:
      "A live operational map of every incident, asset, and unit — the single source of truth for command.",
  },
  {
    icon: Flame,
    title: "AI Fire Spread Prediction",
    description:
      "Wind, terrain, and fuel-aware models forecast fire growth so teams stage ahead of the frontline.",
  },
  {
    icon: Plane,
    title: "Drone Fleet Management",
    description:
      "Plan missions, monitor battery and payload status, and coordinate multi-drone sorties from one console.",
  },
  {
    icon: HeartPulse,
    title: "Human & Livestock Risk Scoring",
    description:
      "Population and livestock density layers prioritize evacuations where the stakes are highest.",
  },
  {
    icon: BellRing,
    title: "Multi-Channel Alerts",
    description:
      "Automated SMS, push, and email notifications keep responders and citizens informed in real time.",
  },
  {
    icon: ScrollText,
    title: "Compliance & Audit Logs",
    description:
      "Every decision and dispatch is timestamped and immutable — built for accountability and review.",
  },
];

export function Features() {
  return (
    <section id="features" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="Platform Features"
          title="Everything a fire command center needs"
          subtitle="One integrated platform replacing a patchwork of radios, spreadsheets, and disconnected maps."
        />

        <StaggerGroup className="mt-10 grid grid-cols-3 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center transition-all hover:border-ember/40 sm:rounded-2xl sm:p-6 sm:text-left lg:p-7"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="mx-auto grid h-9 w-9 place-items-center rounded-lg bg-ember/10 text-ember ring-1 ring-ember/20 transition-transform group-hover:scale-110 sm:mx-0 sm:h-11 sm:w-11 sm:rounded-xl lg:h-12 lg:w-12">
                <f.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <h3 className="mt-2.5 text-[13px] font-semibold leading-tight text-white sm:mt-5 sm:text-base lg:text-lg">
                {f.title}
              </h3>
              <p className="mt-2.5 hidden text-sm leading-relaxed text-slate-400 sm:block">
                {f.description}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
