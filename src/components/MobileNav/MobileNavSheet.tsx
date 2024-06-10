import React, { createContext } from "react";

export const MobileNavContext = createContext<{
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
}>({ isMenuOpen: false, toggleMenuOpen: () => {} });

export default function MobileNavSheet({
  children,
  isMenuOpen,
  toggleMenuOpen,
}: {
  children: React.ReactNode;
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
}) {

  return (
    <MobileNavContext.Provider value={{ isMenuOpen, toggleMenuOpen }}>
      {isMenuOpen && (
        <>
          <div
            className=" bg-navBackdrop/80 absolute left-0 top-0 z-10 h-screen w-screen "
            onClick={toggleMenuOpen}
          />
        </>
      )}
      {children}
    </MobileNavContext.Provider>
  );
}
