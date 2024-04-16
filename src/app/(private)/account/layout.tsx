import { Footer } from "@/components/Footer/Footer";
import { NavBar } from "@/components/NavBar/NavBar";
import { Subscribe } from "@/components/Subscribe/Subscribe";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Subscribe />
      <Footer />
    </>
  );
}
