import type { Metadata } from "next";
import "../styles/globals.css";
import { Pretendard } from "@/styles/fonts/font";
import Header from "@/components/Header";
import { ThemeProvider } from "@/styles/ThemeProvider";
import { NextUIProvider } from "@nextui-org/react";
import GoogleAnalytics from "@/components/googleAnalytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${Pretendard.className} relative bg-background`}
      suppressHydrationWarning
    >
      <body className="  mx-auto min-w-[320px] max-w-screen-md bg-background ">
        <NextUIProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex flex-col">
              <Header />
              {children}
            </main>
          </ThemeProvider>
        </NextUIProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "헬롤의 블로그",
  description: "헬롤의 블로그입니다. 여러 주제에 대해 다룹니다.",
  icons: {
    icon: "favicon.ico",
  },
};
