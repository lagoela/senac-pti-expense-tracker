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

export interface ExpensesProps {
  icon: string;
  title: string;
  amount: number;
  date: Date;
}

export default function Home() {
  const [expenses, setExpenses] = useState<ExpensesProps[]>([]);

  useEffect(() => {
    if (localStorage.getItem("expenses")) {
      const local_data = localStorage.getItem("expenses");
      JSON.parse(local_data as string).forEach((expense: ExpensesProps) => {
        expense.date = new Date(expense.date);
        setExpenses([...expenses, expense]);
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

  function removeExpense (index: number) {
    setExpenses(expenses.filter((_, i) => i !== index))
  }

  function addNewExpense ({ tag, title, amount }: { tag: string; title: string; amount: number }) {
    setExpenses((prev) => [...prev, { icon: tag, title, amount, date: new Date() }]);
  };

  return (
    <main className="flex flex-col items-center">
      <div className={`bg-white flex flex-col justify-center items-center w-full xl:w-[430px] z-0 ${expenses.length === 0 ? 'mb-30': 'mb-32'}`}>
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
          <Expenses expenses={expenses} removeExpense={removeExpense} />
        </div>
        <Footer createExpenseFunc={addNewExpense}/>
      </div>
    </main>
  );
}
