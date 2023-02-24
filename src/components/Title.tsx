import { TitleProps } from "../types/sectionType";

export function Title({ name }: TitleProps) {
  return (
    <h2 className="uppercase font-bold text-3xl py-4 text-green-800 block">
      {name}
    </h2>
  );
}
