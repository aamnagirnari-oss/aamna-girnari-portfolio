import { useEffect, useState } from 'react';
import { socials } from '../data/socials';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { cx } from '../lib/utils';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#journey', label: 'Journey' },
  { href: '#work', label: 'Work' },
  { href: '#data-visualization', label: 'Data Viz' },
  { href: '#entrepreneurship', label: 'Entrepreneurship' },
  { href: '#beyond-data', label: 'Beyond Data' },
  { href: '#toolkit', label: 'Toolkit' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cx(
          'border-b border-line/80 transition-colors duration-300',
          scrolled ? 'bg-cream/90 backdrop-blur-sm' : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-display text-lg tracking-tight text-ink"
            aria-label="Back to top"
          >
            AG
          </a>

          <ul className="hidden items-center gap-5 xl:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink2 transition-colors hover:text-signal-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden xl:block">
            <a
              href={socials.resumePath}
              download
              className="border border-ink px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Résumé
            </a>
          </div>

          <button
            type="button"
            className="flex flex-col gap-1.5 xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cx(
                'block h-px w-6 bg-ink transition-transform',
                open && 'translate-y-[3px] rotate-45'
              )}
            />
            <span
              className={cx(
                'block h-px w-6 bg-ink transition-transform',
                open && '-translate-y-[3px] -rotate-45'
              )}
            />
          </button>
        </nav>
      </div>

      {open && (
        <div className="border-b border-line bg-cream px-6 py-6 xl:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={socials.resumePath}
                download
                className="inline-block border border-ink px-4 py-2 text-sm font-medium text-ink"
              >
                Download résumé
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className="h-[2px] w-full bg-line/60" aria-hidden="true">
        <div
          className="h-full bg-signal transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  );
}
