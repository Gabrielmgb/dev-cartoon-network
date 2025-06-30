import Image from "next/image"
import Link from "next/link"
import { newsData } from "@/lib/data"

export default function NewsGallery() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">Cartoon News</h2>
        <p className="text-gray-500">As últimas novidades do seu universo favorito!</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((article) => (
          <Link
            href={article.href}
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={`/placeholder.svg?width=400&height=225&query=${encodeURIComponent(article.imageQuery)}`}
                alt={article.headline}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-xs font-bold text-red-600 uppercase">{article.category}</p>
              <h3 className="text-lg font-bold text-gray-800 my-1 flex-grow">{article.headline}</h3>
              <p className="text-sm text-gray-600">{article.snippet}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
