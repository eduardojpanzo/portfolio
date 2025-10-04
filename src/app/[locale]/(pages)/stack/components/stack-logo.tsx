import Image from "next/image";
import React from "react";

export function StackLogo() {
  return (
    <div className="h-28 flex items-center justify-center cursor-pointer rounded-md border overflow-hidden">
      <Image
        className="w-auto max-h-20"
        src={"/skill/nextjs.svg"}
        width={200}
        height={200}
        alt="nextjs"
      />
    </div>
  );
}
