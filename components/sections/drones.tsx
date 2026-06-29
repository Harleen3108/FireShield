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

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2">
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
                  <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-400 backdrop-blur">
                    Made in India
                  </span>
                  <span
                    className={`absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl ring-1 backdrop-blur ${
                      accent === "ember"
                        ? "bg-ember/10 text-ember ring-ember/25"
                        : "bg-alert/10 text-alert ring-alert/25"
                    }`}
                  >
                    <d.icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="relative p-8">
                  <h3 className="text-2xl font-bold text-white">{d.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">{d.tagline}</p>

                  <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                    {d.specs.map((s) => (
                      <div key={s.label}>
                        <dt className="flex items-center gap-1.5 text-xs text-slate-500">
                          <s.icon className="h-3.5 w-3.5" />
                          {s.label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-white">
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
