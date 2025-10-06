import Link from "next/link";

export default function Dropdown({ title, url, items }) {
    return (
        <div className="dropdown w-full">
            <Link href={url}>{title}</Link>
            <ul className="border-2 border-tertiary z-10 divide-y-2 bg-primary text-tertiary">
                {items.map((item) => (
                    <li className="whitespace-nowrap w-full p-1 hover:bg-tertiary hover:text-primary" key={item.name}><Link href={item.href}>{item.name}</Link></li>
                ))}
            </ul>
        </div>
    );
}