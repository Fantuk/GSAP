import { ImageOnLoadAnimation } from "./components/ImageOnLoadAnimation";

export default function Home() {
  return (
    <main className="p-8">
      <ImageOnLoadAnimation />  
      <div className="h-[500px] w-full bg-gray-500 mt-8"/> {/* Блок показывает, что верстка не скачет */}
    </main>
  );
}
