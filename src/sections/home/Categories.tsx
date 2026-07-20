import Container from "@/components/components/layout/Container";
import CategoryGrid from "@/components/components/categories/CategoryGrid";

export default function Categories() {
  return (
    <section className="py-28">
      <Container>
        <h2 className="mb-4 text-center text-5xl font-bold">          Shop by Category
        </h2>

        <p className="mb-16 text-center text-gray-500">
          Discover our most popular collections.
        </p>

        <CategoryGrid />
      </Container>
    </section>
  );
}