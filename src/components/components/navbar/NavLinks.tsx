import Link from "next/link";

const links = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Categories", href: "/categories" },
  { title: "Pages", href: "/pages" },
  { title: "Contact", href: "/contact" },
];

export default function NavLinks() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="font-medium text-gray-700 transition hover:text-orange-500"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}