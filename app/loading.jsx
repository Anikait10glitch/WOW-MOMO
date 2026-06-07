export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-cream" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <span className="h-10 w-10 animate-spin rounded-full border-4 border-brand-red/20 border-t-brand-red" />
        <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand-ink/50">Loading the Wow…</span>
      </div>
    </div>
  );
}
