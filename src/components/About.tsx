import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const STACK = [
  'Python',
  'SQL',
  'R',
  'Apache Spark',
  'PySpark',
  'Databricks',
  'Power BI',
  'Django',
  'Git / GitHub',
];

export default function About() {
  return (
    <section id="about" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="02"
          title="About"
          dek="A student, but I build."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.05}>
            <div className="space-y-6 text-lg leading-relaxed text-ink2">
              <p>
                I started with Mathematics, moved into Big Data Analytics, and learned by
                building projects across data, AI, visualization and technology. I'm currently
                in Part 2 of my M.Sc., and still looking for my first professional internship.
              </p>
              <p>
                Alongside academics, I've also worked hands-on in building and managing my own
                brand — which has given me experience across websites, social media, content,
                marketing, sales, design and digital business work, not just the technical side.
              </p>
              <p>
                Now I'm looking to bring that combination of analytical thinking, technical
                skills, creativity and real-world initiative into my first professional
                internship.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="border border-line bg-paper/60 p-8">
              <p className="num-tag text-xs uppercase tracking-wide text-muted">Working with</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {STACK.map((tech) => (
                  <li
                    key={tech}
                    className="border border-line bg-cream px-3 py-1.5 text-sm text-ink2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
