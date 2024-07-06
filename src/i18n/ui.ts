import { ui_ca } from "./ui_ca";
import { ui_de } from "./ui_de";
import { ui_en } from "./ui_en";
import { ui_es } from "./ui_es";
import { ui_fr } from "./ui_fr";

export const defaultLang = 'es';

export const ui = {
  es: {
    ...ui_es
  },
  ca: {
    ...ui_ca
  },
  en: {
    ...ui_en
  },
  de: {
    ...ui_de
  },
  fr: {
    ...ui_fr
  }
} as const;