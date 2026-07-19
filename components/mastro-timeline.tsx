"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

const phases = [
  ["01", "Rebranding", "Colori, font ed elementi grafici ripensati per rendere riconoscibile l’identità del locale."],
  ["02", "Esperienza", "Menu e materiali stampati riprogettati per guidare la scelta e valorizzare l’offerta."],
  ["03", "Operatività", "Gestionali per vini, turni e prenotazioni per ridurre passaggi manuali e dispersioni."],
  ["04", "Comunicazione", "Contenuti costruiti sui valori del locale per raccontare qualità, tradizione e accoglienza."],
];

export function MastroTimeline() {
  const refs = useRef<Array<HTMLLIElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
      });
    }, { threshold: 0.6 });
    refs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const style = { "--timeline-progress": String(active / (phases.length - 1)) } as CSSProperties;
  return <ol className="mastro-timeline" style={style}>
    {phases.map(([number, title, description], index) => <li key={title} data-index={index} ref={(node) => { refs.current[index] = node; }} className={index <= active ? "active" : ""}>
      <span className="timeline-dot" aria-hidden />
      <span className="timeline-number">{number}</span>
      <div><h3>{title}</h3><p>{description}</p></div>
    </li>)}
  </ol>;
}
