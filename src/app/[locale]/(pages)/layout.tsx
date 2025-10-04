import { Footer } from "@/sections/Footer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
