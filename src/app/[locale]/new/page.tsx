import { Projects } from "@/sections/Projects";
import { Resume } from "./componets/resume";

interface Props {
  params: { locale: string };
  searchParams: { tab: string };
}

export default function Home(props: Props) {
  console.log(props);

  return <RenderContentMain tab={props.searchParams.tab} />;
}

function RenderContentMain({ tab }: { tab: string }) {
  switch (tab) {
    case "":
      return <Resume />;
    case "projects":
      return <Projects />;
    default:
      return <Resume />;
  }
}
