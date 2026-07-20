import Navbar from "@/components/components/navbar/Navbar";
import Hero from "@/sections/home/Hero";
import Categories from "@/sections/home/Categories";
import FeaturedProducts from "@/sections/home/FeaturedProducts";
import PromoBanner from "@/sections/home/PromoBanner";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
<Categories />
<PromoBanner />

<FeaturedProducts />
    </>
  );
}