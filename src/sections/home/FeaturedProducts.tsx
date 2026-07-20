import Container from "@/components/components/layout/Container";
import ProductGrid from "@/components/components/products/ProductGrid";

export default function FeaturedProducts() {
  return (
    <section className="py-28">

      <Container>

        <h2 className="text-center text-5xl font-bold">
          Featured Products
        </h2>

        <p className="mt-4 mb-16 text-center text-gray-500">
          Explore our best selling premium products.
        </p>

        <ProductGrid />

      </Container>

    </section>
  );
}