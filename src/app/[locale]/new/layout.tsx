import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function LayoutMain({ children }: Props) {
  return <div>{children}</div>;
}
