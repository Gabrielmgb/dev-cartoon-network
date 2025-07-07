import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { newEpisodes } from "@/lib/data";
import { PlayCircle } from "lucide-react";

export default function NewEpisodes() {
  return (
    <section>
      <SectionTitle>Novos Episódios</SectionTitle>
      <div className="space-y-4">
        {newEpisodes.map((episode) => (
          <div
            key={episode.title}
            className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden p-4 gap-4 transition-shadow hover:shadow-lg"
          >
            <div className="flex-shrink-0 w-full sm:w-48">
              <Image
                src={episode.image}
                alt={`Cena de ${episode.title}`}
                width={200}
                height={112}
                className="rounded-md object-cover w-full"
              />
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-500">{episode.show}</p>
              <h3 className="text-lg font-bold text-gray-800">
                {episode.title}
              </h3>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <Button
                asChild
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600"
              >
                <Link href={episode.href} target="_blank">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Assistir Agora
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
