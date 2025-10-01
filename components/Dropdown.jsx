import Link from "next/link";

export default function Dropdown({ title, items }) {
    return (
        <div className="dropdown w-full">
            <p>{title}</p>
            <ul className="border-2 border-tertiary z-10 divide-y-2 bg-primary text-tertiary">
                {items.map((item) => (
                    <li className="whitespace-nowrap w-full inline-block p-1 hover:bg-tertiary hover:text-primary" key={item.name}><Link href={item.href}>{item.name}</Link></li>
                ))}
            </ul>
        </div>
    );
}