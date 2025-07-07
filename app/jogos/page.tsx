import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import GamesClientPage from "./games-client-page";

export default function JogosPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Central de Jogos
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Os melhores e mais clássicos jogos do Cartoon Network!
          </p>
        </div>
        <GamesClientPage />
      </main>
      <Footer />
    </div>
  );
}
