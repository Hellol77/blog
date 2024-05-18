"use client";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
];

export default function Nav() {
  return (
    <ul className="hidden justify-center gap-4 sm:flex">
      {navigation.map((nav) => (
        <li key={nav.label}>
          <Link
            className="text-gray duration-2000 font-light transition hover:text-black"
            href={nav.href}
          >
            {nav.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
