"use client";

import Image from "next/image";
import Header from "../components/Header";
import Expense from "../components/Expense";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const expenses = [
    { icon: "🍔", title: "Food", amount: -100, date: new Date() },
    { icon: "🚗", title: "Transport", amount: -50, date: new Date() },
    { icon: "💻", title: "Technology", amount: -200, date: new Date() },
    { icon: "🛒", title: "Shopping", amount: -80, date: new Date() },
    { icon: "🏠", title: "Rent", amount: -1000, date: new Date() },
    { icon: "💻", title: "Technology", amount: -200, date: new Date() },
    { icon: "🛒", title: "Shopping", amount: -80, date: new Date() },
    { icon: "🏠", title: "Rent", amount: -1000, date: new Date() },
    { icon: "💻", title: "Technology", amount: -200, date: new Date() },
    { icon: "🛒", title: "Shopping", amount: -80, date: new Date() },
    { icon: "🏠", title: "Rent", amount: -1000, date: new Date() },
    { icon: "💻", title: "Technology", amount: -200, date: new Date() },
    { icon: "🛒", title: "Shopping", amount: 80, date: new Date() },
    { icon: "🏠", title: "Rent", amount: -1000, date: new Date() },
  ];

  const getAllExpenses = () => {
    let expensesValue = 0;
    expenses.forEach((expense) => (expensesValue += expense.amount))
    return expensesValue;
  }

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center w-full xl:w-[430px] z-0">
        <Header />
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="flex flex-col items-center justify-center w-full h-[450px]">
            <h3 className="">Spent this month</h3>
            <h1 className={`text-4xl ${getAllExpenses() < 0 ? "text-red-400" : "text-green-500"}`}>{`R$ ${getAllExpenses().toFixed(2)}`}</h1>
          </div>
          <div className="flex flex-col gap-2 w-full px-4">
            {expenses.map((expense, index) => (
              <li key={index} className="list-none">
                <Expense
                  icon={expense.icon}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              </li>
            ))}
          </div>
        </div>
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
      </div>
    </main>
  );
}
