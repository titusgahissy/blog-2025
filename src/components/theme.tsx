"use client";

import { MoonStarIcon, SunDimIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export const ThemeSwitcher = () => {

  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMount(true), []);

  if (!mount) return null;

  const handleThemeChange = (theme: string) => {
    console.log("theme", theme);
    setTheme(theme);
    localStorage.setItem("theme", theme);
  }

  return (
    <>
      <div className="flex " aria-label="Toggle Theme" data-theme-toggle="">
        {currentTheme === "dark" && <button className="cursor-pointer" onClick={() => handleThemeChange("light")}><SunDimIcon className="size-6" /></button>}
        {currentTheme === "light" && <button className="cursor-pointer" onClick={() => handleThemeChange("dark")}><MoonStarIcon className="size-4" /></button>}
      </div>
    </>
  )
};