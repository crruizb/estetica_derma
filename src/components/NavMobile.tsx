import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Route {
  label: string;
  href: string;
}

interface Props {
  routes: Route[];
  homeHref: string;
  ctaLabel: string;
  ctaHref: string;
  address: string;
  followLabel: string;
}

// "BONO REGALO" -> "Bono regalo": the large serif links read better in sentence case.
const sentenceCase = (label: string) =>
  label.charAt(0) + label.slice(1).toLocaleLowerCase();

const iconClass = "w-5 h-5";

export default function NavMobile({ routes, homeHref, ctaLabel, ctaHref, address, followLabel }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  // The panel is portaled to <body> (see AGENTS.md); only render it after hydration.
  const [mounted, setMounted] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Keep the hidden panel out of the tab order / screen readers (React 18 has no `inert` prop).
  useEffect(() => {
    if (panelRef.current) panelRef.current.inert = !isOpen;
  }, [isOpen, mounted]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const panel = (
    <div
      ref={panelRef}
      className={`fixed inset-0 z-50 lg:hidden flex flex-col bg-warm-white transition-[opacity,transform] duration-500 ease-out ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div className="bg-sand border-b border-brand-dark/10 px-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-20">
          <span />
          <a href={homeHref} onClick={close} aria-label="Derma">
            <img src="/images/Derma_logo.svg" alt="Derma" className="h-9 w-auto block" />
          </a>
          <div className="flex justify-end">
            <button
              type="button"
              aria-label="Cerrar menú"
              className="w-10 h-10 -mr-2 flex items-center justify-center text-brand-dark hover:text-primary transition-colors"
              onClick={close}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25} strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-6 pt-4">
        <ul>
          {routes.map((route, i) => (
            <li
              key={route.href}
              className={`border-b border-brand-border transition-[opacity,transform] duration-500 ease-out ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: isOpen ? `${120 + i * 60}ms` : "0ms" }}
            >
              <a
                href={route.href}
                onClick={close}
                className="group flex items-baseline gap-5 py-5 text-brand-dark hover:text-primary transition-colors"
              >
                <span className="font-body text-[11px] tracking-[0.2em] text-secondary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[2rem] leading-none">{sentenceCase(route.label)}</span>
                <svg
                  className="ml-auto w-4 h-4 self-center opacity-40 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 pt-6 pb-8 bg-cream">
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" onClick={close} className="btn-dark w-full">
          {ctaLabel}
        </a>
        <div className="mt-6 flex items-end justify-between gap-6">
          <div className="font-body text-sm text-brand-muted leading-relaxed">
            <p>{address}</p>
            <p>
              <a href="tel:+34934385970" className="hover:text-primary transition-colors">934 385 970</a>
              <span className="mx-1">·</span>
              <a href="tel:+34691310652" className="hover:text-primary transition-colors">691 310 652</a>
            </p>
          </div>
          <div className="flex items-center gap-4 text-brand-dark shrink-0" aria-label={followLabel}>
            <a
              href="https://www.instagram.com/centro_de_estetica_derma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <svg className={iconClass} fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a
              href="https://wa.me/34691310652"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-primary transition-colors"
            >
              <svg className={iconClass} fill="currentColor" viewBox="0 0 28 28" aria-hidden="true">
                <path d="M23.8759 4.06939C21.4959 1.68839 18.3316 0.253548 14.9723 0.0320463C11.613 -0.189455 8.28774 0.817483 5.61565 2.86535C2.94357 4.91323 1.10682 7.86244 0.447451 11.1638C-0.21192 14.4652 0.351026 17.8937 2.03146 20.8109L0.0625 28.0004L7.42006 26.0712C9.45505 27.1794 11.7353 27.7601 14.0524 27.7602H14.0583C16.8029 27.7599 19.4859 26.946 21.768 25.4212C24.0502 23.8965 25.829 21.7294 26.8798 19.1939C27.9305 16.6583 28.206 13.8682 27.6713 11.1761C27.1367 8.48406 25.8159 6.01095 23.8759 4.06939ZM14.0583 25.4169H14.0538C11.988 25.417 9.96008 24.8617 8.1825 23.8091L7.7611 23.5593L3.3945 24.704L4.56014 20.448L4.28546 20.0117C2.92594 17.8454 2.32491 15.2886 2.57684 12.7434C2.82877 10.1982 3.91938 7.80894 5.67722 5.95113C7.43506 4.09332 9.76045 2.87235 12.2878 2.48017C14.8152 2.08799 17.4013 2.54684 19.6395 3.78457C21.8776 5.02231 23.641 6.96875 24.6524 9.3179C25.6638 11.6671 25.8659 14.2857 25.2268 16.7622C24.5877 19.2387 23.1438 21.4326 21.122 22.999C19.1001 24.5655 16.6151 25.4156 14.0575 25.4157L14.0583 25.4169Z" />
              </svg>
            </a>
            <a href="tel:+34934385970" aria-label="934 385 970" className="hover:text-primary transition-colors">
              <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        className="w-10 h-10 -mr-2 flex items-center justify-center text-brand-dark"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 28 28" strokeWidth={1.25} strokeLinecap="round">
          <line x1="4" y1="10" x2="24" y2="10" />
          <line x1="9" y1="18" x2="24" y2="18" />
        </svg>
      </button>

      {mounted && createPortal(panel, document.body)}
    </div>
  );
}
