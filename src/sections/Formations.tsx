import Image from "next/image";
import { SectionContainer } from "../components/SectionContsiner";
import { Title } from "../components/Title";
import { formationItems } from "../data";

export function Formations() {
  return (
    <SectionContainer>
      <Title name="Formation" />

      <div className="flex items-center justify-center flex-wrap gap-3 mt-8 transition-all">
        {formationItems.map(({ name, placeUrl, start, end }) => (
          <div
            key={name}
            className="w-72 h-72 bg-slate-800 flex flex-col justify-between items-center border border-transparent rounded-3xl p-4 my-2 dark:border-slate-50"
          >
            <Image
              className="max-w-min"
              src={placeUrl}
              alt="academy"
              width={230}
              height={220}
            />
            <div className="text-slate-50 text-center">
              <p className="text-lg">{name}</p>
              <p>
                {start} - {end}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
