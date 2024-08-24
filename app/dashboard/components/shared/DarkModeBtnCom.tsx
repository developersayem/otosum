"use client";

import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";
import { useState } from "react";

export default function ModeToggle() {
  const { setTheme } = useTheme();
  // onClick={() => setTheme("light")}
  // onClick={() => setTheme("dark")}
  // onClick={() => setTheme("system")}
  const [themeState, setThemeState] = useState(true);

  return (
    <div
      className="mt-2 transition-transform ease-in-out duration-300"
      onClick={() => setThemeState(!themeState)}
    >
      {themeState ? (
        <button onClick={() => setTheme("light")}>
          <Sun size={24} />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <MoonStar size={24} />
        </button>
      )}
    </div>
  );
}
