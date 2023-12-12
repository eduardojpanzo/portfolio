import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-7xl font-bold">
      Oops! <span className="text-green-800"> Zoro </span> way!
      <Link href="/">Return Home</Link>
    </div>
  );
}
