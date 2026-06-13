import { useState } from "react";

interface Route {
  label: string;
  href: string;
}

interface Props {
  routes: Route[];
}

export default function NavMobile({ routes }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        className="text-brand-text p-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
          strokeLinecap="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </>
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[min(80vw,20rem)] bg-cream shadow-xl">
            <div className="flex justify-end p-4">
              <button
                aria-label="Cerrar menú"
                className="text-brand-text p-1"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-6 px-8 pt-8">
              {routes.map((route) => (
                <a
                  key={route.label}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-lg font-medium uppercase tracking-widest text-brand-text transition-colors hover:text-primary"
                >
                  {route.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
