import HomeComponent from "@/components/home";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-slate-950">
      <HomeComponent/>
    </main>
  );
}
