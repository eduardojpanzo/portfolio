import { About } from "@/sections/About";
import { Banner } from "@/sections/Banner";
import { Contacts } from "@/sections/Contacts";
import { Formations } from "@/sections/Formations";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
interface Props {
  params: { locale: string };
}

export default function Index({ params }: Props) {
  console.log(params);
  return (
    <div id="top">
      <Banner />
      <About />
      <Skills />
      <Formations />
      <Projects />
      <Contacts />
    </div>
  );
}
