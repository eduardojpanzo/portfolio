import { useTranslations } from "next-intl";
import { Menu } from "@/components/Menu";
import { Networking } from "@/components/Networking";

export function Footer() {
  const f = useTranslations("Projects");
  const t = useTranslations("Menu");
  const menuLinks = [
    { path: "#about", value: `${t("about")}` },
    { path: "#skill", value: `${t("skill")}` },
    { path: "#formation", value: `${t("formation")}` },
    { path: "#projects", value: `${t("projects")}` },
    { path: "#contacts", value: `${t("contacts")}` },
  ];
  return (
    <footer>
      <div className="max-w-7xl my-0 mx-auto px-5 pt-7 flex flex-col items-center gap-2 py-2">
        <p className="text-xl ">João Eduardo Panzo</p>
        <Menu menuLinks={menuLinks} />
        <Networking />
        <p className="text-xs">Copyright © | {f("madeto")}</p>
      </div>
    </footer>
  );
}
