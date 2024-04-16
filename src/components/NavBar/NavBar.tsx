"use client";

import { useState } from "react";

import { HiddenMenu } from "./HiddenMenu";
import { LeftSideNav } from "./LeftSideNav";
import { MainNav } from "./MainNav";
import { ToggleHiddenMenu } from "./ToggleHiddenMenu";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [eclipse, setEclipse] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setEclipse(true);
    }, 100);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setEclipse(false);
  };

  return (
    <header className="sticky top-0 flex border-b border-Black py-2 px-6 tablet:px-10 justify-between bg-White z-30 box-border">
      <ToggleHiddenMenu
        openMenu={openMenu}
        closeMenu={closeMenu}
        isOpen={isOpen}
        eclipse={eclipse}
      />

      <MainNav />

      <HiddenMenu isOpen={isOpen} closeMenu={closeMenu} />

      <LeftSideNav closeMenu={closeMenu} />
    </header>
  );
};
