import { Menu } from "../components/Menu";
import { Networking } from "../components/Networking";

export function Footer() {
  return (
    <footer>
      <div className="max-w-7xl my-0 mx-auto px-5 pt-7 flex flex-col items-center gap-2 py-2">
        <p className="text-2xl ">João Eduardo Panzo</p>
        <Menu className="pb-3" />
        <Networking />
        <p className="text-xs">
          Copyright © | Coded with 💚 by João Eduardo Panzo
        </p>
      </div>
    </footer>
  );
}
