import { socials } from '../data/socials';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="11" title="Let's connect" />

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-xl font-display text-3xl leading-snug text-ink sm:text-4xl">
            Have a problem worth exploring with data?
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-4">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group bg-cream p-6 transition-colors hover:bg-paper"
            >
              <span className="text-sm text-muted">Connect on</span>
              <span className="mt-1 block font-display text-xl text-ink group-hover:text-signal-deep">
                LinkedIn
              </span>
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="group bg-cream p-6 transition-colors hover:bg-paper"
            >
              <span className="text-sm text-muted">Browse my</span>
              <span className="mt-1 block font-display text-xl text-ink group-hover:text-signal-deep">
                GitHub
              </span>
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="group bg-cream p-6 transition-colors hover:bg-paper"
            >
              <span className="text-sm text-muted">Reach me by</span>
              <span className="mt-1 block break-all font-display text-xl text-ink group-hover:text-signal-deep">
                Email
              </span>
            </a>
            <a
              href={socials.resumePath}
              download
              className="group bg-cream p-6 transition-colors hover:bg-paper"
            >
              <span className="text-sm text-muted">Download my</span>
              <span className="mt-1 block font-display text-xl text-ink group-hover:text-signal-deep">
                Résumé
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
