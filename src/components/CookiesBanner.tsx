import { CookieIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react";

export default function CookieConsent({ demo = false, onAcceptCallback = () => { }, onDeclineCallback = () => { } }) {
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
          <div className="bg-gray-100 rounded-md m-2">
              <div className="grid gap-2">
                  <div className="border-b border-border border-gray-300 h-14 flex items-center justify-between p-4">
                      <h1 className="text-lg font-medium">Usamos cookies</h1>
                      <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                  </div>
                  <div className="p-4">
                      <p className="text-sm font-normal">
                      Utilizamos cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web. Para obtener más información sobre cómo utilizamos las cookies, consulte nuestra política de cookies.
                          <br />
                          <br />
                          <span className="text-xs">Al clicar en "<span className="font-medium opacity-80">Aceptar</span>", usted acepta nuestro uso de cookies.</span>
                          <br />
                          <a href="#" className="text-xs underline">Leer mas.</a>
                      </p>
                  </div>
                  <div className="flex gap-2 p-4 py-5 border-t border-border bg-background/20">
                      <Button onClick={accept} className="w-full bg-rose-400 hover:bg-rose-500">Aceptar</Button>
                      <Button onClick={decline} className="w-full bg-white hover:bg-gray-300" variant="secondary">Rechazar</Button>
                  </div>
              </div>
          </div>
      </div>
  )
}
