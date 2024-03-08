export default function Header() {
    return (
        <header className="sticky text-center bg-white rounded-b-[12px] py-2 shadow-lg top-0 space-x-2 text-black md:flex md:flex-row md:justify-around border-b-[1px] border-zinc-100">
            <div className="space-x-2 md:flex flex-row gap-2">
                <a href="">home</a>
                <a href="">despesas</a>
                <a href="">ganhos</a>
            </div>
        </header>
    );
}