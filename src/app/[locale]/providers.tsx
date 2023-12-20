"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export function Providers({ children }: Props) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
