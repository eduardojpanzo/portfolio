import { ReactNode } from "react";
import { Raleway } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const raleway = Raleway({ subsets: ["latin"] });

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

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
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={raleway.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
