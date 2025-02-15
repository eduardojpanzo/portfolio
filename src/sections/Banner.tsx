import Image from "next/image";
import { Networking } from "@/components/Networking";
import { useTranslations } from "next-intl";

export function Banner() {
  const t = useTranslations("Banner");
  return (
    <div className="shadow-inner h-screen">
      <div className="relative max-w-5xl mx-auto h-full flex flex-col items-center justify-around md:flex-row">
        <div className="mt-10 md:mt-0">
          <h1 className="text-7xl font-bold text-green-600 md:text-7xl dark:text-gray-50">
            {t("greet")}
            <br />
            <span className="text-gray-900 text-4xl dark:text-green-600">
              {t("name")}
            </span>
          </h1>
          <h2 className="leading-9 font-bold text-xl text-green-600 dark:text-gray-50">
            {t("skill")}
          </h2>

          <div className="flex gap-4 mt-4">
            <p className="uppercase flex gap-2 items-center text-gray-700 dark:text-green-600">
              <span className="text-6xl font-bold">2</span> {t("years")} <br />
              {t("experience")}
            </p>
          </div>
        </div>

        <div className="w-52 h-52 md:min-w-[288px] md:h-72 rounded-full shadow-lg overflow-hidden">
          <Image width={288} height={288} src={"/profil.png"} alt="" />
        </div>

        <Networking float />
      </div>
    </div>
  );
}
