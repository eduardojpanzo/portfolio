import Link from "next/link";

export function Logo() {
  return (
    <Link className="font-bold text-lg" href="#top" scroll={true}>
      <span className="sr-only"> @eduardojpanzo</span>
      Eduardo<span className="text-green-700 text-2xl">JP</span>
    </Link>
  );
}
