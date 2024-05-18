"use client";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
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
            className="duration-2000 hover:text-textBasic text-subText font-light transition"
            href={nav.href}
          >
            {nav.label}
          </Link>
        </li>
      ))}
      <Button onClick={toggleTheme}>change</Button>
    </ul>
  );
}
