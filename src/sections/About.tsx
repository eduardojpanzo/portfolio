import Image from "next/image";
import { SectionContainer } from "../components/SectionContsiner";
import { Title } from "../components/Title";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");
  return (
    <SectionContainer>
      <div id="about">
        <Title name="About" />

        <figure className="p-8 rounded-xl bg-slate-100 overflow-hidden md:flex md:p-0 dark:bg-slate-800">
          <Image
            src={`https://avatars.githubusercontent.com/u/96853842?v=4`}
            width={384}
            height={384}
            alt="me"
            className="w-24 h-24  md:h-auto md:rounded-none md:w-60 rounded-full mx-auto object-cover"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-justify indent-4">
                {t("desc")}
              </p>
            </blockquote>

            <figcaption className="font-medium">
              <div className="text-green-500 dark:text-green-400">
                João Eduardo Panzo
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {t("career")}, Dine-code, Vaawel
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </SectionContainer>
  );
}
