import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

export default function CategoryCard({ title, image }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
<div className="relative h-80 overflow-hidden">        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}