import Image from "next/image";
import React from "react";
import construction from "../../public/construction.webp";

export default function UnderConstruction() {
  return (
    <section className="mt-40 flex w-full flex-col items-center justify-center gap-8">
      <Image height={300} width={220} alt="공사중" src={construction} />
      <p className=" text-2xl font-semibold">공사중 입니다.</p>
      <p className=" text-xl font-semibold">피해가세요!</p>
    </section>
  );
}
