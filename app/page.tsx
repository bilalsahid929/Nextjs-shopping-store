import { Metadata } from "next";
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
export const metadata: Metadata = {
  title: `CORA'L`,
  description: "Trendy handbags collection for your party animal",
};
