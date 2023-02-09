import Link from "next/link";

const menuLinks = [
  { path: "", value: "About" },
  { path: "", value: "Skill" },
  { path: "", value: "Formation" },
  { path: "", value: "Projects" },
  { path: "", value: "Contacts" },
];
export function Menu() {
  return (
    <div className="flex gap-4">
      {menuLinks.map(({ path, value }) => (
        <Link
          className="hover:underline hover:decoration-sky-600 hover:text-sky-600 "
          key={path}
          href={path}
        >
          {value}
        </Link>
      ))}
    </div>
  );
}
