import { cn } from "@/lib/utils";
import React from "react";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export function Text({ className, children, ...props }: Props) {
  return (
    <p
      className={cn(
        "font-normal text-sm leading-[21px] tracking-[0.01rem] md:text-base md:leading-[24px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
