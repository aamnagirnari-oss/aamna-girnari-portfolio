import Reveal from './Reveal';

interface SectionHeadingProps {
  number: string;
  title: string;
  dek?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ number, title, dek, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : ''}>
      <div
        className={`flex items-baseline gap-4 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="num-tag text-sm text-signal-deep">{number}</span>
        <span className="h-px w-10 bg-line" aria-hidden="true" />
      </div>
      <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {dek && (
        <p className={`mt-4 max-w-prose text-lg text-muted ${align === 'center' ? 'mx-auto' : ''}`}>
          {dek}
        </p>
      )}
    </Reveal>
  );
}
