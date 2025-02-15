"use client";

import { Clipboard } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
  function handleCopy() {
    navigator.clipboard.writeText(textToCopy);
  }

  return (
    <button
      onClick={() => handleCopy()}
      className="inline-flex justify-center items-center"
    >
      <Clipboard size={20} className="fill-white" />
    </button>
  );
}
