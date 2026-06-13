import { type ReactNode, useEffect, useState } from "react";
import { X, Gift } from "lucide-react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Modal({ children, title }: Props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        />
        <div className="relative w-full max-w-xl rounded-2xl bg-warm-white shadow-2xl overflow-hidden animate-fade-up">
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setShowModal(false)}
              className="p-2 rounded-full text-brand-muted hover:bg-cream hover:text-brand-text transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8 md:p-10 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-cream flex items-center justify-center text-primary mb-5">
              <Gift className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-brand-text">
              {title}
            </h3>
            <div className="mt-5 text-brand-muted font-body text-base md:text-lg leading-relaxed text-left">
              {children}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/34691310652"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-body font-medium transition-colors hover:bg-primary-dark"
              >
                Contactar por WhatsApp
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-brand-border text-brand-text font-body font-medium transition-colors hover:bg-cream"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
