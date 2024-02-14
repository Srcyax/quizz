
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./header";
import "./globals.css";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers >
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
