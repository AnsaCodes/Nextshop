import Container from "@/components/components/layout/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <NavLinks />
          <NavIcons />
        </div>
      </Container>
    </header>
  );
}