import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { climateTips } from "@/lib/data";
import { Leaf } from "lucide-react";

export default function CampeoesDoClimaPage() {
  return (
    <div className="bg-blue-50 min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-sky-300 to-green-300 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <Image
              src="/dev-cartoon-network/campeoes-do-clima/campeoes-do-clima-logo.jpg?width=200&height=200"
              alt="Campeões do Clima Logo"
              width={150}
              height={150}
              className="mx-auto mb-4 rounded-[30px]"
            />
            <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
              Seja um Campeão do Clima!
            </h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Junte-se aos seus personagens favoritos para proteger nosso
              planeta. Pequenas ações criam um futuro gigante!
            </p>
          </div>
        </section>
        {/* Tips Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Dicas para Salvar o Planeta
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {climateTips.map((tip) => (
              <Card
                key={tip.title}
                className="text-center border-2 border-green-200 hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={tip.icon}
                      alt={`${tip.title} icon`}
                      width={80}
                      height={80}
                      className="p-3 bg-green-100 rounded-full mx-auto"
                    />
                    <Image
                      src={tip.image}
                      alt="Character"
                      width={40}
                      height={40}
                      className="absolute bottom-0 right-0 rounded-full border-2 border-white bg-neutral-200"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-lg font-bold"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.turner.cartoonnetworkclimatechampions&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Leaf className="mr-2 h-5 w-5" />
                Junte-se ao Movimento
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
