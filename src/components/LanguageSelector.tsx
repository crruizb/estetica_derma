import { useEffect, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import ca from './icons/ca.svg'
import de from './icons/germany.svg'
import es from './icons/spain.svg'
import en from './icons/uk.svg'
import fr from './icons/france.svg'
import { navigate } from "astro/virtual-modules/transitions-router.js"

interface Props {
  lang: string
  // Current page path without language prefix, so switching language keeps the page.
  path?: string
}

export default function LanguageSelector({lang, path = ""}: Props) {
  const [selectedLang, setSelectedLang] = useState(es)

  useEffect(() => {
    let langMd: ImageMetadata
      switch (lang) {
        case "es":
          langMd = es
          break;
        case "ca":
          langMd = ca
          break;
        case "en":
          langMd = en
          break;
        case "de":
          langMd = de
          break;
        case "fr": 
          langMd = fr
          break;
      
        default:
          langMd = es;
      }
    setSelectedLang(langMd)
  }, [selectedLang]);

  const saveLang = (img: ImageMetadata, lang: string) => {
    setSelectedLang(img);
    navigate("/" + lang + "/" + path)
  };


  return (
          <DropdownMenu>
    <DropdownMenuTrigger aria-label="Selector de idioma"><img src={selectedLang.src} alt="" /></DropdownMenuTrigger>
    <DropdownMenuContent className="min-w-8">
      <DropdownMenuItem onClick={() => saveLang(es, "es")}>
        <a href={`/es/${path}`}><img src={es.src} alt="Español" /></a>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(ca, "ca")}>
        <a href={`/ca/${path}`}><img src={ca.src} alt="Català" /></a>
        </DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(en, "en")}>
        <a href={`/en/${path}`}><img src={en.src} alt="English" /></a>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(de, "de")}>
        <a href={`/de/${path}`}><img src={de.src} alt="Deutsch" /></a>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(fr, "fr")}>
        <a href={`/fr/${path}`}><img src={fr.src} alt="Français" /></a>
      </DropdownMenuItem>
    </DropdownMenuContent>

  </DropdownMenu>
  )
}