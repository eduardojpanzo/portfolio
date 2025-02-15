import { About } from "@/sections/About";
import { Banner } from "@/sections/Banner";
import { Contacts } from "@/sections/Contacts";
import { Footer } from "@/sections/Footer";
import { Formations } from "@/sections/Formations";
import { Header } from "@/sections/Header";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
interface Props {
  params: { locale: string };
}

export default function Index({ params }: Props) {
  const locale = params.locale;
  return (
    <div id="top">
      <Header locale={locale} />
      <Banner />
      <About />
      <Skills />
      <Formations />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
