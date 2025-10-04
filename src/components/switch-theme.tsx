"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export function SwitchTheme() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-muted/60 px-3 hover:bg-muted"
          onClick={() => setTheme("light")}
        >
          <Sun className="w-6 h-6 text-yellow-400" />
        </Button>
      );
    }

    return (
      <Button
        className="bg-muted/60 px-3 hover:bg-muted"
        onClick={() => setTheme("dark")}
      >
        <Moon className="w-6 h-6 text-gray-800" />
      </Button>
    );
  };

  return (
    <>
      {mounted ? (
        renderThemeChanger()
      ) : (
        <Skeleton className="w-6 h-6 rounded-md" />
      )}
    </>
  );
}
