import { PieChart, Plus } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-10 py-4 w-full bg-white border-t-[1px] border-zinc-200">
      <div className="flex flex-row items-center justify-around">
        <Link href="/summary">
          <div className="flex flex-col items-center">
            <PieChart className="w-5 h-5 text-zinc-500" />
            <p className="text-zinc-500 text-xs">Analytics</p>
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <div className="bg-yellow-100 rounded-full p-1">
            <Plus className="size-7" />
          </div>
        </div>
      </div>
    </footer>
  );
}
