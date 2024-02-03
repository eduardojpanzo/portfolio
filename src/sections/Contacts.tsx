import { useTranslations } from "next-intl";
import { SectionContainer } from "../components/SectionContsiner";
import { Title } from "../components/Title";

export function Contacts() {
  const t = useTranslations("Contacts");
  return (
    <SectionContainer>
      <div id="contacts">
        <Title name={t("title")} />

        <div className="flex items-center justify-center ">
          <form className="p-8  min-w-[320px] text-left">
            <div className="flex flex-col  gap-4 md:flex-row">
              <label htmlFor="name" className="block mb-2">
                {t("form.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("form.namePl")}
                className="w-full p-2 mb-4 border rounded bg-transparent"
                required
              />

              <label htmlFor="email" className="block mb-2">
                {t("form.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("form.emailPl")}
                className="w-full p-2 mb-4 border rounded bg-transparent"
                required
              />
            </div>

            <label htmlFor="msg" className="block mb-2">
              {t("form.msg")}
            </label>
            <textarea
              id="msg"
              name="msg"
              rows={4}
              placeholder={t("form.msgPl")}
              className="w-full p-2 mb-4 border rounded bg-transparent"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded cursor-pointer hover:bg-green-600 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
}
