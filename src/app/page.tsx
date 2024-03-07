import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="mx-24 flex flex-col items-center md:mx-72 pt-4">
        <h1 className="text-5xl">Expense Tracker</h1>
        <p className="text-xl">Keep track of your expenses</p>
      </div>
    </main>
  );
}
