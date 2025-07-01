import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/ui/section-title"
import { featuredShows } from "@/lib/data"

export default function FeaturedShows() {
  return (
    <section>
      <SectionTitle>Desenhos em Destaque</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {featuredShows.map((show) => (
          <Link href={show.href} key={show.name} className="group">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-0">
                <Image
                  src={show.image}
                  alt={show.name}
                  width={200}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="p-2 bg-black bg-opacity-70">
                  <h3 className="text-white text-sm font-bold text-center truncate group-hover:text-yellow-300">
                    {show.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
