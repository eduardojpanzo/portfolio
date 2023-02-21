import { useTheme } from "next-themes";

export function Switch() {
  const { theme, setTheme } = useTheme();

  const hangleToggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }

    setTheme("dark");
  };

  return (
    <div
      onClick={hangleToggleTheme}
      className="relative w-10 h-5 rounded-xl bg-green-600 cursor-pointer dark:bg-slate-300"
    >
      <div className="w-5 h-5 left-0 bg-gray-200 rounded-full absolute transition-all dark:left-5 dark:bg-green-600"></div>
    </div>
  );
}
