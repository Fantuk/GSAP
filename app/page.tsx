import { HorizontalAnimation } from "./components/HorizontalAnimation/HorizontalAnimation";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="w-screen h-[500px] bg-slate-500"/> 
      <HorizontalAnimation/>
      <div className="w-screen h-[500px] bg-green-500"/>
    </main>
  );
}
