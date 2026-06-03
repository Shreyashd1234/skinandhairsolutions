import { useRef, useState } from "react";

export function BeforeAfter({ before, after, label }: { before: string; after: string; label?: string }) {
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement | null>(null);

  const onMove = (clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  return (
    <div
      ref={wrap}
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-secondary select-none"
      onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
    >
      <img src={after} alt={`After ${label ?? ""}`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={`Before ${label ?? ""}`} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-white/90" />
        <button
          aria-label="Drag to compare"
          onMouseDown={(e) => { e.preventDefault(); const m = (ev: MouseEvent) => onMove(ev.clientX); const u = () => { window.removeEventListener("mousemove", m); window.removeEventListener("mouseup", u); }; window.addEventListener("mousemove", m); window.addEventListener("mouseup", u); }}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white text-primary shadow-xl ring-1 ring-black/5"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M8 7L3 12l5 5V7zm8 0v10l5-5l-5-5z" /></svg>
        </button>
      </div>
      <div className="absolute left-4 top-4 rounded-full bg-foreground/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-background">Before</div>
      <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground">After</div>
    </div>
  );
}
