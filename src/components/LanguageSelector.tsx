import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import cat from './icons/cat.svg'
import de from './icons/germany.svg'
import es from './icons/spain.svg'
import en from './icons/uk.svg'
import fr from './icons/france.svg'
import {useCookies} from 'react-cookie'


export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState(es)
  const [cookies, setCookie] = useCookies(['lang'])

  const saveLang = (img: ImageMetadata, lang: string) => {
    setSelectedLang(img);
    localStorage.setItem("lang", JSON.stringify(lang));
    setCookie('lang', lang)
  };

  return (
    <DropdownMenu>
    <DropdownMenuTrigger><img src={selectedLang.src} alt="" /></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem onClick={() => saveLang(es, "es")}><img src={es.src} alt="" /></DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(cat, "cat")}><img src={cat.src} alt="" /></DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(en, "en")}><img src={en.src} alt="" /></DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(de, "de")}><img src={de.src} alt="" /></DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(fr, "fr")}><img src={fr.src} alt="" /></DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}