import { additionalAcademicBackground, journeySteps } from '../data/journey';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Journey() {
  return (
    <section id="journey" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="03"
          title="My Journey"
          dek="Mathematics → Data → Big Data → AI — and, alongside it, a real brand I've helped build and run."
        />

        <div className="mt-14 border-t border-line">
          {journeySteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05}>
              <div className="grid grid-cols-[64px_1fr] gap-6 border-b border-line py-6 sm:grid-cols-[96px_1fr] sm:gap-10">
                <span className="num-tag pt-1 text-lg text-signal-deep sm:text-xl">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-prose text-muted">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 border-l-2 border-line pl-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">
              {additionalAcademicBackground.title}
            </p>
            <p className="mt-2 max-w-prose text-sm text-muted">
              {additionalAcademicBackground.description}
            </p>
            <p className="mt-1 text-sm italic text-muted">{additionalAcademicBackground.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
