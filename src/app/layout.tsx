import type { Metadata } from "next";
import "../styles/globals.css";
import Providers from "@/app/providers";
import { Pretendard } from "@/styles/fonts/font";
import Header from "@/components/Header";
import { ThemeProvider } from "@/styles/ThemeProvider";
export const metadata: Metadata = {
  title: "Hellol's Blog",
  description: "헬롤의 블로그입니다. 여러 주제에 대해 다룹니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${Pretendard.className} bg-background`}>
      <body className="mx-auto min-w-[320px] max-w-screen-md bg-background">
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex flex-col">
              <Header />
              {children}
            </main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
