"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Show } from "@/lib/types";
import { useEffect } from "react";

interface ShowDetailsModalProps {
  show: Show | null;
  onClose: () => void;
}

export default function ShowDetailsModal({
  show,
  onClose,
}: ShowDetailsModalProps) {

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 -inset-y-8 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 rounded-lg"
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl shadow-black w-full max-w-4xl max-h-[86vh] overflow-y-auto relative"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-3 right-3 z-10 bg-white/50 hover:bg-white/80 rounded-full"
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="relative h-60 md:h-80 w-full">
              <Image
                src={show.banner}
                alt={`Banner de ${show.name}`}
                fill
                className="object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <h2 className=" text-2xl md:text-3xl font-extrabold text-yellow-500 -mt-12 md:-mt-[52px] relative z-10 drop-shadow-lg bg-gray-600/2 backdrop-blur-sm rounded-2xl text-center">
                {show.name}
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mt-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Sobre o Desenho
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {show.description}
                  </p>

                  <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
                    Personagens Principais
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {show.characters.map((char) => (
                      <div
                        key={char.name}
                        className="flex flex-col items-center text-center w-16 md:w-20"
                      >
                        <Image
                          src={char.char}
                          alt={char.name}
                          width={64}
                          height={64}
                          className="rounded-full object-cover border-2 border-gray-200 w-12 h-12 md:w-20 md:h-20 shadow-md transform transition-transform hover:scale-110"
                        />
                        <span className="text-xs mt-2 font-semibold text-gray-700">
                          {char.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg md:h-[160px]">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Detalhes
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <strong>Criador:</strong> {show.details.creator}
                    </li>
                    <li>
                      <strong>Ano:</strong> {show.details.year}
                    </li>
                    <li>
                      <strong>Episódios:</strong> {show.details.episodes}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
