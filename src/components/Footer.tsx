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
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";
import { revalidatePath } from "next/cache";

export default function Footer(createExpenseFunc: any) {

  const [drawerState, setDrawerState] = useState<boolean>(false);

  const [tag, setTag] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>();

  const handleSubmit = (e: {preventDefault(): void}) => {
    e.preventDefault();
    
    if (tag === "" || title === "" || amount === 0) {
      alert("Please fill in all the fields");
      return;
    }

    createExpenseFunc({ tag, title, amount });
    
    setDrawerState(false);
    revalidatePath;
  }

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
          <Drawer open={drawerState} onOpenChange={setDrawerState}>
            <DrawerTrigger className="" onClick={(e) => {setDrawerState(true)}}>
              <div className="bg-yellow-100 rounded-full p-1">
                <Plus className="size-7" />
              </div>
            </DrawerTrigger>
            <DrawerContent className="w-full xl:w-[450px] mx-auto">
              <DrawerHeader>
                <DrawerTitle className="text-2xl">Add Expense</DrawerTitle>
                <DrawerClose />
              </DrawerHeader>
              <form className="flex flex-col" onSubmit={(e) => {handleSubmit(e)}}>
                <h1 className="text-2xl mx-auto">Please select your tag</h1>
                <input
                  type="text"
                  placeholder=""
                  maxLength={2}
                  className="w-[25%] mb-14 mx-auto text-center text-6xl border-b-[1px]
                  focus:outline-none"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />
                <div className="grid grid-cols-2 items-center py-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="title" className="pr-4 flex-2">
                      Expense name
                    </Label>
                    <Label htmlFor="amount" className="pr-4 flex-2">
                      Expense amount
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Input
                      type="text"
                      placeholder="Title"
                      className="flex-1"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <Input
                      type="number"
                      placeholder="Amount"
                      className="flex-1"
                      name="amount"
                      onChange={(e) => setAmount(Number(e.target.value))}
                      value={amount}
                    />
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerDescription className="flex flex-row justify-end gap-2">
                    <Button
                      variant="secondary"
                      size="lg"
                      type="submit"
                    >
                      Add Expense
                    </Button>
                    <DrawerClose>
                      <Button variant="outline" size="lg">
                        Cancel
                      </Button>
                    </DrawerClose>
                  </DrawerDescription>
                </DrawerFooter>
              </form>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </footer>
  );
}
