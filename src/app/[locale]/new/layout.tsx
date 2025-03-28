import { Container } from "@/components/container";
import { FloatingHeader } from "@/components/floating-header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Container className="grid grid-cols-1 md:grid-cols-[minmax(288px,320px)_minmax(0,1fr)]">
        <FloatingHeader />
        <aside className="">
          <div className="sticky top-10 border">Left</div>
        </aside>
        <main>{children}</main>
      </Container>
    </div>
  );
}
