"use client";

import Image from "next/image";
import Header from "../components/Header";
import { Moon, LogOut, Plus, PieChart, Megaphone } from "lucide-react";
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
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Expenses from "@/components/Expenses";
import { start } from "repl";

export interface Expenses {
  icon: string;
  title: string;
  amount: number;
  date: Date;
}

export default function Home() {
  const [expenses, setExpenses] = useState<Expenses[]>([]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));

    if (localStorage.getItem("expenses")) {
      const local_data = localStorage.getItem("expenses");
      JSON.parse(local_data as string).forEach((expense: Expenses) => {
        setExpenses((prev) => [...prev, expense]);
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const getAllExpenses = () => {
    let expensesValue = 0;
    expenses.forEach((expense) => (expensesValue += expense.amount));
    return expensesValue;
  };

  
  function addNewExpense ({ tag, title, amount }: { tag: string; title: string; amount: number }) {
    setExpenses((prev) => [...prev, { icon: tag, title, amount, date: new Date() }]);
  };

  return (
    <main className="flex flex-col items-center">
      <div className="bg-white flex flex-col justify-center items-center w-full xl:w-[430px] z-0">
        <Header />
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="flex flex-col items-center justify-center w-full h-[450px]">
            <h3 className="">Spent this month</h3>
            <h1
              className={`text-4xl ${
                getAllExpenses() < 0
                  ? "text-red-400"
                  : getAllExpenses() > 0
                  ? "text-green-400"
                  : "text-zinc-500"
              }`}
            >
              R$ {getAllExpenses().toFixed(2)}
            </h1>
          </div>
          <Expenses expenses={expenses} />
        </div>
        <Footer createExpenseFunc={addNewExpense} />
      </div>
    </main>
  );
}
