import { FC, ReactNode } from "react";
import { AboutUsInfo } from "../app/components/AboutUs/AboutUsInfo";
import { NavBar } from "../app/components/AboutUs/NavBar";

interface AboutLayoutProps {
  children: ReactNode;
}

const AboutLayout: FC<AboutLayoutProps> = ({ children }) => (
  <>
    <AboutUsInfo />
    <NavBar />
    {children}
  </>
);

export default AboutLayout;
