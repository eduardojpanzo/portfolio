import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "pt"] as const;

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
