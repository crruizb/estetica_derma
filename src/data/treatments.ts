import { ui } from "../i18n/ui";
import { useTranslations } from "../i18n/utils";

export type TreatmentCategory = "facial" | "body" | "spa";

export interface Treatment {
  name: string;
  category: TreatmentCategory;
  // Add when available; cards fall back to a placeholder image / "price on request".
  image?: string;
  price?: string;
}

export const categories: TreatmentCategory[] = ["facial", "body", "spa"];

const TREATMENTS_PER_CATEGORY = 13;

export function getTreatments(lang: keyof typeof ui): Treatment[] {
  const t = useTranslations(lang);
  return categories.flatMap((category) =>
    Array.from({ length: TREATMENTS_PER_CATEGORY }, (_, i) => ({
      name: t(`services.${category}.${i + 1}` as Parameters<typeof t>[0]),
      category,
    })),
  );
}
