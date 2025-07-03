"use client"

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import type { Video } from "@/lib/types"

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Link
      href={video.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={video.image}
          alt={`Thumbnail do vídeo ${video.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <Play className="h-12 w-12 text-white/80 drop-shadow-lg transform transition-transform group-hover:scale-110" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="p-4 flex-grow">
        <p className="text-xs text-gray-500 uppercase tracking-wider">{video.show}</p>
        <h3 className="font-bold text-md text-gray-800 group-hover:text-red-600 transition-colors">{video.title}</h3>
      </div>
    </Link>
  )
}
