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

export default function Home() {
  const expenses = [
    { icon: "🍔", title: "Food", amount: -100, date: new Date(Date.parse('04 Dec 2023 00:34:12')) },
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
          <Expenses expenses={expenses}/>
        </div>
        <Footer />
      </div>
    </main>
  );
}
