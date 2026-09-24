import {
  businessDataNote,
  entrepreneurshipAreas,
  entrepreneurshipIntro,
  websiteDistinction,
} from '../data/entrepreneurship';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const SCREENSHOTS = [
  {
    title: 'Homepage',
    image: `${import.meta.env.BASE_URL}al-rasal-images/al-rasal-homepage.png`,
  },
  {
    title: 'Product / Menu Page',
    image: `${import.meta.env.BASE_URL}al-rasal-images/al-rasal-menu.png`,
  },
  {
    title: 'Admin Interface',
    image: `${import.meta.env.BASE_URL}al-rasal-images/al-rasal-admin.png`,
  },
];

export default function Entrepreneurship() {
  return (
    <section id="entrepreneurship" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="07"
          title="Entrepreneurship"
          dek={entrepreneurshipIntro}
        />

        <Reveal delay={0.05}>
          <div className="mt-14 border border-line p-8 sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <p className="num-tag text-sm text-signal-deep">
                  Brand Building
                </p>

                <h3 className="mt-2 font-display text-3xl text-ink">
                  Al Ras'al
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Django', 'Python', 'HTML', 'CSS'].map((t) => (
                  <span
                    key={t}
                    className="border border-line px-3 py-1 text-xs text-ink2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {SCREENSHOTS.map((screenshot) => (
                <div
                  key={screenshot.title}
                  className="overflow-hidden border border-line bg-paper/40"
                >
                  <img
                    src={screenshot.image}
                    alt={`Al Ras'al ${screenshot.title}`}
                    className="aspect-[4/3] w-full object-cover"
                  />

                  <div className="border-t border-line px-4 py-3 text-sm text-ink2">
                    {screenshot.title}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {entrepreneurshipAreas.map((area) => (
                <div key={area.label}>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {area.label}
                  </h4>

                  <ul className="mt-3 space-y-2 text-sm text-ink2">
                    {area.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 bg-signal"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-signal-deep">
                  Website Development
                </h4>

                <p className="mt-2 text-sm text-ink2">
                  {websiteDistinction.development}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-signal-deep">
                  Website Management
                </h4>

                <p className="mt-2 text-sm text-ink2">
                  {websiteDistinction.management}
                </p>
              </div>
            </div>

            <p className="mt-8 border-l-2 border-signal-soft pl-4 text-sm italic text-muted">
              {businessDataNote}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <span className="text-muted">
                GitHub link — add when available
              </span>

              <span className="text-muted">
                Live site link — add when available
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}