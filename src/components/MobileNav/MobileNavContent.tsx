import { MobileNavContext } from "@/components/MobileNav/MobileNavSheet";
import { X } from "lucide-react";
import React, { useContext } from "react";

export default function MobileNavContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMenuOpen, toggleMenuOpen } = useContext(MobileNavContext);
  return (
    <>
      <div
        className={` fixed right-0 top-0 z-20 flex h-full w-56 flex-col gap-4 border-l-1 border-subText bg-background duration-300 ease-in-out  ${isMenuOpen ? "translate-x-0 " : "translate-x-full"}`}
      >
        {children}
        <X className="fixed right-0 top-0" onClick={toggleMenuOpen} />
      </div>
    </>
  );
}
