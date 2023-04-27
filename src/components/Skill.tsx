import { SKillProps } from "./types";

export function Skill({ value, children, onClick }: SKillProps) {
  return (
    <li className="h-32 overflow-hidden block bg-slate-200 rounded-xl transition-all border border-transparent hover:border-slate-500 dark:bg-slate-700 dark:hover:border-slate-100">
      <button
        onClick={onClick}
        type="button"
        className="w-full h-full p-2 flex flex-col justify-between items-center text-sm font-normal grayscale hover:grayscale-0"
      >
        {children}
        {value}
      </button>
    </li>
  );
}
