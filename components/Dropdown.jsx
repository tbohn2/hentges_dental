import Link from "next/link";

export default function Dropdown({ title, items }) {
    return (
        <div className="dropdown w-full">
            <p>{title}</p>
            <ul className="border-2 border-black">
                {items.map((item) => (
                    <li className="whitespace-nowrap w-full inline-block" key={item.name}><Link href={item.href}>{item.name}</Link></li>
                ))}
            </ul>
        </div>
    );
}