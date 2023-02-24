import { SKillProps } from "../types/componetsTypes";

export function Skill({ value, children, onClick }: SKillProps) {
  return (
    <li className="h-32 overflow-hidden block bg-slate-100 rounded-xl dark:bg-slate-500">
      <button
        onClick={onClick}
        type="button"
        className="w-full h-full p-2 flex flex-col justify-between items-center text-sm font-normal "
      >
        {children}
        {value}
      </button>
    </li>
  );
}
