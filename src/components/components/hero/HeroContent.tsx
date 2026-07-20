export default function HeroContent() {
  return (
    <div className="space-y-6">

      <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
        ✨ New Summer Collection 2026
      </span>

      <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
        Discover
        <br />
        Premium Fashion
      </h1>

      <p className="max-w-xl text-lg text-gray-600">
        Explore the latest trends with premium quality clothing,
        accessories and lifestyle essentials designed for modern living.
      </p>

      <div className="flex gap-4">
        <button className="rounded-full bg-black px-8 py-4 text-white transition hover:bg-orange-500">
          Shop Now
        </button>

        <button className="rounded-full border border-gray-300 px-8 py-4 hover:bg-gray-100">
          Explore
        </button>
      </div>

    </div>
  );
}