"use client";

import { useState, useMemo } from "react";
import { videosData } from "@/lib/data";
import VideoCard from "./video-card";
import { Button } from "@/components/ui/button";

export default function VideosClientPage() {
  const [filter, setFilter] = useState("Todos");

  const shows = useMemo(() => {
    const allShows = new Set(videosData.map((video) => video.show));
    return ["Todos", ...Array.from(allShows)];
  }, []);

  const filteredVideos = useMemo(() => {
    if (filter === "Todos") {
      return videosData;
    }
    return videosData.filter((video) => video.show === filter);
  }, [filter]);

  return (
    <section>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {shows.map((show) => (
          <Button
            key={show}
            variant={filter === show ? "default" : "outline"}
            onClick={() => setFilter(show)}
            className={filter === show ? "bg-red-600 text-white" : ""}
          >
            {show}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
