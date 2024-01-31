import { useTranslations } from "next-intl";
import { SectionContainer } from "../components/SectionContsiner";
import { Title } from "../components/Title";

export function Contacts() {
  const t = useTranslations("Projects");
  return (
    <SectionContainer>
      <div id="contacts">
        <Title name={t("title")} />

        <div className="flex items-center justify-center ">
          <form className="p-8  min-w-[320px]">
            <div className="flex gap-4">
              <label htmlFor="nome" className="block mb-2">
                Nome:
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                className="w-full p-2 mb-4 border rounded bg-transparent"
                required
              />

              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
                className="w-full p-2 mb-4 border rounded bg-transparent"
                required
              />
            </div>

            <label htmlFor="mensagem" className="block mb-2">
              Mensagem:
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              placeholder="Digite sua mensagem"
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
