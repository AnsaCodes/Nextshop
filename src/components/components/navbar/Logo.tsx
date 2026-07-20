import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
        N
      </div>

      <div>
        <h2 className="text-xl font-bold">NextShop</h2>
        <p className="text-xs text-gray-500">Premium Store</p>
      </div>
    </Link>
  );
}