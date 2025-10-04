import Image from "next/image";
import Link from "next/link";
import React from "react";

export function CompanyLogo() {
  return (
    <div className="h-20 flex items-center justify-center cursor-pointer rounded-md border overflow-hidden">
      <Link
        href={""}
        className="flex items-center w-full h-full justify-center"
      >
        <Image
          className="w-auto max-h-16"
          src={"/companies/vaawel.png"}
          width={200}
          height={200}
          alt="vaawel"
        />
      </Link>
    </div>
  );
}
