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
  return (
    <>
      <Header locale={params.locale} />
      <div id="top">
        <Banner />
        <About />
        <Skills />
        <Formations />
        <Projects />
        <Contacts />
      </div>
      <Footer />
    </>
  );
}
