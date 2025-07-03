"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { gamesData } from "@/lib/data"
import GameCard from "./game-card"
import { Button } from "@/components/ui/button"

export default function GamesClientPage() {
  const [filter, setFilter] = useState("Todos")
  const featuredGame = gamesData[0]
  const otherGames = gamesData.slice(1)

  const categories = useMemo(() => {
    const allCategories = new Set(otherGames.map((game) => game.category))
    return ["Todos", ...Array.from(allCategories)]
  }, [otherGames])

  const filteredGames = useMemo(() => {
    if (filter === "Todos") {
      return otherGames
    }
    return otherGames.filter((game) => game.category === filter)
  }, [filter, otherGames])

  return (
    <div className="space-y-12">
      {/* Featured Game Section */}
      <section className="bg-black text-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 relative min-h-[250px]">
          <Image
            src={`/jogos/game-banner.webp?width=600&height=400&query=${encodeURIComponent(featuredGame.imageQuery)}`}
            alt={`Imagem de ${featuredGame.title}`}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-yellow-300">{featuredGame.title}</h2>
          <p className="mt-2 mb-6 text-gray-300">{featuredGame.description}</p>
          <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold self-start">
            <Link href={featuredGame.href}>JOGAR AGORA</Link>
          </Button>
        </div>
      </section>

      {/* Games Grid Section */}
      <section>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category ? "bg-blue-600 text-white" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  )
}
