import {
  featuredProjects,
  majorProjects,
  minorProjects,
} from '../data/projects';
import CaseStudyBlock from './CaseStudyBlock';
import FeaturedProjectCard from './FeaturedProjectCard';
import MinorProjectCard from './MinorProjectCard';
import ProjectIndexCard from './ProjectIndexCard';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="work" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="04"
          title="Selected Projects"
          dek="The projects I'd point a recruiter to first — big data pipelines, machine learning, and a bioinformatics dataset large enough to need real validation. Not everything here is public on LinkedIn yet."
        />

        <div className="mt-14 border-b border-line">
          {majorProjects.map((project, i) => (
            <ProjectIndexCard
              key={project.id}
              project={project}
              delay={i * 0.06}
            />
          ))}
        </div>

        <div className="mt-28">
          <Reveal>
            <h3 className="font-display text-3xl text-ink sm:text-4xl">
              Case Studies
            </h3>

            <p className="mt-3 max-w-prose text-muted">
              What each project set out to solve, how it was built, and —
              honestly — what's finished versus what's still in progress.
            </p>
          </Reveal>

          <div className="mt-14">
            {majorProjects.map((project) => (
              <CaseStudyBlock
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <h3 className="font-display text-2xl text-ink sm:text-3xl">
              More Projects
            </h3>

            <p className="mt-3 max-w-prose text-muted">
              Smaller, self-contained machine learning and AI projects,
              with the work and results documented for each project.
            </p>
          </Reveal>

          <div className="swipe-row mt-8 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-xl text-ink">
              Other academic work
            </h3>
          </Reveal>

          <div className="swipe-row mt-6 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0">
            {minorProjects.map((project) => (
              <MinorProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}