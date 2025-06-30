"use client"

import Image from "next/image"
import type { Show } from "@/lib/types"

interface ShowCardProps {
  show: Show
  onSelect: () => void
}

export default function ShowCard({ show, onSelect }: ShowCardProps) {
  return (
    <div
      onClick={onSelect}
      className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      <div className="relative w-full aspect-[2/3]">
        <Image
          src={`/placeholder.svg?width=200&height=300&query=${encodeURIComponent(show.posterQuery)}`}
          alt={`Pôster de ${show.name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm md:text-base font-bold text-gray-800 text-center truncate group-hover:text-blue-600">
          {show.name}
        </h3>
      </div>
    </div>
  )
}
