import Container from "@/components/components/layout/Container";
export default function Hero() {
  return (
    <section className="bg-slate-50">
      <Container>
        <div className="grid min-h-[600px] grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold text-orange-500">
              New Collection 2026
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-7xl">
              Discover Your Perfect Style
            </h1>

            <p className="mb-8 max-w-lg text-gray-600">
              Discover premium fashion, modern lifestyle products and timeless
              collections crafted for everyday living.
            </p>

            <button className="rounded-full bg-black px-8 py-4 text-white hover:bg-orange-500">
              Shop Now
            </button>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex h-[500px] w-[500px] items-center justify-center rounded-full bg-orange-100">
              Hero Image
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}