"use client";

import { motion } from "framer-motion";
import {
  Satellite,
  BrainCircuit,
  Map,
  Plane,
  Radio,
  FileText,
} from "lucide-react";
import { SectionHeading } from "../ui/section-heading";
import { StaggerGroup, staggerItem } from "../ui/reveal";

const steps = [
  {
    icon: Satellite,
    title: "Alert Ingestion",
    description:
      "Satellite hotspots, IoT field sensors, and citizen reports stream into one unified intake pipeline.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    description:
      "Models classify fire type and size, predict spread, and generate a real-time risk score within seconds.",
  },
  {
    icon: Map,
    title: "Decision Support",
    description:
      "Commanders review AI recommendations layered on a live GIS map before authorizing any response.",
  },
  {
    icon: Plane,
    title: "Drone Deployment",
    description:
      "Scanner gliders and payload suppression drones are dispatched to the predicted frontline.",
  },
  {
    icon: Radio,
    title: "Live Monitoring",
    description:
      "Real-time telemetry, thermal video feeds, and containment tracking update the command center continuously.",
  },
  {
    icon: FileText,
    title: "Auto Report",
    description:
      "A post-incident PDF compiles the full timeline, decisions taken, and measured outcomes automatically.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad relative bg-navy-deep/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="From alert to after-action in one loop"
          subtitle="A six-stage operational pipeline that turns raw signals into coordinated, accountable fire response."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all hover:-translate-y-1 hover:border-ember/40 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-ember/20 to-alert/10 text-ember ring-1 ring-ember/20">
                  <step.icon className="h-6 w-6" />
                </span>
                <span className="font-mono text-4xl font-bold text-white/[0.07] transition-colors group-hover:text-ember/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
