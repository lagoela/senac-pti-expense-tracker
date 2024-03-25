interface ExpenseProps {
    icon: string;
    title: string;
    amount: number;
    date: Date;
}

export default function Expense({ icon, title, amount, date }: ExpenseProps) {

    return (
        <div className="flex flex-row items-center w-full px-10 py-2">
            <p className="text-5xl">{icon}</p>
            <div className="flex-grow col-span-2 ml-2 flex flex-col items-start">
                <h3 className="text-lg font-semibold">{title}</h3>
                <span className="text-gray-500">{date.toTimeString().substring(0, 5)}</span>
            </div>
            <div className="flex flex-row items-center">
                <h3 className="mr-2">{'R$ ' + amount}</h3>
            </div>
        </div>
    )
}