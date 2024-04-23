import { ExpensesProps } from "@/app/page";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogOverlay,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export default function Expense({
  expense,
  removeExpense,
  className,
  index,
}: {
  expense: ExpensesProps;
  removeExpense: Function;
  className?: string;
  index: number;
}) {
  return (
    <div
      className={`flex flex-row items-center w-full pt-2 pb-4 border-b-[1px] border-zinc-200 ${className}`}
    >
      <p className="text-5xl">{expense.icon}</p>
      <div className="flex-grow col-span-2 ml-2 flex flex-col items-start">
        <h3 className="text-lg font-semibold">{expense.title}</h3>
        <span className="text-gray-500">
          {expense.date.toTimeString().substring(0, 5)}
        </span>
      </div>
      <div className="flex flex-row items-center">
        <h3
          className={`mr-2 ${
            expense.amount < 0 ? "text-red-400" : "text-green-500"
          }`}
        >
          {"R$ " + expense.amount}
        </h3>
      </div>
      <div className="">
        <Dialog>
          <DialogTrigger>
            <button className="text-red-400">Delete</button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Expense</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Are you sure you want to delete this expense?
            </DialogDescription>
            <DialogFooter>
              <Button onClick={() => removeExpense(index)}>Delete</Button>
              <DialogClose>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
