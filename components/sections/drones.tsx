"use client";

import { motion } from "framer-motion";
import { Plane, Rocket, MapPin, Gauge, Timer, Package } from "lucide-react";
import { SectionHeading } from "../ui/section-heading";
import { StaggerGroup, staggerItem } from "../ui/reveal";
import { GliderSchematic, PayloadSchematic } from "../visuals/drone-schematic";

const drones = [
  {
    icon: Plane,
    Schematic: GliderSchematic,
    name: "Scanner Glider",
    tagline: "Long-endurance patrol & thermal detection",
    accent: "ember",
    specs: [
      { icon: MapPin, label: "Range", value: "120 km" },
      { icon: Timer, label: "Endurance", value: "6+ hours" },
      { icon: Gauge, label: "Payload", value: "Thermal + EO" },
    ],
  },
  {
    icon: Rocket,
    Schematic: PayloadSchematic,
    name: "Payload Delivery Drone",
    tagline: "Fire-resistant precision suppression",
    accent: "alert",
    specs: [
      { icon: MapPin, label: "Range", value: "15 km" },
      { icon: Timer, label: "Endurance", value: "35 min" },
      { icon: Package, label: "Payload", value: "8 kg agent" },
    ],
  },
];

export function Drones() {
  return (
    <section className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="Drone Fleet"
          title="Eyes in the sky. Suppression on demand."
          subtitle="A two-tier autonomous fleet — one to find the fire, one to fight it — designed and assembled in India."
        />

        <StaggerGroup className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6">
          {drones.map((d) => {
            const accent = d.accent === "ember" ? "ember" : "alert";
            const Schematic = d.Schematic;
            return (
              <motion.div
                key={d.name}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent"
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-opacity ${
                    accent === "ember" ? "bg-ember/15" : "bg-alert/15"
                  }`}
                />

                {/* blueprint schematic header */}
                <div className="relative border-b border-white/10 bg-base-900/40">
                  <div className="aspect-[2/1]">
                    <Schematic />
                  </div>
                  <span className="absolute right-2 top-2 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[8px] font-medium uppercase tracking-wide text-slate-400 backdrop-blur sm:right-4 sm:top-4 sm:px-3 sm:py-1 sm:text-[11px]">
                    Made in India
                  </span>
                  <span
                    className={`absolute left-2 top-2 grid h-8 w-8 place-items-center rounded-lg ring-1 backdrop-blur sm:left-4 sm:top-4 sm:h-11 sm:w-11 sm:rounded-xl ${
                      accent === "ember"
                        ? "bg-ember/10 text-ember ring-ember/25"
                        : "bg-alert/10 text-alert ring-alert/25"
                    }`}
                  >
                    <d.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                </div>

                <div className="relative p-4 sm:p-8">
                  <h3 className="text-base font-bold leading-tight text-white sm:text-2xl">
                    {d.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 sm:mt-2 sm:text-sm">
                    {d.tagline}
                  </p>

                  <dl className="mt-4 grid grid-cols-1 gap-2 border-t border-white/10 pt-4 sm:mt-6 sm:grid-cols-3 sm:gap-3 sm:pt-6">
                    {d.specs.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-center justify-between sm:block"
                      >
                        <dt className="flex items-center gap-1.5 text-[11px] text-slate-500 sm:text-xs">
                          <s.icon className="h-3.5 w-3.5" />
                          {s.label}
                        </dt>
                        <dd className="text-right text-xs font-semibold text-white sm:mt-1 sm:text-left sm:text-sm">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>

        <p className="mt-8 text-center text-sm text-slate-500">
          Designed &amp; assembled in India — engineered for monsoon, coastal,
          and forest terrain.
        </p>
      </div>
    </section>
  );
}
