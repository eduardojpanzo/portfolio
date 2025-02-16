import { useTranslations } from "next-intl";
import { SectionContainer } from "@/components/SectionContsiner";
import { Title } from "@/components/Title";
import { CopyButton } from "@/components/CopyButton";

const contacts = [
  {
    title: "E-mail",
    name: "João Eduardo Panzo",
    link: "joaoeduardopanzo@gmail.com",
    isMail: true,
  },
  {
    title: "GitHub",
    name: "eduardojpanzo",
    link: "https://github.com/eduardojpanzo",
  },
  {
    title: "LinkedIn",
    name: "João Eduardo Panzo",
    link: "https://www.linkedin.com/in/eduardojpanzo/",
  },
];

export function Contacts() {
  const t = useTranslations("Contacts");
  return (
    <SectionContainer>
      <div id="contacts">
        <Title name={t("title")} />

        <ul className="grid grid-cols-2 gap-5 justify-center">
          {contacts.map(({ link, name, title, isMail }, idx) => (
            <li
              key={name + title + idx}
              className="min-w-60 flex flex-col items-center  border-2 border-green-800 p-4 rounded-xl"
            >
              <span className="font-bold text-2xl">{title}</span>
              <div className="flex gap-1 md:gap-3 items-center">
                <a
                  href={isMail ? `mailto:${link}` : link}
                  target="_blank"
                  className="text-lg md:text-xl text-slate-300 truncate"
                >
                  {name}
                </a>
                {isMail && <CopyButton textToCopy={link} />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
