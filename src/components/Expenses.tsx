import Expense from "./Expense";

interface Expense {
    icon: string;
    title: string;
    amount: number;
    date: Date;
}

export default function ExpensesList({ expenses }: { expenses: Expense[] }) {
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