import Link from "next/link";

export function NotFoundSection() {
  return (
    <section className="bg-[url('/image/not-found.jpg')]">
      <div className="min-h-screen flex flex-col items-center gap-10 justify-center bg-[#000000cc] ">
        <h2 className="text-7xl text-green-800">404</h2>
        <p className="text-7xl font-bold">
          Oops! <span className="text-green-800"> Zoro </span> way!
        </p>
        <Link className="text-2xl hover:text-green-800" href="/">
          Return Home
        </Link>
      </div>
    </section>
  );
}
