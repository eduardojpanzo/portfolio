import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { Switch } from "../components/Switch";

export function Header() {
  return (
    <header className="sticky -top-px z-50 duration-300">
      <div className=" max-w-7xl my-0 mx-auto px-5 backdrop-blur-md">
        <div className="relative h-16 flex items-center justify-between">
          <Logo />
          <Menu />

          <Switch />
        </div>
      </div>
    </header>
  );
}
