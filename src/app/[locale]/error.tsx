"use client";

import Link from "next/link";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section>
      <div className="min-h-screen flex flex-col items-center gap-10 justify-center">
        <p className="text-7xl font-bold">{error.message}</p>
        <Link className="text-2xl hover:text-green-800" href="/">
          Return Home
        </Link>
      </div>
    </section>
  );
}
