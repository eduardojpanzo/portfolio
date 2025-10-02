import { useTranslations } from "next-intl";
import { Networking } from "@/components/networking";

export function Footer() {
  const f = useTranslations("Footer");

  return (
    <footer className=" mt-20">
      <div className="max-w-7xl my-0 mx-auto px-5 pt-7 flex flex-col items-center gap-2 py-2">
        <Networking />
        <p className="text-xs font-geist-mono ">
          ©{new Date().getFullYear()} João Eduardo Panzo
        </p>
        <p className="text-xs">{f("madein")}</p>
      </div>
    </footer>
  );
}
