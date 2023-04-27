import Link from "next/link";
import { networkItems } from "../data";
import { NetworkingProps } from "./types";

export function Networking({ float }: NetworkingProps) {
  return (
    <div
      className={`flex gap-4 pb-3 ${
        float ? `flex-col absolute right-4 top-3 text-2xl` : ``
      }`}
    >
      {networkItems.map(({ href, Icon }) => (
        <Link
          className=" hover:text-green-600 select-none transition-all"
          key={href}
          target="_blank"
          href={href}
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
}
