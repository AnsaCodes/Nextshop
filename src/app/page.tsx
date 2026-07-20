import Navbar from "./components/navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">
          Home Page
        </h1>
      </main>
    </>
  );
}