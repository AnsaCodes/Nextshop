import Container from "@/components/components/layout/Container";
import HeroContent from "@/components/components/hero/HeroContent";
import HeroImage from "@/components/components/hero/HeroImage";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50">
      <Container>
        <div className="grid min-h-[700px] items-center gap-16 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>
      </Container>
    </section>
  );
}