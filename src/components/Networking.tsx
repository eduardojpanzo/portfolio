import Link from "next/link";
import { networkItems } from "../mock";

export function Networking() {
  return (
    <div className="flex gap-4 pb-3">
      {networkItems.map(({ href, Icon }) => (
        <Link target="_blank" href={href}>
          <Icon />
        </Link>
      ))}
    </div>
  );
}
