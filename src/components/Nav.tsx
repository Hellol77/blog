"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Nav() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ul className="hidden items-center justify-center gap-4 sm:flex">
      {navigation.map((nav) => (
        <li key={nav.label}>
          <Link
            className="duration-2000 font-light text-subText transition hover:text-textBasic"
            href={nav.href}
          >
            {nav.label}
          </Link>
        </li>
      ))}
      <button className="h-12 w-12" onClick={toggleTheme}>
        <Sun className="h-5 w-5 transition-all dark:hidden" />
        <Moon className="hidden h-5 w-5 transition-all dark:block" />
      </button>
    </ul>
  );
}
