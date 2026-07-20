import Navbar from "@/components/components/navbar/Navbar";
import Hero from "@/sections/home/Hero";
import Categories from "@/sections/home/Categories";
import FeaturedProducts from "@/sections/home/FeaturedProducts";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
<Categories />
<FeaturedProducts />
    </>
  );
}