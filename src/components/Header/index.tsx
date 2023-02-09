import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Switch } from "../Switch";

export function Header() {
  return (
    <header className="sticky -top-px z-50 duration-300">
      <div className=" max-w-6xl my-0 mx-auto px-5 backdrop-blur-md">
        <div className="h-11 flex justify-between items-center">
          <Logo />
          <Menu />
          <Switch />
        </div>
      </div>
    </header>
  );
}
