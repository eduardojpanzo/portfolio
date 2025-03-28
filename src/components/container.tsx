import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: Props) {
  return (
    <div {...props} className={cn("container mx-auto px-4", className)}>
      {children}
    </div>
  );
}
