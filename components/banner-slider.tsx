"use client";

import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { bannerData } from "@/lib/data";

export default function BannerSlider() {
  return (
    <section>
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        className="w-full"
      >
        <CarouselContent>
          {bannerData.map((banner, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden">
              <Image
  src={banner.image}
  alt={banner.title}
  fill
  className="object-cover"
/>

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex flex-col justify-center p-8 md:p-12 lg:p-16">
                  <div className="max-w-md lg:max-w-lg text-white">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
                      {banner.title}
                    </h2>
                    <p className="mt-2 md:mt-4 text-base md:text-lg drop-shadow-md">
                      {banner.description}
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="mt-4 md:mt-6 bg-yellow-400 text-black hover:bg-yellow-500 font-bold"
                    >
                      <Link
                        href={banner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {banner.buttonText}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 bg-white/80 hover:bg-white" />
        <CarouselNext className="absolute right-4 bg-white/80 hover:bg-white" />
      </Carousel>
    </section>
  );
}
