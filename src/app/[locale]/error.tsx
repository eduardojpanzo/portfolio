"use client";

import { useEffect } from "react";
import { Button } from "../../components/Button";
import { useRouter } from "../../navigation";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const { push } = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section>
      <div className="max-w-sm mx-auto min-h-screen flex flex-col items-center justify-center">
        <p className="text-[1.4rem] font-bold">
          <br />
          {error.name}:<br />
          {error.message} <br />
        </p>
        <span className=" font-normal text-[0.75rem]">{error.stack}</span>
        <Button
          onClick={() => push("/")}
          className="mt-10 text-2xl hover:text-green-800"
        >
          Reload
        </Button>
      </div>
    </section>
  );
}
