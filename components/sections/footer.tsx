import { Logo } from "../ui/logo";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Technology", href: "#technology" },
      { label: "Drone Fleet", href: "#home" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Partnerships", href: "#contact" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Data Sovereignty", href: "#" },
      { label: "DGCA Compliance", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-base-900">
      <div className="tricolor-strip h-[3px] w-full" />
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              AI-powered fire detection, drone deployment &amp; emergency
              response — built for India&apos;s fire departments.
            </p>
            <p className="mt-4 text-xs font-medium text-slate-500">
              Faster. Smarter. Safer.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-ember"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 Avani Skyops. A{" "}
            <span className="font-medium text-india-saffron">
              Make in India
            </span>{" "}
            initiative.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-block h-2 w-3 rounded-sm bg-india-saffron" />
            <span className="inline-block h-2 w-3 rounded-sm bg-white/80" />
            <span className="inline-block h-2 w-3 rounded-sm bg-india-green" />
            <span className="ml-1">Proudly built in India</span>
          </div>
        </div>
        <p className="mt-6 text-center text-[11px] text-slate-600">
          Imagery courtesy of Wikimedia Commons contributors — illustrative
          placeholders pending licensed Avani Skyops photography.
        </p>
      </div>
    </footer>
  );
}
