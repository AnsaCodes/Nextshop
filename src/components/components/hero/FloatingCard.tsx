export default function FloatingCard() {
  return (
    <>
      {/* Discount Card */}

      <div className="absolute left-6 top-16 z-20 rounded-2xl bg-white p-5 shadow-xl">
        <p className="text-sm text-gray-500">Special Offer</p>

        <h3 className="text-2xl font-bold text-orange-500">
          50% OFF
        </h3>
      </div>

      {/* Review Card */}

      <div className="absolute bottom-4 right-6 z-20 rounded-2xl bg-white p-5 shadow-xl">
        <p className="text-sm text-gray-500">
          Happy Customers
        </p>

        <h3 className="text-2xl font-bold">
          12K+
        </h3>
      </div>
    </>
  );
}