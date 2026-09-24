import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const CAPABILITIES = [
  'Dashboard Development',
  'Data Exploration',
  'Visual Analytics',
  'Data Storytelling',
];

const DASHBOARDS = [
  {
    title: 'Genome / Gene Structure Dashboard',
    image: '/dashboard-images/genome-dashboard.png',
  },
];

export default function DataVisualization() {
  return (
    <section
      id="data-visualization"
      className="border-b border-line px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="05"
          title="Data Visualization"
          dek="Power BI is where a lot of my analysis ends up — turning a validated dataset into something a reader can actually explore."
        />

        <Reveal delay={0.05}>
          <div className="mt-14 flex flex-wrap gap-2">
            {CAPABILITIES.map((capability) => (
              <span
                key={capability}
                className="border border-line px-3 py-1.5 text-sm text-ink2"
              >
                {capability}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {DASHBOARDS.map((dashboard, index) => (
            <Reveal
              key={dashboard.title}
              delay={0.08 + index * 0.05}
            >
              <div className="overflow-hidden border border-line bg-paper/40">
                <img
                  src={dashboard.image}
                  alt={dashboard.title}
                  className="aspect-[16/10] w-full object-cover"
                />

                <div className="border-t border-line px-4 py-3 text-sm text-ink2">
                  {dashboard.title}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <p className="mt-8 max-w-prose text-ink2">
            The clearest example so far is the gene/transcript structure
            exploration built on top of the Genome & Gene Structure Analysis
            project — see the full case study in{' '}
            <a
              href="#project-genome-analysis"
              className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-signal-deep hover:decoration-signal-deep"
            >
              Selected Projects
            </a>
            . More dashboards will be added here as I build them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}