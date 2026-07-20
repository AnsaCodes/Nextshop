import Image from "next/image";
import Container from "@/components/components/layout/Container";

export default function PromoBanner() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-10 overflow-hidden rounded-[40px] bg-orange-50 px-12 py-14 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-orange-200 px-4 py-2 text-sm font-semibold text-orange-700">
              Limited Offer
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Summer Sale
              <br />
              Up To 50% OFF
            </h2>

            <p className="mt-6 max-w-lg text-gray-600">
              Discover thousands of premium fashion products with exclusive
              discounts available for a limited time.
            </p>

            <button className="mt-8 rounded-full bg-black px-8 py-4 text-white transition hover:bg-orange-500">
              Shop Collection
            </button>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            <Image
              src="/images/banners/sale.jpg"
              alt="Sale"
              width={420}
              height={500}
              className="rounded-3xl object-cover shadow-xl"
            />

          </div>

        </div>
      </Container>
    </section>
  );
}