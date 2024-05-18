import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-5 bg-background px-5 pb-16 pt-7">
      {children}
    </div>
  );
}
