import { useLocale, useTranslations } from "next-intl";
import { SwitcherSelectLang } from "./switcher-select-lang";

export function SwitcherLang() {
  const t = useTranslations("SwitcherLang");
  const locale = useLocale();

  return (
    <SwitcherSelectLang defaultValue={locale} label={t("label")}>
      {["en", "pt"].map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </SwitcherSelectLang>
  );
}
