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

export default function Home() {
  const expenses = [
    {
      icon: "🍔",
      title: "Food",
      amount: -100,
      date: new Date(Date.parse("04 Dec 2023 00:34:12")),
    },
    {
      icon: "👶",
      title: "Baby",
      amount: -250,
      date: new Date(Date.parse("05 Mar 2024 15:24:12")),
    },
    {
      icon: "💵",
      title: "Salary",
      amount: 400,
      date: new Date(Date.parse("06 Mar 2024 15:24:12")),
    },
    {
      icon: "💻",
      title: "Software Development",
      amount: 1000,
      date: new Date(Date.parse("10 Jan 2024 09:00:00")),
    },
    {
      icon: "📚",
      title: "Education",
      amount: -500,
      date: new Date(Date.parse("15 Feb 2024 14:30:00")),
    },
    {
      icon: "🚗",
      title: "Transportation",
      amount: -50,
      date: new Date(Date.parse("20 Feb 2024 08:45:00")),
    },
    {
      icon: "🛒",
      title: "Groceries",
      amount: -200,
      date: new Date(Date.parse("25 Feb 2024 18:15:00")),
    },
    {
      icon: "💪",
      title: "Gym Membership",
      amount: -80,
      date: new Date(Date.parse("02 Mar 2024 17:30:00")),
    },
    {
      icon: "🎁",
      title: "Gift",
      amount: -30,
      date: new Date(Date.parse("05 Mar 2024 10:00:00")),
    },
    {
      icon: "💡",
      title: "Utilities",
      amount: -150,
      date: new Date(Date.parse("10 Mar 2024 12:00:00")),
    },
    {
      icon: "🎉",
      title: "Entertainment",
      amount: -100,
      date: new Date(Date.parse("15 Mar 2024 20:00:00")),
    },
    {
      icon: "💻",
      title: "Freelance Work",
      amount: 500,
      date: new Date(Date.parse("20 Mar 2024 09:30:00")),
    },
    {
      icon: "🍔",
      title: "Restaurant",
      amount: -64.223,
      date: new Date(Date.parse("25 Mar 2024 13:45:00")),
    },
  ];

  const getAllExpenses = () => {
    let expensesValue = 0;
    expenses.forEach((expense) => (expensesValue += expense.amount));
    return expensesValue;
  };

  return (
    <main className="flex flex-col items-center">
      <div className="bg-white h-full">
        <div className="bg-white flex flex-col justify-center items-center w-full xl:w-[430px] z-0">
          <Header />
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="flex flex-col items-center justify-center w-full h-[450px]">
              <h3 className="">Spent this month</h3>
              <h1
                className={`text-4xl ${
                  getAllExpenses() < 0 ? "text-red-400" : "text-green-500"
                }`}
              >
                R${" "}
                <span className="text-5xl">
                  {getAllExpenses()
                    .toFixed(2)
                    .toString()
                    .slice(
                      0,
                      getAllExpenses().toFixed(2).toString().length - 3
                    )}
                </span>
                .
                <span>
                  {getAllExpenses()
                    .toFixed(2)
                    .toString()
                    .slice(
                      getAllExpenses().toFixed(2).toString().length - 2,
                      getAllExpenses().toFixed(2).toString().length
                    )}
                </span>
              </h1>
            </div>
            <Expenses expenses={expenses} />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
