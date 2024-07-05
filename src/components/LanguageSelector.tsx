import { useEffect, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import ca from './icons/ca.svg'
import de from './icons/germany.svg'
import es from './icons/spain.svg'
import en from './icons/uk.svg'
import fr from './icons/france.svg'
import {useCookies} from 'react-cookie'
import { navigate } from "astro/virtual-modules/transitions-router.js"


export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState(es)
  const [cookies, setCookie] = useCookies(['lang'])

  useEffect(() => {
    const langMd = cookies.lang as ImageMetadata;
    setSelectedLang(langMd)
    console.log(cookies.lang)
  }, []);

  const saveLang = (img: ImageMetadata, lang: string) => {
    setSelectedLang(img);
    localStorage.setItem("lang", JSON.stringify(lang));
    setCookie('lang', lang)
    
    navigate("/" + lang)
  };

  return (
    <DropdownMenu>
    <DropdownMenuTrigger><img src={selectedLang.src} alt="" /></DropdownMenuTrigger>
    <DropdownMenuContent>

    <li>
      
    </li>

      <DropdownMenuItem onClick={() => saveLang(es, "es")}> <a href={`/es`}><img src={es.src} alt="" /></a>      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(es, "ca")}> <a href={`/ca`}><img src={ca.src} alt="" /></a>      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(es, "en")}> <a href={`/en`}><img src={en.src} alt="" /></a>      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(es, "de")}> <a href={`/de`}><img src={de.src} alt="" /></a>      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(es, "fr")}> <a href={`/fr`}><img src={fr.src} alt="" /></a>      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}