"use client";
import { GsapFrom } from "./Animations/GsapFrom";
import { GsapFromTo } from "./Animations/GsapFromTo";
import { GsapStagger } from "./Animations/GsapStagger";
import { GsapText } from "./Animations/GsapText";
import { GsapTimeline } from "./Animations/GsapTimeline";
import { GsapTo } from "./Animations/GsapTo";

export default function Home() {
  return (
    <main className="w-screen h-screen p-10 flex flex-col gap-16">
      <GsapTo />
      <GsapFrom/>
      <GsapFromTo/>
      <GsapTimeline/>
      <GsapStagger/>
      <GsapText/>
    </main>
  );
}
