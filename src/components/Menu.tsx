"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { clsx } from "clsx";

const menuLinks = [
  { path: "#about", value: "About" },
  { path: "#skill", value: "Skill" },
  { path: "#formation", value: "Formation" },
  { path: "#projects", value: "Projects" },
  { path: "#contacts", value: "Contacts" },
];
export function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className="md:hidden text-2xl font-bold cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={clsx(
          " flex gap-4 absolute  top-16  p-2 rounded-b-lg bg-current flex-col dark:bg-slate-600 md:flex md:static md:flex-row md:bg-transparent md:p-0 md:rounded-none dark:md:bg-transparent",
          {
            ["hidden"]: !showMenu,
            ["block"]: showMenu,
          }
        )}
      >
        {menuLinks.map(({ path, value }) => (
          <Link
            className="font-semibold text-gray-400 hover:text-gray-500"
            key={value}
            href={path}
            scroll={false}
          >
            {value}
          </Link>
        ))}
      </div>
    </>
  );
}
