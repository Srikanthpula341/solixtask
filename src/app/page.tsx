"use client";

import { Counter } from "@/components/counter/Counter";
import HomeComponent from "@/components/home";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-slate-950">
      <Counter/>
      <HomeComponent />
    </main>
  );
}
