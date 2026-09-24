import type { Project } from '../data/types';

export default function ComingSoonCard({ project }: { project: Project }) {
  return (
    <article className="relative min-w-[82%] snap-center overflow-hidden border border-dashed border-ink/40 bg-ink p-7 text-cream sm:min-w-0">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #F5F1E7 0, #F5F1E7 1px, transparent 1px, transparent 14px)',
        }}
        aria-hidden="true"
      />
      <div className="relative flex items-baseline justify-between">
        <span className="num-tag text-sm text-cream/50">{project.number}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="11" width="14" height="9" rx="1.5" stroke="#F5F1E7" strokeWidth="1.6" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="#F5F1E7" strokeWidth="1.6" />
        </svg>
      </div>
      <h3 className="relative mt-6 font-display text-2xl leading-tight">{project.title}</h3>
      <p className="relative mt-3 text-sm text-cream/70">{project.summary}</p>
      <p className="relative mt-6 text-xs uppercase tracking-wide text-signal">
        Unlocks after my class presentation
      </p>
    </article>
  );
}
