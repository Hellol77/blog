import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayout({
  children,
  title,
  description,
}: PageLayoutProps) {
  return (
    <div className="flex flex-col gap-2 bg-background px-5 pb-16 pt-7">
      {title && <h1 className=" text-2xl font-semibold">{title}</h1>}
      {description && <span className=" text-subText">{description}</span>}
      {children}
    </div>
  );
}
