"use client";

import Image from "next/image";
import Header from "../components/Header";
import { Pencil, Plus, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

export default function Home() {
  interface Expense {
    title: string;
    amount: number;
    date: Date;
  }

  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);

  const [expenses, setExpenses] = useState<Expense[]>([
    {
      title: "Food",
      amount: 12,
      date: new Date("2024-01-01"),
    },
  ]);

  const handleAddExpense = (e: { preventDefault(): void }) => {
    setExpenses([
      ...expenses,
      {
        title: expenseTitle,
        amount: expenseAmount,
        date: new Date(),
      },
    ]);

    setExpenseTitle("");
    setExpenseAmount(0);

    e.preventDefault();
  };

  return (
    <main className="space-y-4">
      <Header />
      <div className="cool-bg h-full w-full top-20" />
      <div className="mx-24 md:mx-80 pt-4 text-black">
        <h1 className="text-5xl">Expense Tracker</h1>
        <p className="text-xl">Keep track of your expenses</p>
      </div>
      <div className="pt-5 mx-10 md:mx-80">
        <Table className="md:px-12">
          <TableHeader>
            <TableRow>
              <TableHead>Expense</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="">Date</TableHead>
              <TableHead className="w-[20%]">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="items-end rounded-lg flex flex-row gap-2 p-1 px-3 bg-zinc-200 border-white border text-muted-foreground text-black">
                      <Plus size={20} /> Add Expense
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Expense</DialogTitle>
                      <p className="text-sm text-muted-foreground">
                        Please detail your expense
                      </p>
                      <DialogClose />
                    </DialogHeader>
                    <DialogDescription>
                      <form
                        action=""
                        className="flex flex-col gap-5"
                        onSubmit={(e) => {
                          handleAddExpense(e);
                        }}
                      >
                        <div className="grid grid-cols-3 items-center">
                          <Label htmlFor="expense" className="col-span-1">
                            Expense
                          </Label>
                          <Input
                            id="expense"
                            type="text"
                            className="col-span-2"
                            value={expenseTitle}
                            onChange={(e) => setExpenseTitle(e.target.value)}
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center">
                          <Label htmlFor="amount" className="col-span-1">
                            Amount
                          </Label>
                          <Input
                            id="amount"
                            type="number"
                            className="col-span-2"
                            max={999999}
                            value={expenseAmount}
                            onChange={(e) =>
                              setExpenseAmount(e.target.valueAsNumber)
                            }
                          />
                        </div>
                        <footer className="flex justify-end gap-2">
                          <DialogClose>
                            <Button type="submit">Add</Button>
                          </DialogClose>
                          <DialogClose>
                            <Button type="button" variant="secondary">
                              Cancel
                            </Button>
                          </DialogClose>
                        </footer>
                      </form>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense, index) => (
              <TableRow key={index}>
                <TableCell>{expense.title}</TableCell>
                <TableCell>${expense.amount}</TableCell>
                <TableCell>
                  {expense.date.toLocaleDateString("pt-br")}
                </TableCell>
                <TableCell>
                  <div className="flex flex-row gap-4 justify-start">
                    <button>
                      <Pencil size={18} className="text-zinc-900 text-end" />
                    </button>
                    <button>
                      <Trash2 size={18} className="text-zinc-900 text-end" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
