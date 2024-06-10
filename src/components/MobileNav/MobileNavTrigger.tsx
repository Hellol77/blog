import React, { useContext } from "react";
import { MobileNavContext } from "@/components/MobileNav/MobileNavSheet";

export default function MobileNavTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toggleMenuOpen } = useContext(MobileNavContext);
  return (
    <div className="cursor-pointer sm:hidden" onClick={toggleMenuOpen}>
      {children}
    </div>
  );
}
