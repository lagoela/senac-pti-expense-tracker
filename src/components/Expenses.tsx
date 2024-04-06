import Expense from "./Expense";
import { Expenses } from "../app/page";

export default function ExpensesList({ expenses }: { expenses: Expenses[] }) {
    return (
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
    )
}