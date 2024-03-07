export default function Header() {
    return (
        <header className="sticky top-0 space-x-2 md:flex md:flex-row md:justify-around text-white border-b-[1px] border-zinc-500">
            <div className="space-x-2 md:flex flex-row gap-2">
                <a href="">home</a>
                <a href="">despesas</a>
                <a href="">ganhos</a>
            </div>
        </header>
    );
}