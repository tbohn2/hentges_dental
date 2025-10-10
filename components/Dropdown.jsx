import Link from "next/link";

export default function Dropdown({ title, url, items }) {
    return (
        <div className="dropdown w-full">
            <span>{title}</span>
            <ul className="border-2 border-tertiary z-10 divide-y-2 bg-primary text-tertiary">
                {items.map((item) => (
                    <li className="whitespace-nowrap w-full py-1 px-2 hover:bg-tertiary hover:text-primary" key={item.name}><Link href={item.href}>{item.name}</Link></li>
                ))}
            </ul>
        </div>
    );
}