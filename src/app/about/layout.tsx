import { FC, ReactNode } from "react";
import { AboutUsInfo } from "../../app/components/AboutUs/AboutUsInfo";
import { NavBar } from "../../app/components/AboutUs/NavBar";

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pb-20 tablet:pb-[120px] desktop:pb-40">
      <AboutUsInfo />
      <NavBar />
      {children}
    </main>
  );
}
