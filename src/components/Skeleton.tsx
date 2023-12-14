import { ReactNode } from "react";
import { clsx } from "clsx";

interface Props {
  children: ReactNode;
  isLoaded: boolean;
}
export function Skeleton({ children, isLoaded }: Props) {
  return (
    <div className="inline-block">
      <div
        className={clsx("relative w-min h-min", {
          ["after:content-[''] after:absolute after:inset-0 after:animate-pulse dark:after:bg-slate-700 after:bg-zinc-400"]:
            !isLoaded,
        })}
      >
        {children}
      </div>
    </div>
  );
}
