"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { characters } from "@/lib/data"

export default function CharacterCarousel() {
  return (
    <section>
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-1 py-3">
          {characters.map((char, index) => (
            <CarouselItem key={index} className="basis-1/4 sm:basis-1/6 md:basis-1/10 lg:basis-1/12 pl-6">
              <div>
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${char.color} flex items-center justify-center overflow-hidden border-2 border-white shadow-md transform transition-transform hover:scale-110`}
                >
                  <Image
                    src={char.image || `/placeholder.svg?width=80&height=80&query=${encodeURIComponent(char.query)}`}
                    alt={char.name}
                    width={76}
                    height={76}
                    className="object-cover rounded-full w-20 h-20"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/80 hover:bg-white border-gray-300 -left-2 md:-left-4 hidden md:flex" />
        <CarouselNext className="bg-white/80 hover:bg-white border-gray-300 -right-2 md:-right-4 hidden md:flex" />
      </Carousel>
    </section>
  )
}
