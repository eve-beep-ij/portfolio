import { useMemo } from "react";

export default function Stars({ count = 160 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2.5 + 1.5, // 1.5px - 4px
        delay: Math.random() * 6,
        duration: Math.random() * 3 + 2,
        glow: Math.random() > 0.8,
      })),
    [count]
  );

  const shooting = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        id: i,
        top: Math.random() * 40,
        left: 40 + Math.random() * 60,
        delay: i * 5 + Math.random() * 4,
      })),
    []
  );

  return (
    <div className="stars" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className={`star ${s.glow ? "star-glow" : ""}`}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
      {shooting.map((s) => (
        <span
          key={`m${s.id}`}
          className="shooting-star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}