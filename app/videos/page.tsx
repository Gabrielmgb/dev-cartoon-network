import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import VideosClientPage from "./videos-client-page";

export default function VideosPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Galeria de Vídeos
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Relembre os melhores momentos dos seus desenhos favoritos!
          </p>
        </div>
        <VideosClientPage />
      </main>
      <Footer />
    </div>
  );
}
