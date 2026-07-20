import Link from "next/link";
import { FiHeart, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import Container from "../layout/Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Collection", href: "/collection" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="text-3xl font-bold">
            NextShop
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex gap-8 font-medium">
            {navLinks.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-5 text-2xl">

            <FiSearch />

            <FiHeart />

            <FiShoppingBag />

            <FiUser />

          </div>

        </div>
      </Container>
    </header>
  );
}