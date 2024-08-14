import Image from "next/image";
import { Suspense } from "react";
import Scene from "./components/Scene/Scene";
import Labels from "./components/Labels/Labels"

export default function Home() {
  return (
    <main className="w-full h-screen bg-zinc-950">
      <Labels />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </main>
  );
}
