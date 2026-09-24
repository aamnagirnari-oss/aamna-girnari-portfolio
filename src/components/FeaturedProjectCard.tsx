import type { Project } from '../data/types';

export default function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex min-w-[82%] snap-center flex-col border border-line bg-cream p-7 sm:min-w-0">
      <div className="flex items-baseline justify-between">
        <span className="num-tag text-sm text-line">{project.number}</span>
        <span className="text-xs uppercase tracking-wide text-muted">{project.category}</span>
      </div>

      <h3 className="mt-5 font-display text-2xl leading-tight text-ink">{project.title}</h3>
      {project.subtitle && <p className="mt-2 text-sm text-muted">{project.subtitle}</p>}
      <p className="mt-4 text-sm leading-relaxed text-ink2">{project.summary}</p>

      {project.dataset && (
        <p className="mt-4 text-xs text-muted">Dataset: {project.dataset}</p>
      )}

      {project.results && (
        <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm text-ink2">
          {project.results.map((r) => (
            <li key={r} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 bg-signal" aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>
      )}

      {project.future && (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Future work (from the repo)
          </p>
          <ul className="mt-2 space-y-1 text-xs text-muted">
            {project.future.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {project.note && <p className="mt-4 text-xs italic text-muted">{project.note}</p>}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span key={t} className="border border-line px-2 py-0.5 text-[11px] text-ink2">
            {t}
          </span>
        ))}
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:text-signal-deep hover:decoration-signal-deep"
        >
          View on GitHub
        </a>
      )}
    </article>
  );
}
