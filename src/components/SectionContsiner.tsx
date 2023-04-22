import { SectionContainerProps } from "../types/componetsTypes";

export function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <div className="max-w-5xl min-h-min mx-auto pb-8 px-5 flex flex-col text-center md:text-left">
        {children}
      </div>
    </div>
  );
}
