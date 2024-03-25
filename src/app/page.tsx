"use client";

import Image from "next/image";
import Header from "../components/Header";
import Expense from "../components/Expense";
import { Moon, LogOut } from "lucide-react";
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
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center w-full xl:w-[430px] h-screen">
        <div className="flex flex-row items-center justify-between px-4 py-2 w-full">
          <Moon className="w-8 h-8" />
          <h1 className="">Expenses</h1>
          <LogOut className="w-8 h-8" />
        </div>
        <div className="flex flex-col items-center gap-2 h-full w-full">
          <div className="flex flex-col items-center justify-center w-full h-[450px]">
            <h3 className="">Spent this month</h3>
            <h1 className="text-4xl">{"R$ -150.00"}</h1>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Expense icon="🍔" title="Food" amount={-100} date={new Date()} />
            <Expense icon="🚗" title="Transport" amount={-50} date={new Date()} />
          </div>
        </div>
      </div>
    </main>
  );
}
