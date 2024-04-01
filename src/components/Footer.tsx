import { PieChart, Plus } from "lucide-react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-10 py-4 w-full bg-white border-t-[1px] xl:w-[430px] border-zinc-200">
      <div className="flex flex-row items-center justify-around">
        <Link href="/summary">
          <div className="flex flex-col items-center">
            <PieChart className="w-5 h-5 text-zinc-500" />
            <p className="text-zinc-500 text-xs">Analytics</p>
          </div>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <Drawer >
            <DrawerTrigger className="">
              <div className="bg-yellow-100 rounded-full p-1">
                <Plus className="size-7" />
              </div>
            </DrawerTrigger>
            <DrawerContent className="w-full xl:w-[450px] mx-auto">
              <DrawerHeader >
                <DrawerTitle>Add Expense</DrawerTitle>
                <DrawerClose />
              </DrawerHeader>

            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </footer>
  );
}
