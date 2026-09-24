import { skillGroups, TOOLKIT_DEK, TOOLKIT_ORDER } from '../data/skills';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Toolkit() {
  return (
    <section id="toolkit" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="09"
          title="Toolkit"
          dek="Technical, Analytical, Creative and Business — four sides of the same profile."
        />

        <div className="mt-14 space-y-14">
          {TOOLKIT_ORDER.map((meta, metaIndex) => {
            const groups = skillGroups.filter((g) => g.meta === meta);
            return (
              <Reveal key={meta} delay={metaIndex * 0.06}>
                <div className="flex items-baseline gap-4 border-b border-line pb-3">
                  <h3 className="font-display text-2xl text-ink">{meta}</h3>
                  <span className="text-sm text-muted">{TOOLKIT_DEK[meta]}</span>
                </div>
                <div className="mt-6 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
                  {groups.map((group) => (
                    <div key={group.label} className="bg-cream p-5">
                      <h4 className="text-sm font-semibold text-ink">{group.label}</h4>
                      <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-ink2">
                        {group.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
