import Expense from "./Expense";
import { ExpensesProps } from "../app/page";

export default function ExpensesList({ expenses, removeExpense }: { expenses: ExpensesProps[], removeExpense: Function}) {
    return (
        <div className="flex flex-col gap-2 w-full px-4">
            {expenses.map((expense, index) => (
              <li key={index} className="list-none">
                <Expense
                  expense={expense}
                  index={index}
                  removeExpense={removeExpense}
                />
              </li>
            ))}
          </div>
    )
}