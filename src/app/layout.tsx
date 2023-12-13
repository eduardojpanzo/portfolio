import { ReactNode } from "react";
import type { Metadata } from "next";
import { Providers } from "./providers";

import "../styles/globals.css";
interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Protifolio",
  description: "Portifolio de apresentação pessoal",
  authors: [
    { name: "João Eduardo Panzo", url: "https://github.com/eduardoPanzo" },
  ],
  keywords: "portifolio, João, Eduardo, Panzo, dev, reactjs",
  creator: "João Eduardo Panzo",
  icons: "/favicon.png",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
