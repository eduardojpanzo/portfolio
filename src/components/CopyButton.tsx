"use client";
import { FaClipboard } from "react-icons/fa";

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
      <FaClipboard title="Clique aqui para copiar" className="fill-white" />
    </button>
  );
}
