interface ExpenseProps {
    icon: string;
    title: string;
    amount: number;
    date: Date;
    className?: string;
}

export default function Expense({ icon, title, amount, date, className }: ExpenseProps) {

    return (
        <div className={`flex flex-row items-center w-full pt-2 pb-4 border-b-[1px] border-zinc-200 ${className}`}>
            <p className="text-5xl">{icon}</p>
            <div className="flex-grow col-span-2 ml-2 flex flex-col items-start">
                <h3 className="text-lg font-semibold">{title}</h3>
                <span className="text-gray-500">{date.toTimeString().substring(0, 5)}</span>
            </div>
            <div className="flex flex-row items-center">
                <h3 className={`mr-2 ${amount < 0 ? "text-red-400" : "text-black"}`}>{'R$ ' + amount}</h3>
            </div>
        </div>
    )
}