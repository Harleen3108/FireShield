"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, FileWarning, TrendingDown } from "lucide-react";
import { SectionHeading } from "../ui/section-heading";
import { StaggerGroup, staggerItem } from "../ui/reveal";

const problems = [
  {
    icon: Clock,
    title: "Slow detection",
    description:
      "Satellite data carries 15–30 minute delays. By the time a hotspot is confirmed, a fire can grow from containable to catastrophic.",
  },
  {
    icon: FileWarning,
    title: "Manual decisions",
    description:
      "Officers rely on fragmented, incomplete ground reports — making high-stakes deployment calls without a unified picture.",
  },
  {
    icon: TrendingDown,
    title: "Reactive, not predictive",
    description:
      "No AI spread modeling or risk scoring. Teams respond to where the fire is, not where it's about to be.",
  },
];

export function Problem() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* atmospheric wildfire backdrop */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/wildfire.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base-900 via-base-900/85 to-base-900" />
      </div>
      <div className="container relative">
        <SectionHeading
          eyebrow="The Challenge"
          title="The problem with traditional fire response"
          subtitle="India's fire departments are fighting modern wildfires with decades-old tooling. The gaps cost time, resources, and lives."
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 border-l-2 border-l-alert bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-colors hover:border-l-alert hover:bg-white/[0.05]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-alert/10 text-alert ring-1 ring-alert/20">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {p.description}
              </p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-alert/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
