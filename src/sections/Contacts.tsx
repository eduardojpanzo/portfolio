import { useTranslations } from "next-intl";
import { SectionContainer } from "../components/SectionContsiner";
import { Title } from "../components/Title";

export function Contacts() {
  const t = useTranslations("Projects");
  return (
    <SectionContainer>
      <div id="contacts">
        <Title name={t("title")} />

        <div>....</div>
      </div>
    </SectionContainer>
  );
}
