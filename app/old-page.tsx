"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gamepad2,
  Play,
  BusIcon as SoccerBall,
  Globe,
  Smartphone,
  X,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Custom CNLogo component to replicate the logo from the screenshot
const CNLogo = () => (
  <svg
    width="120"
    height="60"
    viewBox="0 0 120 60"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="55" height="55" fill="white" />
    <rect x="65" width="55" height="55" fill="black" />
    <path d="M20 10 H 35 V 20 H 25 V 45 H 35 V 55 H 20 V 10 Z" fill="black" />
    <path
      d="M75 10 H 90 V 20 H 80 V 25 H 95 V 40 H 80 V 45 H 90 V 55 H 75 V 10 Z"
      fill="white"
    />
    <text
      x="5"
      y="58"
      fontFamily="Arial, sans-serif"
      fontSize="8"
      fill="white"
      fontWeight="bold"
    >
      CARTOON NETWORK
    </text>
  </svg>
);

export default function CartoonNetworkPage() {
  const [isAdVisible, setIsAdVisible] = useState(true);

  const navItems = [
    { icon: Gamepad2, label: "JOGOS" },
    { icon: Play, label: "VÍDEOS" },
    { icon: SoccerBall, label: "LIGA TOON" },
    { icon: Globe, label: "CAMPEÕES DO CLIMA" },
    { icon: Smartphone, label: "APLICAÇÕES" },
  ];

  const characters = [
    { name: "Earth", color: "bg-green-500", query: "planet earth cartoon" },
    {
      name: "Boy with purple hat",
      color: "bg-purple-300",
      query: "cartoon boy with purple hat",
    },
    {
      name: "Orange character",
      color: "bg-yellow-300",
      query: "orange cartoon character with antlers",
    },
    {
      name: "Hero girl",
      color: "bg-cyan-300",
      query: "female cartoon hero with green visor",
    },
    { name: "Robin", color: "bg-yellow-400", query: "cartoon robin superhero" },
    {
      name: "Grizzly Bear",
      color: "bg-pink-300",
      query: "brown grizzly bear cartoon",
    },
    {
      name: "Gumball",
      color: "bg-blue-300",
      query: "gumball cartoon character",
    },
    {
      name: "Soccer ball",
      color: "bg-yellow-500",
      query: "abstract soccer ball logo",
    },
    {
      name: "Bugs Bunny",
      color: "bg-red-400",
      query: "bugs bunny cartoon character",
    },
    {
      name: "Swirl Logo",
      color: "bg-gray-800",
      query: "black and white swirl logo",
    },
    {
      name: "Babs Bunny",
      color: "bg-yellow-200",
      query: "female bunny cartoon character",
    },
    {
      name: "Scooby Doo",
      color: "bg-pink-500",
      query: "scooby doo cartoon character",
    },
  ];

  const mainContent = [
    {
      query:
        "cartoon adventure game screenshot with fantasy characters in a forest",
    },
    {
      query:
        "colorful cartoon network banner with multiple characters and text",
    },
    { query: "cartoon soccer game screenshot with superheroes and bears" },
    { query: "blue cartoon character running fast with speed lines" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-black text-white">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <Link href="#" aria-label="Cartoon Network Home">
            <CNLogo />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="flex flex-col items-center space-y-1 group"
              >
                <item.icon className="h-8 w-8 text-white group-hover:text-yellow-400 transition-colors" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-8">
        <section>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {characters.map((char, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/8 md:basis-1/12 lg:basis-1/14"
                >
                  <div className="p-1">
                    <div
                      className={`w-20 h-20 rounded-full ${char.color} flex items-center justify-center overflow-hidden border-2 border-white shadow-md`}
                    >
                      <Image
                        src={`/placeholder.svg?width=80&height=80&query=${encodeURIComponent(
                          char.query
                        )}`}
                        alt={char.name}
                        width={76}
                        height={76}
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/80 hover:bg-white border-gray-300 -left-4" />
            <CarouselNext className="bg-white/80 hover:bg-white border-gray-300 -right-4" />
          </Carousel>
        </section>

        <section>
          <Carousel
            opts={{ loop: true }}
            className="w-full"
            plugins={
              [
                // Autoplay({ delay: 5000 }),
              ]
            }
          >
            <CarouselContent>
              {mainContent.map((content, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden rounded-2xl">
                      <CardContent className="p-0">
                        <Image
                          src={`/placeholder.svg?width=400&height=225&query=${encodeURIComponent(
                            content.query
                          )}`}
                          alt={`Promotional content ${index + 1}`}
                          width={400}
                          height={225}
                          className="w-full h-auto object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/80 hover:bg-white border-gray-300 -left-4" />
            <CarouselNext className="bg-white/80 hover:bg-white border-gray-300 -right-4" />
          </Carousel>
        </section>

        {isAdVisible && (
          <section className="text-center space-y-2">
            <p className="text-xs text-gray-500">Publicidade</p>
            <div className="relative max-w-4xl mx-auto">
              <Link href="#">
                <Image
                  src={`/placeholder.svg?width=970&height=250&query=ben 10 alien force cartoon banner`}
                  alt="Ben 10 Advertisement"
                  width={970}
                  height={250}
                  className="w-full h-auto rounded-lg"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1 h-6 w-6 bg-white/50 hover:bg-white/80"
                onClick={() => setIsAdVisible(false)}
                aria-label="Close advertisement"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
