import Link from "next/link";
import { MenuProps } from "./types";

const menuLinks = [
  { path: "#about", value: "About" },
  { path: "#skill", value: "Skill" },
  { path: "#formation", value: "Formation" },
  { path: "#projects", value: "Projects" },
  { path: "#contacts", value: "Contacts" },
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
