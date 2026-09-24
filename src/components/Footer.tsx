export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Aamna Girnari</p>
        <p>Built with React, TypeScript, Tailwind CSS and Framer Motion.</p>
      </div>
    </footer>
  );
}
