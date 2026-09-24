import Reveal from './Reveal';

const STATUS = ['M.Sc. Part 2', 'Building', 'Learning', 'Seeking my first internship'];
const AREAS = [
  'Data Analytics',
  'Big Data',
  'Data Science',
  'AI / Machine Learning',
  'Data Engineering',
  'Business Intelligence',
];

export default function Currently() {
  return (
    <section id="currently" className="border-b border-line bg-ink px-6 py-24 text-cream">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="num-tag text-sm text-signal">10</span>
            <span className="h-px w-10 bg-cream/30" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Currently
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap gap-3">
            {STATUS.map((s) => (
              <span key={s} className="num-tag border border-cream/30 px-4 py-2 text-sm text-cream/90">
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-10 max-w-2xl font-display text-2xl italic text-cream/90 sm:text-3xl">
            Seeking my first professional internship opportunity.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            {AREAS.map((area) => (
              <span key={area} className="border border-cream/30 px-4 py-2 text-sm text-cream/90">
                {area}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mt-10 max-w-prose text-lg text-cream/70">
            I'm looking for an opportunity where I can apply what I've learned through projects,
            contribute to real-world problems, and continue developing as a data professional.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
