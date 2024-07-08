"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import NAVIGATION from "@/constants/navigation";
import MoblieNav from "@/components/MobileNav/MoblieNav";
import { Margarine } from "@/styles/fonts/font";

export default function Nav() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <ul className=" flex  items-center">
        <div className="hidden items-center justify-center gap-4 sm:flex">
          {NAVIGATION.map((nav) => (
            <li key={nav.label}>
              <Link
                className={`${Margarine.className}  duration-2000 text-subText transition hover:text-textBasic`}
                href={nav.href}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </div>
        <button
          className="flex h-12 w-12 items-center justify-center"
          onClick={toggleTheme}
        >
          <Sun className="h-5 w-5 transition-all dark:hidden" />
          <Moon className="hidden h-5 w-5 transition-all dark:block" />
        </button>
        <MoblieNav />
      </ul>
    </>
  );
}
