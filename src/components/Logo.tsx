import Link from "next/link";

export function Logo() {
  return (
    <div className="font-bold text-lg cursor-pointer">
      <h1>
        <Link href="#top" scroll={true}>
          Eduardo<span className="text-green-700 text-2xl">JP</span>
        </Link>
      </h1>
    </div>
  );
}
