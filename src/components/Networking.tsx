import Link from "next/link";
import { networkItems } from "../mock";

interface NetworkingProps {
  float?: boolean;
}

export function Networking({ float }: NetworkingProps) {
  return (
    <div
      className={`flex gap-4 pb-3 ${
        float ? `flex-col absolute right-4 top-3 text-2xl` : ``
      }`}
    >
      {networkItems.map(({ href, Icon }) => (
        <Link target="_blank" href={href}>
          <Icon />
        </Link>
      ))}
    </div>
  );
}
