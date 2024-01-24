import Image from "next/image";
import { SectionContainer } from "../components/SectionContsiner";
import { Skill } from "../components/Skill";
import { Title } from "../components/Title";
import { useTranslations } from "next-intl";

export const skillsItems = [
  { name: "HTML", path: "/skill/html.svg" },
  { name: "CSS", path: "/skill/css.svg" },
  { name: "JavaScript", path: "/skill/js.svg" },
  { name: "ReactJS", path: "/skill/reactjs.svg" },
  { name: "NextJs", path: "/skill/nextjs.svg" },
  { name: "TypeScript", path: "/skill/typescript.svg" },
  { name: "NodeJS", path: "/skill/nodejs.svg" },
  { name: "Express", path: "/skill/express.svg" },
  { name: "Mysql", path: "/skill/mysql.svg" },
  { name: "Prisma", path: "/skill/prisma.svg" },
  { name: "Styled-Components", path: "/skill/styledcomponents.svg" },
  { name: "Tailwindcss", path: "/skill/tailwindcss.svg" },
];

export function Skills() {
  const t = useTranslations("Skill");
  return (
    <SectionContainer>
      <div id="skill">
        <Title name={t("title")} />

        <div className="my-10">
          <div className="flex overflow-auto justify-center sm:mx-0">
            <ul className="flex-none inline-grid grid-cols-2 gap-2 px-4 sm:px-0 xl:gap-4  lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3">
              {skillsItems.map((item) => (
                <Skill key={item.name} value={item.name}>
                  <Image width={60} height={60} src={item.path} alt="skill" />
                </Skill>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
