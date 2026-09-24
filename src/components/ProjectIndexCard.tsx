import type { Project } from '../data/types';
import Reveal from './Reveal';

interface Props {
  project: Project;
  delay?: number;
}

export default function ProjectIndexCard({ project, delay = 0 }: Props) {
  return (
    <Reveal delay={delay}>
      <a
        href={`#project-${project.id}`}
        className="group block border-t border-line py-8 transition-colors hover:bg-paper/40"
      >
        <div className="flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-6">
            <span className="num-tag text-2xl text-line group-hover:text-signal">
              {project.number}
            </span>
            <div>
              <h3 className="font-display text-2xl text-ink sm:text-3xl">{project.title}</h3>
              <p className="mt-1 text-sm text-muted">{project.category}</p>
            </div>
          </div>
          <span className="ml-11 text-sm text-signal-deep opacity-0 transition-opacity group-hover:opacity-100 sm:ml-0">
            Read case study
          </span>
        </div>
      </a>
    </Reveal>
  );
}
