import Image from "next/image";
import FloatingCard from "./FloatingCard";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">

      {/* Background Circle */}

      <div className="absolute h-[430px] w-[430px] rounded-full bg-orange-100"></div>

      {/* Small Circle */}

      <div className="absolute top-10 right-5 h-12 w-12 rounded-full bg-orange-300"></div>

      <div className="absolute bottom-12 left-6 h-8 w-8 rounded-full bg-orange-200"></div>

      {/* Hero Image */}

      <Image
        src="/images/hero/hero-model.jpg"
        alt="Hero Model"
        width={430}
        height={560}
        priority
        className="relative z-10 object-contain"
      />
      <FloatingCard />

    </div>
  );
}