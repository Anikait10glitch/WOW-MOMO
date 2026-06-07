// Veg/non-veg mark + optional spicy chili, sized to overlay the bottom-right
// corner of a dish image. Parent should be position:relative.

// Minimalist red chili (with a small green stem) — reused in badges and legends.
export function Chili({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11.8 5.2C8.8 6.4 7.8 9.4 8.4 12.4 8.9 15 9 17 9.2 19c1.6-2.2 3.8-5 4.4-8 .6-3-.2-4.8-1.8-5.8z" fill="#E2231A" />
      <path d="M11.8 5.2c-.2-1.6.8-2.6 2.4-2.4-1 .4-1.6 1.2-1.5 2.2z" fill="#2E7D32" />
    </svg>
  );
}

function VegMark({ veg }) {
  const c = veg ? '#1E8E3E' : '#C8102E';
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm border-2 bg-white" style={{ borderColor: c }} aria-label={veg ? 'Veg' : 'Non-veg'}>
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c }} />
    </span>
  );
}

function SpicyMark() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm border border-brand-ink/10 bg-white" aria-label="Spicy" title="Spicy">
      <Chili size={14} />
    </span>
  );
}

export default function DishBadges({ veg, spicy }) {
  return (
    <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
      {spicy && <SpicyMark />}
      <VegMark veg={veg} />
    </div>
  );
}
