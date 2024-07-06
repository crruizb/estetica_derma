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
import {useCookies} from 'react-cookie'
import { navigate } from "astro/virtual-modules/transitions-router.js"

interface Props {
  lang: string
}

export default function LanguageSelector({lang}: Props) {
  const [selectedLang, setSelectedLang] = useState(es)
  const [cookies, setCookie] = useCookies(['lang'])

  useEffect(() => {
    let langMd = cookies.lang as ImageMetadata;
    if (langMd === undefined || langMd === null) {
      switch (lang) {
        case "es":
          langMd = es
          setCookie('lang', es)
          break;
        case "ca":
          langMd = ca
          setCookie('lang', ca)
          break;
        case "en":
          langMd = en
          setCookie('lang', en)
          break;
        case "de":
          langMd = de
          setCookie('lang', de)
          break;
        case "fr": 
          langMd = fr
          setCookie('lang', fr)
          break;
      
        default:
          langMd = es;
      }
    }
    setSelectedLang(langMd)
  }, [selectedLang]);

  const saveLang = (img: ImageMetadata, lang: string) => {
    setSelectedLang(img);
    saveCookie(img)
    navigate("/" + lang)
  };

  function saveCookie(img: ImageMetadata) {
    return setCookie('lang', img)
  }

  return (
          <DropdownMenu>
    <DropdownMenuTrigger><img src={selectedLang.src} alt="Selected language icon" /></DropdownMenuTrigger>
    <DropdownMenuContent className="min-w-8">
      <DropdownMenuItem onClick={() => saveLang(es, "es")}>
        <a href={`/es`}><img src={es.src} alt="Spanish flag" /></a>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(ca, "ca")}>
        <a href={`/ca`}><img src={ca.src} alt="Catalan flag" /></a>
        </DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(en, "en")}>
        <a href={`/en`}><img src={en.src} alt="UK Flag" /></a>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(de, "de")}> 
        <a href={`/de`}><img src={de.src} alt="German flag" /></a>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => saveLang(fr, "fr")}>
        <a href={`/fr`}><img src={fr.src} alt="French flag" /></a>
      </DropdownMenuItem>
    </DropdownMenuContent>

  </DropdownMenu>
  )
}