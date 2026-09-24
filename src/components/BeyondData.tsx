import { capabilityTiles } from '../data/capabilities';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function BeyondData() {
  return (
    <section id="beyond-data" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="08"
          title="Beyond Data"
          dek="The other side of building Al Ras'al — marketing, content, design, website management and AI-assisted creative work."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityTiles.map((tile, i) => (
            <Reveal key={tile.title} delay={i * 0.05}>
              <div className="h-full border border-line p-6">
                <h3 className="font-display text-xl text-ink">{tile.title}</h3>
                <p className="mt-3 text-sm text-ink2">{tile.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tile.tags.map((tag) => (
                    <span key={tag} className="border border-line px-2 py-0.5 text-[11px] text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                {tile.note && (
                  <p className="mt-4 text-xs italic text-muted">{tile.note}</p>
                )}
              </div>
            </Reveal>
          ))}

          <Reveal delay={capabilityTiles.length * 0.05}>
            <div className="flex h-full flex-col justify-center border border-dashed border-line p-6 text-center">
              <p className="text-sm text-muted">
                Branding & product-graphic samples, AI-generated video clips, and social media
                design samples go here.
              </p>
              <p className="mt-2 text-xs text-muted">— add images/clips when ready —</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-prose text-sm text-muted">
            The full story behind this work — what I actually did, for which brand — is in the{' '}
            <a
              href="#entrepreneurship"
              className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-signal-deep hover:decoration-signal-deep"
            >
              Entrepreneurship
            </a>{' '}
            section above.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
