import { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Providers } from "./providers";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";
import { FloatingHeader } from "@/components/floating-header";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const geistSans = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
  if (!routing.locales.includes(locale as "en" | "pt")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <FloatingHeader />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
