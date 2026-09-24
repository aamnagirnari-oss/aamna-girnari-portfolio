import type { Project } from '../data/types';

export default function MinorProjectCard({ project }: { project: Project }) {
  return (
    <article className="min-w-[75%] shrink-0 snap-center border border-line/70 p-5 sm:min-w-0">
      <div className="flex items-baseline justify-between">
        <span className="num-tag text-xs text-line">{project.number}</span>
        <span className="text-[11px] uppercase tracking-wide text-muted">{project.category}</span>
      </div>
      <h4 className="mt-3 font-display text-lg text-ink">{project.title}</h4>
      <p className="mt-2 text-sm text-muted">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span key={t} className="text-[11px] text-muted">
            {t}
          </span>
        ))}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-xs font-medium text-signal-deep underline underline-offset-2"
        >
          GitHub
        </a>
      )}
    </article>
  );
}
