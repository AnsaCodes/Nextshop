export default function HeroContent() {
  return (
    <div>

      <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
        🔥 New Collection 2026
      </span>

      <h1 className="mt-6 text-6xl font-bold leading-tight lg:text-7xl">
        Discover
        <br />
        Premium Fashion
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
        Discover premium clothing, luxury accessories and timeless fashion
        designed for everyday elegance.
      </p>

      <div className="mt-10 flex gap-5">

        <button className="rounded-full bg-black px-8 py-4 text-white transition hover:bg-orange-500">
          Shop Now
        </button>

        <button className="rounded-full border border-gray-300 px-8 py-4 hover:bg-gray-100">
          Explore Collection
        </button>

      </div>

    </div>
  );
}