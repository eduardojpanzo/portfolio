import { ReactNode } from "react";
import { Raleway } from "next/font/google";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Providers } from "./providers";

import { locales } from "../../config";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const raleway = Raleway({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
