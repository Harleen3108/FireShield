"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Battery,
  Signal,
  Wind,
  Flame,
  Plane,
  Circle,
} from "lucide-react";
import { GisMap } from "./gis-map";

const incidents = [
  { id: "GA-2041", area: "Mollem Ghat", level: "Critical", color: "text-alert", dot: "bg-alert" },
  { id: "GA-2038", area: "Valpoi Forest", level: "Active", color: "text-ember", dot: "bg-ember" },
  { id: "GA-2035", area: "Canacona Hills", level: "Monitoring", color: "text-sky-400", dot: "bg-sky-400" },
];

const telemetry = [
  { icon: Battery, label: "Battery", value: "78%" },
  { icon: Signal, label: "Link", value: "Strong" },
  { icon: Wind, label: "Wind", value: "14 km/h" },
];

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ perspective: 1200 }}
      className="relative"
    >
      {/* glow behind */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-ember/20 via-transparent to-alert/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-base-800/80 shadow-2xl shadow-black/50 backdrop-blur-xl">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-alert/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-india-green/70" />
            </span>
            <span className="ml-2 text-xs font-medium text-slate-400">
              FireShield Command · Goa
            </span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-india-green/10 px-2.5 py-1 text-[10px] font-semibold text-india-green">
            <Circle className="h-2 w-2 fill-india-green" />
            LIVE
          </span>
        </div>

        <div className="grid grid-cols-5">
          {/* map + live feed panel */}
          <div className="relative col-span-3 flex flex-col border-r border-white/10">
            {/* GIS map */}
            <div className="relative">
              <GisMap className="aspect-[4/3]" />
              <div className="absolute left-2.5 top-2.5 rounded-md bg-black/40 px-2 py-1 text-[9px] font-medium text-slate-300 backdrop-blur sm:text-[10px]">
                GIS · Live Hotspots
              </div>
              <div className="absolute bottom-2 left-2.5 flex flex-wrap gap-x-2 gap-y-0.5 text-[9px] text-slate-300">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-alert" /> Critical
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" /> Active
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> Watch
                </span>
              </div>
            </div>

            {/* live drone feed — fills the vacant vertical space */}
            <div className="relative min-h-[120px] flex-1 overflow-hidden border-t border-white/10">
              <video
                src="/img/phone-clean.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute left-2 top-2 flex items-center gap-1 rounded bg-black/50 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-alert motion-safe:animate-pulse" />
                Drone Feed · Live
              </span>
            </div>
          </div>

          {/* side panel */}
          <div className="col-span-2 flex flex-col gap-3 p-2.5 sm:p-3.5">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              <Activity className="h-3.5 w-3.5 text-ember" />
              Active Incidents
            </div>

            <div className="space-y-2">
              {incidents.map((inc, i) => (
                <motion.div
                  key={inc.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.15 }}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-2"
                >
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="whitespace-nowrap text-[11px] font-semibold text-white">
                      {inc.id}
                    </span>
                    <span className={`flex items-center gap-1 whitespace-nowrap text-[9px] font-medium sm:text-[10px] ${inc.color}`}>
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${inc.dot}`} />
                      {inc.level}
                    </span>
                  </div>
                  <div className="mt-0.5 truncate text-[10px] text-slate-500">{inc.area}</div>
                </motion.div>
              ))}
            </div>

            {/* drone telemetry */}
            <div className="mt-auto rounded-lg border border-white/10 bg-gradient-to-b from-ember/[0.08] to-transparent p-3">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-white">
                <Plane className="h-3.5 w-3.5 text-ember" />
                Scanner Glider · SG-02
              </div>
              <div className="mt-2 space-y-1.5">
                {telemetry.map((t) => (
                  <div key={t.label} className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
                      <t.icon className="h-3 w-3 shrink-0" />
                      {t.label}
                    </span>
                    <span className="whitespace-nowrap text-[11px] font-semibold text-white">
                      {t.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-alert/10 px-3 py-2">
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-alert">
                <Flame className="h-3.5 w-3.5" />
                Spread risk: High
              </span>
              <span className="text-[10px] text-slate-400">+18%/hr</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
