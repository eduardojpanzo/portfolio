import Image from "next/image";
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";
import { SectionContainer } from "../components/SectionContsiner";
import { Title } from "../components/Title";
import { useTranslations } from "next-intl";

export const projectItems = [
  {
    name: "Jogo da Velha",
    desc: "Um Jogo onde Úsuario irá jogar e ter um senário de Desafio de Jogo de Velha",
    url: "https://eduardojpanzo.github.io/gamesjs/",
    repo: "https://github.com/eduardojpanzo/gamesjs",
    cover: "/image/jgdvlh.png",
  },
  {
    name: "portfolio",
    desc: "descrição da Habilidade e das formação e experiência em programação",
    url: "https://eduardojpanzo.vercel.app/",
    repo: "https://github.com/eduardojpanzo/portfolio",
    cover: "/image/prtfl.png",
  },
  {
    name: "Simplest App",
    desc: "set of small applications to test knowledge and train my skill",
    url: "https://eduardojpanzo.github.io/simplest-app/",
    repo: "https://github.com/eduardojpanzo/simplest-app",
    cover: "/image/spa.png",
  },
];

export function Projects() {
  const t = useTranslations("Projects");
  return (
    <SectionContainer>
      <div id="projects">
        <Title name={t("title")} />

        <div className="flex items-center justify-center flex-wrap gap-3 mt-8 transition-all">
          {projectItems.map(({ name, cover, desc, url, repo }) => (
            <div
              key={name}
              className="w-72 h-72 bg-slate-800 flex flex-col border border-transparent rounded-3xl my-2 overflow-hidden dark:border-slate-50"
            >
              <div className="max-h-[50%] overflow-hidden">
                <Image
                  className="w-full min-w-full"
                  src={cover}
                  alt="academy"
                  width={530}
                  height={520}
                />
              </div>
              <div className="flex flex-col justify-between p-4 flex-1 text-slate-50">
                <div className="text-left">
                  <h3 className="mb-1">{name}</h3>
                  <p className="text-sm leading-4 ">{desc}</p>
                </div>

                <div className="flex gap-2 justify-center">
                  <Link
                    className={`py-2 px-3 text-xl rounded-md bg-gray-600 hover:ring-2 hover:ring-gray-300`}
                    target="_blank"
                    href={url}
                  >
                    <FaEye />
                  </Link>

                  <Link
                    className={`py-2 px-3 text-xl rounded-md bg-gray-600 hover:ring-2 hover:ring-gray-300`}
                    target="_blank"
                    href={repo}
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
