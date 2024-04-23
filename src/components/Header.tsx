import { LogOut, Moon } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 bg-white flex flex-row items-center justify-between px-4 py-2 w-full">
          <Moon className="w-8 h-8" />
          <h1 className="">Expenses</h1>
          <LogOut className="w-8 h-8" />
        </header>
    );
}