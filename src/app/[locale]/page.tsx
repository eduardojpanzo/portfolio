import { Skeleton } from "../../components/Skeleton";
import { About } from "../../sections/About";
import { Banner } from "../../sections/Banner";
import { Footer } from "../../sections/Footer";
import { Formations } from "../../sections/Formations";
import { Header } from "../../sections/Header";
import { Projects } from "../../sections/Projects";
import { Skills } from "../../sections/Skills";
interface Props {
  params:{locale:string}
}

export default function Index({params}:Props) {
  const locale = params.locale

  console.log(locale);
  
  return (
    <div id="top">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Formations />
      <Projects />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}
