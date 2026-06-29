"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "../ui/reveal";
import { ProgressRing } from "../ui/progress-ring";
import { Button } from "../ui/button";

const points = [
  "Cut detection-to-dispatch time from 30 minutes to under 12",
  "Predict fire spread before it reaches communities",
  "Protect responders with live situational awareness",
];

export function Mission() {
  return (
    <section className="section-pad relative bg-navy-deep/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal direction="right">
            <div className="relative">
              <div className="tricolor-strip absolute -left-3 top-6 h-24 w-1 rounded-full" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[3/2]">
                  <Image
                    src="/img/FireShield.webp"
                    alt="Indian Fire & Rescue Services team in training"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-900/70 via-transparent to-transparent" />
                </div>
              </div>
              {/* floating stat card */}
              <div className="absolute -bottom-6 -right-4 w-48 rounded-xl border border-white/10 bg-base-800/90 p-4 shadow-xl backdrop-blur md:right-6">
                <div className="text-2xl font-bold text-ember">2,400+</div>
                <div className="mt-1 text-xs text-slate-400">
                  Responders supported across drills &amp; live incidents
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy + rings */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ember">
                Our Mission
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Built alongside the people who fight the fire
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                FireShield isn&apos;t built in a lab and handed over. It&apos;s
                shaped with serving fire officers — so every screen, alert, and
                recommendation reflects how response actually works on the
                ground.
              </p>
            </Reveal>

            <ul className="mt-6 space-y-3">
              {points.map((p, i) => (
                <Reveal key={p} delay={0.15 + i * 0.07} as="li">
                  <span className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-india-green" />
                    {p}
                  </span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <div className="mt-9 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
                <ProgressRing
                  value={82}
                  label="Faster detection"
                  sub="vs. satellite-only workflows"
                  color="#FF6B2B"
                />
                <ProgressRing
                  value={94}
                  label="Containment rate"
                  sub="across monitored incidents"
                  color="#E53E3E"
                />
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <Button variant="primary" size="lg" className="mt-9" asChild>
                <a href="#contact">Partner with us</a>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
