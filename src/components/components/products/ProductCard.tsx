import Image from "next/image";

type Product = {
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  image: string;
};

export default function ProductCard({
  name,
  category,
  price,
  oldPrice,
  image,
}: Product) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-72 overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      <div className="p-5">

        <p className="text-sm text-gray-500">
          {category}
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          {name}
        </h3>

        <div className="mt-3 flex items-center gap-3">

          <span className="text-xl font-bold text-orange-500">
            ${price}
          </span>

          <span className="text-gray-400 line-through">
            ${oldPrice}
          </span>

        </div>

      </div>

    </div>
  );
}