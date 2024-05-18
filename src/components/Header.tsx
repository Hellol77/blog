import MoblieNav from "@/components/MoblieNav";
import Nav from "@/components/Nav";
import React from "react";

export default function Header() {
  return (
    <header className=" border-subText relative z-40 flex h-16 w-full max-w-[1024px] flex-row flex-nowrap items-center justify-between gap-4 border-b-2 border-opacity-35 px-6">
      <h1>
        <p className=" text-textBasic text-lg font-semibold">
          헬롤&apos; s Blog
        </p>
      </h1>
      <MoblieNav />
      <Nav />
    </header>
  );
}
