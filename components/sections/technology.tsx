"use client";

import { motion } from "framer-motion";
import {
  Satellite,
  CloudSun,
  BadgeCheck,
  Landmark,
  Database,
  ServerCog,
  Flame,
} from "lucide-react";
import { SectionHeading } from "../ui/section-heading";
import { StaggerGroup, staggerItem } from "../ui/reveal";
import { Reveal } from "../ui/reveal";

const badges = [
  { icon: Satellite, label: "Satellite (MODIS/VIIRS)", sub: "Hotspot feeds" },
  { icon: CloudSun, label: "IMD Weather API", sub: "Wind & humidity" },
  { icon: BadgeCheck, label: "DGCA Compliant", sub: "Certified drone ops" },
  { icon: Landmark, label: "Make in India", sub: "Indigenous build" },
  { icon: Database, label: "PostGIS", sub: "Geospatial engine" },
  { icon: ServerCog, label: "AWS India", sub: "Mumbai region" },
];

const marqueeItems = [
  "Data sovereignty by default",
  "India-hosted infrastructure",
  "DGCA-compliant drone ops",
  "Aligned with national data-protection norms",
  "Built for emergency-services governance",
];

export function Technology() {
  return (
    <section id="technology" className="section-pad relative bg-navy-deep/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container">
        <SectionHeading
          eyebrow="Technology"
          title={
            <>
              Built for India.{" "}
              <span className="text-gradient-ember">Built for scale.</span>
            </>
          }
          subtitle="A sovereign-by-design stack combining trusted satellite data, certified drone operations, and India-hosted infrastructure."
        />

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map((b) => (
            <motion.div
              key={b.label}
              variants={staggerItem}
              className="flex flex-col items-center gap-3 rounded-xl bg-white/[0.02] p-5 text-center transition-colors hover:bg-white/[0.04]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-ember/10 text-ember ring-1 ring-ember/20">
                <b.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold leading-tight text-white">
                  {b.label}
                </div>
                <div className="mt-1 text-xs text-slate-500">{b.sub}</div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Running orange ticker — replaces the boxed callout */}
        <Reveal delay={0.1}>
          <div className="relative mt-14 overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max animate-marquee items-center">
              {[0, 1].map((dup) => (
                <div
                  key={dup}
                  aria-hidden={dup === 1}
                  className="flex shrink-0 items-center"
                >
                  {marqueeItems.map((item, i) => (
                    <span key={i} className="inline-flex items-center">
                      <span className="whitespace-nowrap px-6 text-base font-semibold uppercase tracking-[0.18em] text-ember md:text-lg">
                        {item}
                      </span>
                      <Flame className="h-4 w-4 shrink-0 text-ember/50" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
