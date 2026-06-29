import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  const imgSize = size === "lg" ? "h-12" : "h-9";
  const textSize = size === "lg" ? "text-3xl" : "text-2xl";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/img/logo-badge.png"
        alt="FireShield logo"
        width={726}
        height={637}
        priority
        className={cn("w-auto object-contain", imgSize)}
      />
      <span
        className={cn(
          "font-display font-bold leading-none tracking-tight text-white",
          textSize,
        )}
      >
        Fire<span className="text-ember">Shield</span>
      </span>
    </span>
  );
}
