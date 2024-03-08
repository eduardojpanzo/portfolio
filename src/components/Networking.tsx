import Link from "next/link";
import { NetworkingProps } from "./types";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const networkItems = [
  { href: "https://github.com/eduardojpanzo", Icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/joãoeduardopanzo",
    Icon: FaLinkedinIn,
  },
  { href: "https://www.instagram.com/eduardojpanzo/", Icon: FaInstagram },
  { href: "https://www.facebook.com/joao.eduardo.52012548", Icon: FaFacebookF },
];

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
