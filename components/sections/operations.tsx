"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/section-heading";
import { StaggerGroup, staggerItem } from "../ui/reveal";

const cards = [
  {
    img: "/img/truck.jpg",
    tag: "Ground Response",
    title: "Coordinated Dispatch",
    description:
      "Units, water tenders, and crews routed in real time from a single command view — no radio guesswork.",
  },
  {
    img: "/img/ff-spray.jpg",
    tag: "Suppression",
    title: "Precision Firefighting",
    description:
      "AI spread models tell crews where the fire is heading, so suppression hits the frontline first.",
  },
  {
    img: "/img/heli.jpg",
    tag: "Aerial Recon",
    title: "Eyes Above the Fire",
    description:
      "Helicopters and scanner drones stream live thermal imagery straight into the GIS dashboard.",
  },
];

export function Operations() {
  return (
    <section className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="In the Field"
          title="From the command center to the frontline"
          subtitle="FireShield connects every layer of the response — ground crews, aerial assets, and AI — into one coordinated operation."
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <motion.article
              key={c.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-base-800/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/30 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-ember/40 bg-base-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ember backdrop-blur">
                  {c.tag}
                </span>
              </div>
              <div className="relative -mt-10 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-500 transition-colors group-hover:text-ember" />
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {c.description}
                </p>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
