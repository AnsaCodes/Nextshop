import Container from "@/components/components/layout/Container";
import HeroContent from "@/components/components/hero/HeroContent";
import HeroImage from "@/components/components/hero/HeroImage";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white">

      <Container>

<div className="grid min-h-[650px] items-center gap-20 py-16 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />

        </div>

      </Container>

    </section>
  );
}