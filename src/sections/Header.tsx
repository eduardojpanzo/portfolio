import { useTranslations } from "next-intl";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { SwitchTheme } from "../components/SwitchTheme";
import SwitcherLang from "../components/SwitcherLang";

export function Header() {
  const t = useTranslations("Menu");
  const menuLinks = [
    { path: "#about", value: `${t("about")}` },
    { path: "#skill", value: `${t("skill")}` },
    { path: "#formation", value: `${t("formation")}` },
    { path: "#projects", value: `${t("projects")}` },
    { path: "#contacts", value: `${t("contacts")}` },
  ];

  return (
    <header className="sticky -top-px z-50 duration-300">
      <div className=" max-w-7xl my-0 mx-auto px-5 backdrop-blur-md">
        <div className="relative h-16 flex items-center justify-between">
          <Logo />
          <Menu menuLinks={menuLinks} />

          <div className="flex items-center gap-3">
            <SwitchTheme />
            <SwitcherLang />
          </div>
        </div>
      </div>
    </header>
  );
}
