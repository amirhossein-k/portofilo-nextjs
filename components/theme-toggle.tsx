"use client";

import sun from "../public/images/sun.svg";
import sun2 from "../public/images/sun2.png";
import moon from "../public/images/moon.svg";
import {useTheme} from "next-themes";
import Image from "next/image";

export function ThemeToggle() {
  const {theme, setTheme} = useTheme();

  return (
    <button
      className="relative inline-flex"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Image
        alt="moon"
        src={moon}
        width={19}
        className=" absolute transition-all scale-100 rotate-90 dark:rotate-0 dark:scale-0"
      />
      <Image
        alt="sun"
        src={sun2}
        width={19}
        className="transition-all scale-0 rotate-0 dark:rotate-90 dark:scale-100 "
      />

      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}
