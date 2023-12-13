import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export function Skeleton({ children }: Props) {
  return (
    <div className="relative overflow-hidden bg-slate-200 ">{children}</div>
  );
}
