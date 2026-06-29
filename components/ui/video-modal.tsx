"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX } from "lucide-react";

export function VideoModal({
  open,
  onClose,
  src = "/img/video-clean.mp4",
}: {
  open: boolean;
  onClose: () => void;
  src?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Play from the start when opened; pause when closed.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (open) {
      v.currentTime = 0;
      v.muted = muted;
      v.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      v.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Esc to close + lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Blurred, dark-blue backdrop */}
          <button
            aria-label="Close video"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-navy-deep/85 backdrop-blur-md"
          />

          {/* Video card */}
          <motion.div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-base-900 shadow-2xl shadow-black/60"
            initial={{ scale: 0.94, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.94, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-ember"
            >
              <X className="h-4 w-4" />
            </button>

            <video
              ref={videoRef}
              src={src}
              playsInline
              onClick={togglePlay}
              onTimeUpdate={(e) => {
                const v = e.currentTarget;
                setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0);
              }}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              className="aspect-video w-full cursor-pointer bg-black"
            />

            {/* Custom controls */}
            <div className="flex items-center gap-3 border-t border-white/10 bg-base-900 px-4 py-3">
              <button
                onClick={togglePlay}
                aria-label={playing ? "Pause" : "Play"}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ember text-white transition-colors hover:bg-ember-dark"
              >
                {playing ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4 translate-x-[1px]" />
                )}
              </button>

              <button
                onClick={toggleMute}
                aria-label={muted ? "Unmute" : "Mute"}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-slate-200 transition-colors hover:bg-white/5"
              >
                {muted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>

              {/* Progress bar */}
              <div
                onClick={seek}
                className="group relative h-1.5 flex-1 cursor-pointer rounded-full bg-white/10"
              >
                <div
                  className="h-full rounded-full bg-ember"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <span className="hidden shrink-0 text-xs font-medium text-slate-400 sm:block">
                FireShield Demo
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
