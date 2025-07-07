import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ShowsClientPage from "./shows-client-page";

export default function DesenhosPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center">
          Todos os Desenhos
        </h1>
        <ShowsClientPage />
      </main>
      <Footer />
    </div>
  );
}
