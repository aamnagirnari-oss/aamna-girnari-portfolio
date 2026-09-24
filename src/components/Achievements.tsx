import { achievement } from '../data/achievements';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Achievements() {
  return (
    <section id="achievements" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="06" title="Research" />

        <Reveal delay={0.05}>
          <div className="mt-14 grid gap-10 border border-line p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:items-start">
            <div className="flex items-center gap-4">
              <span className="font-display text-5xl text-signal">
                {achievement.placement.replace(' Place', '')}
              </span>

              <span className="text-sm uppercase tracking-wide text-muted">
                Place —<br />
                Research Presentation
              </span>
            </div>

            <div>
              <p className="text-lg text-ink2">
                {achievement.description}
              </p>

              <dl className="mt-6 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-muted">Conference / activity</dt>
                  <dd className="text-ink2">{achievement.event}</dd>
                </div>

                <div>
                  <dt className="text-muted">College</dt>
                  <dd className="text-ink2">{achievement.college}</dd>
                </div>

                <div className="sm:col-span-2">
                  <dt className="text-muted">Research title</dt>
                  <dd className="text-ink2">
                    {achievement.researchTitle}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}