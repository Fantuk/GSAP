import { Hero } from "./components/Hero/Hero";
import { Section_1 } from "./components/Section_1/Section_1";
import { Section_2 } from "./components/Section_2/Section_2";
import { Section_3 } from "./components/Section_3/Section_3";

export default function Home() {
  return (
    <main className="px-10 py-5 overflow-x-hidden">
      <Hero/>
      <Section_1/>
      <Section_2/>
      <Section_3/>
    </main>
  );
}
