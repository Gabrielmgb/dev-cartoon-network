"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";
import type { Game } from "@/lib/types"; // Assuming you'll create this type

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative w-full aspect-video">
        <Image
          src={game.image}
          alt={`Capa do jogo ${game.title}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="font-bold text-lg text-gray-800 truncate h-7">
          {game.title}
        </h3>
        <Button asChild className="mt-3 w-full bg-gray-800 hover:bg-black">
          <Link href={game.href}>
            <Gamepad2 className="mr-2 h-4 w-4" />
            Jogar
          </Link>
        </Button>
      </div>
    </div>
  );
}
