import { CookieIcon } from "lucide-react";
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react";

interface Props {
  title: string
  p1: string
  click: string
  acceptText: string
  usage: string
  readMore: string
  declineText: string
  demo: boolean
  onAcceptCallback: Function
  onDeclineCallback: Function
}
export default function CookiesBanner({ title, p1, click, acceptText, usage, readMore, declineText, demo , onAcceptCallback, onDeclineCallback } : Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
      setIsOpen(false);
      document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      setTimeout(() => {
          setHide(true);
      }, 700);
      onAcceptCallback();
  };

  const decline = () => {
      setIsOpen(false);
      setTimeout(() => {
          setHide(true);
      }, 700);
      onDeclineCallback();
  };

  useEffect(() => {
      try {
          setIsOpen(true);
          if (document.cookie.includes("cookieConsent=true")) {
              if (!demo) {
                  setIsOpen(false);
                  setTimeout(() => {
                      setHide(true);
                  }, 700);
              }
          }
      }
      catch (e) {
          // console.log("Error: ", e);
      }
  }, []);

  return (
      <div className={cn("fixed z-[99999999999999999999] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md transition-transform duration-700", !isOpen ? "transition-[opacity,transform] translate-y-8 opacity-0" : "transition-[opacity,transform] translate-y-0 opacity-100", hide && "hidden")}>
          <div className="bg-warm-white border border-brand-border shadow-2xl m-2">
              <div className="flex items-center justify-between px-6 pt-6">
                  <h2 className="font-display text-2xl text-brand-dark">{title}</h2>
                  <CookieIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="px-6 pt-4 pb-6 font-body text-sm text-brand-muted leading-relaxed">
                  <p>{p1}</p>
                  <p className="mt-3 text-xs">
                      {click}<span className="font-medium text-brand-dark">{acceptText}</span>{usage}{" "}
                      <a href="/politica-cookies/" className="underline hover:text-primary transition-colors">{readMore}</a>
                  </p>
              </div>
              <div className="flex gap-3 px-6 pb-6">
                  <button type="button" onClick={accept} className="btn-dark flex-1 px-4">{acceptText}</button>
                  <button type="button" onClick={decline} className="btn-outline-dark flex-1 px-4">{declineText}</button>
              </div>
          </div>
      </div>
  )
}
