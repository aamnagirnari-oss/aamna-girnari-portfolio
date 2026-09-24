import type { Project } from '../data/types';
import Reveal from './Reveal';

interface Props {
  project: Project;
}

export default function CaseStudyBlock({ project }: Props) {
  const cs = project.caseStudy;

  return (
    <article
      id={`project-${project.id}`}
      className="scroll-mt-28 border-b border-line py-20 first:pt-0"
    >
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <Reveal>
          <span className="num-tag block text-6xl text-line lg:sticky lg:top-28">
            {project.number}
          </span>
        </Reveal>

        <div className="max-w-3xl">
          <Reveal>
            <p className="num-tag text-sm text-signal-deep">{project.category}</p>
            <h3 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="mt-3 text-lg text-muted">{project.subtitle}</p>
            )}
            <p className="mt-6 text-lg leading-relaxed text-ink2">{project.summary}</p>
          </Reveal>

          {project.stats && (
            <Reveal delay={0.05}>
              <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-5">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="bg-cream p-4">
                    <p className="num-tag text-xl text-ink sm:text-2xl">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
              {project.dataset && (
                <p className="mt-3 text-sm text-muted">Dataset: {project.dataset}</p>
              )}
            </Reveal>
          )}

          {cs && (
            <Reveal delay={0.1}>
              <div className="mt-10 space-y-8">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-ink">
                    Problem
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {cs.problem.map((item) => (
                      <li key={item} className="flex gap-3 text-ink2">
                        <span className="mt-2.5 h-1 w-1 shrink-0 bg-signal" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-ink">
                    Approach
                  </h4>
                  <p className="mt-3 text-ink2">{cs.approach}</p>
                </div>

                {cs.architecture && (
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-ink">
                      Architecture
                    </h4>
                    <p className="mt-3 font-mono text-sm leading-relaxed text-ink2">
                      {cs.architecture}
                    </p>
                  </div>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="border border-line p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-signal-deep">
                      Implemented
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-ink2">
                      {cs.implemented.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {cs.planned && (
                    <div className="border border-dashed border-line p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
                        Planned / In progress
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-muted">
                        {cs.planned.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          )}

          {project.note && (
            <Reveal delay={0.15}>
              <p className="mt-8 border-l-2 border-signal-soft pl-4 text-sm italic text-muted">
                {project.note}
              </p>
            </Reveal>
          )}

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="border border-line px-3 py-1 text-xs text-ink2">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          {(project.github || project.docs || project.live) && (
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-signal-deep hover:decoration-signal-deep"
                  >
                    View on GitHub
                  </a>
                )}
                {project.docs && (
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-signal-deep hover:decoration-signal-deep"
                  >
                    Project documentation
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-signal-deep hover:decoration-signal-deep"
                  >
                    Live site
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </article>
  );
}
