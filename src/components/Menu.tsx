import Link from "next/link";
import { MenuProps } from "../types/componetsTypes";

const menuLinks = [
  { path: "", value: "About" },
  { path: "", value: "Skill" },
  { path: "", value: "Formation" },
  { path: "", value: "Projects" },
  { path: "", value: "Contacts" },
];
export function Menu({ className }: MenuProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {menuLinks.map(({ path, value }) => (
        <Link
          className="font-semibold text-gray-400 hover:text-gray-500"
          key={value}
          href={path}
        >
          {value}
        </Link>
      ))}
    </div>
  );
}
