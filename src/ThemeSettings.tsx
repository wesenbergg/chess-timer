import clsx from "clsx";
import { useTheme } from "./hooks/useTheme";

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();

  return (
    <button
      type="button"
      aria-label="Switch theme between light and dark"
      className="relative h-12 w-24 cursor-pointer rounded-xl border border-white/20 bg-black/20 shadow-sm select-none"
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
    >
      <div
        aria-hidden="true"
        className={clsx(
          "absolute top-[6px] left-2 h-3/4 w-8 rounded-xl transition-transform duration-150 ease-in-out",
          {
            "translate-x-[46px] bg-purple-400": theme === "dark",
            "bg-purple-800": theme === "light",
          }
        )}
      />
      <div className="flex h-full items-center justify-around">
        <div
          aria-hidden="true"
          title="Light mode"
          className={clsx("z-20 w-8 font-bold dark:text-black", {
            "text-white": theme === "light",
          })}
        >
          L
        </div>
        <div
          aria-hidden="true"
          title="Dark mode"
          className={clsx("z-20 w-8 font-bold", {
            "text-primary": theme === "dark",
          })}
        >
          D
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
