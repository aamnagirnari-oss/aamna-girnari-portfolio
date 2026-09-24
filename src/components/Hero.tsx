import { motion } from 'framer-motion';
import { socials } from '../data/socials';
import { useReducedMotion } from '../hooks/useReducedMotion';

const NODES = [
  { x: 40, y: 60 },
  { x: 160, y: 30 },
  { x: 260, y: 100 },
  { x: 120, y: 160 },
  { x: 230, y: 210 },
  { x: 40, y: 220 },
  { x: 320, y: 40 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [3, 5],
  [2, 6],
  [0, 3],
];

function NodeGraphic() {
  const reduced = useReducedMotion();
  return (
    <svg
      viewBox="0 0 360 260"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of connected data nodes"
    >
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="#D9D1BC"
          strokeWidth={1}
        />
      ))}
      {NODES.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 3 ? 7 : 4.5}
          fill={i === 3 ? '#D98E2B' : '#15140F'}
          animate={
            reduced
              ? undefined
              : {
                  opacity: [0.55, 1, 0.55],
                }
          }
          transition={
            reduced
              ? undefined
              : {
                  duration: 3.2,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: 'easeInOut',
                }
          }
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line px-6 pt-32 pb-20 sm:pt-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="num-tag text-sm text-signal-deep">
            B.Sc. Mathematics <span className="text-line">→</span> M.Sc. Big Data Analytics — Part 2
          </p>

          <h1 className="mt-5 font-display text-[15vw] font-light leading-[0.88] tracking-tight text-ink sm:text-[9rem] lg:text-[8rem]">
            Aamna
            <br />
            Girnari
          </h1>

          <p className="mt-8 font-display text-2xl italic text-ink2 sm:text-3xl">
            Data × AI × Big Data
          </p>

          <p className="mt-6 max-w-prose text-lg text-muted">
            Building data-driven projects, exploring AI, and turning ideas into working systems —
            currently looking for my first professional internship.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="border border-ink bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-signal-deep hover:border-signal-deep"
            >
              View my work
            </a>
            <a
              href={socials.resumePath}
              download
              className="border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Download résumé
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal-deep">
              LinkedIn
            </a>
            <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-signal-deep">
              GitHub
            </a>
            <a href={`mailto:${socials.email}`} className="hover:text-signal-deep">
              Email
            </a>
          </div>
        </div>

        <div className="h-56 w-full max-w-sm shrink-0 lg:h-72">
          <NodeGraphic />
        </div>
      </div>
    </section>
  );
}
