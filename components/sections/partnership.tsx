"use client";

import { Quote, Building2, Landmark } from "lucide-react";
import { Reveal } from "../ui/reveal";

export function Partnership() {
  return (
    <section className="section-pad relative">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-light/60 via-navy-deep/60 to-base-900 p-8 md:p-14">
            {/* tricolor accent edge */}
            <div className="tricolor-strip absolute inset-x-0 top-0 h-1" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-ember/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-8 text-center">
              <Quote className="h-10 w-10 text-ember/60" />
              <p className="max-w-3xl font-display text-2xl font-medium leading-relaxed text-white md:text-3xl md:leading-relaxed">
                &ldquo;Developed in partnership with{" "}
                <span className="text-ember">
                  Goa Fire &amp; Emergency Services
                </span>{" "}
                under the guidance of{" "}
                <span className="text-ember">IPS [XYZ]</span> — bringing
                AI-driven coordination to the frontline of disaster
                response.&rdquo;
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3">
                  <Building2 className="h-7 w-7 text-india-saffron" />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white">
                      Goa Fire &amp; Emergency Services
                    </div>
                    <div className="text-xs text-slate-500">Operational Partner</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3">
                  <Landmark className="h-7 w-7 text-india-green" />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white">
                      Government of Goa
                    </div>
                    <div className="text-xs text-slate-500">Patron</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
