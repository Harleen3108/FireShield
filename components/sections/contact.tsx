"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Reveal } from "../ui/reveal";

// WhatsApp number that receives form submissions (country code 91 + number)
const WHATSAPP_NUMBER = "917743040191";

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Full name",
    required: true,
  },
  {
    name: "department",
    label: "Department",
    type: "text",
    placeholder: "e.g. Fire & Emergency Services",
    required: true,
  },
  {
    name: "state",
    label: "State",
    type: "text",
    placeholder: "e.g. Goa",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "+91 ",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@dept.gov.in",
    required: true,
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "partnerships@avaniskyops.in",
    href: "mailto:partnerships@avaniskyops.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 77430 40191",
    href: "tel:+917743040191",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Avani Skyops Command Center, Panaji, Goa 403001, India",
    href: undefined,
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const val = (key: string) =>
      ((data.get(key) as string) || "").trim() || "—";

    const text = [
      "*New Avani Skyops Demo Request*",
      "",
      `*Name:* ${val("name")}`,
      `*Department:* ${val("department")}`,
      `*State:* ${val("state")}`,
      `*Phone:* ${val("phone")}`,
      `*Email:* ${val("email")}`,
      `*Message:* ${val("message")}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad relative bg-navy-deep/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
              <span className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ember">
                Request Demo
              </span>
              <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                Bring Avani Skyops to your department
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Tell us about your team and we&apos;ll arrange a live
                walkthrough of the command dashboard.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-india-green/30 bg-india-green/10 p-10 text-center"
                >
                  <CheckCircle2 className="h-12 w-12 text-india-green" />
                  <h3 className="text-lg font-semibold text-white">
                    Opening WhatsApp…
                  </h3>
                  <p className="max-w-sm text-sm text-slate-400">
                    Your details are ready in a WhatsApp message to our team —
                    just press send. If it didn&apos;t open,{" "}
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-india-green underline"
                    >
                      tap here
                    </a>
                    .
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {fields.map((f) => (
                      <div
                        key={f.name}
                        className={f.name === "message" ? "sm:col-span-2" : ""}
                      >
                        <label
                          htmlFor={f.name}
                          className="mb-1.5 block text-xs font-medium text-slate-400"
                        >
                          {f.label}
                          {f.required && <span className="text-ember"> *</span>}
                        </label>
                        <input
                          id={f.name}
                          name={f.name}
                          type={f.type}
                          required={f.required}
                          placeholder={f.placeholder}
                          className="w-full rounded-lg border border-white/10 bg-base-800/60 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-ember/50 focus:outline-none focus:ring-1 focus:ring-ember/30"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-medium text-slate-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your requirements…"
                      className="w-full resize-none rounded-lg border border-white/10 bg-base-800/60 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-ember/50 focus:outline-none focus:ring-1 focus:ring-ember/30"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Send via WhatsApp
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact info side panel */}
          <Reveal delay={0.1} direction="left">
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 md:p-9">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Talk to our team
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  For procurement, integration, or partnership enquiries, reach
                  us directly.
                </p>
              </div>

              <div className="space-y-5">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-ember/10 text-ember ring-1 ring-ember/20">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-500">
                        {c.label}
                      </div>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="mt-0.5 block text-sm font-medium text-white transition-colors hover:text-ember"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <div className="mt-0.5 text-sm font-medium text-white">
                          {c.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto rounded-xl border border-white/10 bg-base-800/40 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-india-green opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-india-green" />
                  </span>
                  24/7 Command Support
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  Once deployed, departments get round-the-clock operational
                  support from our India-based response team.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
