import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar/NavBar";

const fira = Fira_Sans({ weight: '400', subsets: ["latin"] });

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
    <html lang="en">
      <body className={fira.className} suppressHydrationWarning={true}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
