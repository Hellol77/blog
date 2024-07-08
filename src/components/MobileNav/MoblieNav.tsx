"use client";
import { Menu } from "lucide-react";
import MobileNavSheet from "@/components/MobileNav/MobileNavSheet";
import MobileNavTrigger from "@/components/MobileNav/MobileNavTrigger";
import MobileNavContent from "@/components/MobileNav/MobileNavContent";
import NAVIGATION from "@/constants/navigation";
import Link from "next/link";
import { useState } from "react";
import { Margarine } from "@/styles/fonts/font";

export default function MoblieNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuOpen = () => setIsMenuOpen((prev) => !prev);
  return (
    <>
      <MobileNavSheet isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen}>
        <MobileNavTrigger>
          <Menu />
        </MobileNavTrigger>
        <MobileNavContent>
          <nav className="mt-20 flex flex-col items-center justify-center gap-8">
            {NAVIGATION.map((nav) => (
              <Link
                onClick={toggleMenuOpen}
                className={` text-lg ${Margarine.className}   duration-2000 text-subText transition hover:text-textBasic`}
                key={nav.label}
                href={nav.href}
              >
                {nav.label}
              </Link>
            ))}
          </nav>
        </MobileNavContent>
      </MobileNavSheet>
    </>
  );
}
