import { SKillProps } from "../types/componetsTypes";

export function Skill({ value, children, onClick }: SKillProps) {
  return (
    <li className="h-32 overflow-hidden border block">
      <button
        onClick={onClick}
        type="button"
        className="w-full h-full p-2 flex flex-col justify-between items-center text-sm font-normal hover:text-green-700"
      >
        {children}
        {value}
      </button>
    </li>
  );
}
