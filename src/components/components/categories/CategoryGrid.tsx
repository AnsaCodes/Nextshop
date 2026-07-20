import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Women",
    image: "/images/categories/women1.jpg",
  },
  {
    title: "Men",
    image: "/images/categories/men1.jpg",
  },
  {
    title: "Shoes",
    image: "/images/categories/shoes.jpg",
  },
  {
    title: "Accessories",
    image: "/images/categories/beauty.jpg",
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {categories.map((item) => (
        <CategoryCard
          key={item.title}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  );
}