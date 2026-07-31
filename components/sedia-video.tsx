"use client";

import { useEffect, useRef } from "react";

export function SediaVideo({
  mp4,
  webm,
  poster,
  caption,
  title,
  className = "",
}: {
  mp4: string;
  webm: string;
  poster: string;
  caption: string;
  title?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) node.play().catch(() => {});
        else node.pause();
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className={`sedia-video-frame ${className}`}>
      <div className="sedia-video-wrap">
        <video ref={videoRef} className="sedia-video" muted playsInline loop preload="none" poster={poster}>
          <source src={webm} type="video/webm" />
          <source src={mp4} type="video/mp4" />
        </video>
        <figcaption className="sedia-video-caption">
          {title && <strong className="sedia-video-caption-title">{title}</strong>}
          {caption}
        </figcaption>
      </div>
    </figure>
  );
}
