import { TitleProps } from "./types";

export function Title({ name }: TitleProps) {
  return (
    <h2 className="pt-12 pb-8 font-bold text-3xl text-green-800">{name}</h2>
  );
}
