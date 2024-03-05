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
    <>
      <AboutUsInfo />
      <NavBar />
      {children}
    </>
  );
}
