import { Subscribe } from "./components/Subscribe/Subscribe";
import { Bestsellers } from "./components/Bestsellers/Bestsellers";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";

export default function Home() {
  return (
    <main className="bg-Background">
      <SectionTitle title="bestsellers" link="#" />
      <Bestsellers />
      <Subscribe />
    </main>
  );
}