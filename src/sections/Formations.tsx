import Image from "next/image";
import { SectionContsiner } from "../components/SectionContsiner";
import { Title } from "../components/Title";

export function Formations() {
  return (
    <SectionContsiner>
      <Title name="Formation" />

      <div className="flex items-center justify-center flex-wrap">
        <div className="w-80 h-80 bg-slate-800 flex flex-col justify-between items-center rounded-3xl p-4 mx-4 my-8 dark:bg-slate-200">
          <Image src={""} alt="" />
          <div className="text-slate-50 dark:text-slate-800 text-center">
            <p className="text-xl">Engenharia Informática</p>
            <p>2020 - Em curso</p>
          </div>
        </div>

        <div className="w-80 h-80 bg-slate-800 flex flex-col justify-between items-center rounded-3xl p-4 mx-4 my-8 dark:bg-slate-200">
          <Image src={""} alt="" />
          <div className="text-slate-50 dark:text-slate-800 text-center">
            <p className="text-xl">Full-Stack Developer</p>
            <p>2021 - 2022</p>
          </div>
        </div>
      </div>
    </SectionContsiner>
  );
}
