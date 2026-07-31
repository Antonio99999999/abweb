"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 45, prefix: "+", label: "visibilità online" },
  { value: 35, prefix: "+", label: "prenotazioni" },
  { value: 30, prefix: "−", label: "tempo di gestione" },
];

export function CaseMetrics({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  // I valori finali sono già quelli renderizzati lato server: nessun flash di "+0%" prima
  // che il JS parta o per chi non esegue JavaScript. L'animazione, quando riparte da qui,
  // riparte visivamente da zero solo dopo che l'elemento entra nel viewport.
  const [values, setValues] = useState(() => metrics.map((metric) => metric.value));
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const animate = () => {
      if (played) return;
      setPlayed(true);
      setValues(metrics.map(() => 0));
      const start = performance.now();
      const duration = 1800;
      const frame = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValues(metrics.map((metric) => Math.round(metric.value * eased)));
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) animate(); }, { threshold: 0.45 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [played]);

  return <div ref={ref} className={`metric-counts ${className}`} aria-label="Risultati del caso studio">
    {metrics.map((metric, index) => <div key={metric.label}><strong>{metric.prefix}{values[index]}%</strong><span>{metric.label}</span></div>)}
  </div>;
}
