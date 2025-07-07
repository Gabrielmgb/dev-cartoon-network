"use client";

import { useState } from "react";
import { showsData } from "@/lib/data";
import type { Show } from "@/lib/types";
import ShowCard from "./show-card";
import ShowDetailsModal from "./show-details-modal";

export default function ShowsClientPage() {
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {showsData.map((show) => (
          <ShowCard
            key={show.id}
            show={show}
            onSelect={() => setSelectedShow(show)}
          />
        ))}
      </div>

      <ShowDetailsModal
        show={selectedShow}
        onClose={() => setSelectedShow(null)}
      />
    </div>
  );
}
