import Image from "next/image";
import Banner from "./banner";
import Featured from "./featured";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  text-secondary">
      <Banner />
      <Featured />
    </main>
  );
}
