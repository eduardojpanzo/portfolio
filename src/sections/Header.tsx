import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { Switch } from "../components/Switch";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const classNameMenuMobile =
    "absolute  top-16  p-2 rounded-b-lg bg-current flex-col dark:bg-slate-600";
  const classNameMenu =
    "md:flex md:static md:flex-row md:bg-transparent md:p-0 md:rounded-none dark:md:bg-transparent";

  return (
    <header className="sticky -top-px z-50 duration-300">
      <div className=" max-w-7xl my-0 mx-auto px-5 backdrop-blur-md">
        <div className="relative h-16 flex items-center justify-between">
          <Logo />
          <div
            className="md:hidden text-2xl font-bold cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars />
          </div>
          <Menu
            className={`${classNameMenuMobile} ${
              showMenu ? "block" : "hidden"
            } ${classNameMenu}`}
          />
          <Switch />
        </div>
      </div>
    </header>
  );
}
