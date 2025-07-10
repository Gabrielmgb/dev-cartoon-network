"use client";

import { useState, useMemo } from "react";
import { showCategories } from "@/lib/data";
import { showsData } from "@/lib/shows-data"
import type { Show, FilterState } from "@/lib/types";
import ShowCard from "./show-card";
import ShowDetailsModal from "./show-details-modal";
import ShowFilters from "./show-filters";

export default function ShowsClientPage() {
  const [selectedShow, setSelectedShow] = useState<Show | null>(null)
  const [filters, setFilters] = useState<FilterState>({
    category: "Todos",
    creator: "Todos",
    decade: "Todos",
    sortBy: "name",
    searchTerm: "",
  })

  const decades = useMemo(() => {
    const allDecades = new Set(showsData.map((show) => show.decade))
    return ["Todos", ...Array.from(allDecades).sort()]
  }, [])

  const allUniqueCreators = useMemo(() => {
    const creatorsSet = new Set<string>()
    showsData.forEach((show) => {
      show.details.creator.forEach((creator) => {
        creatorsSet.add(creator)
      })
    })
    return ["Todos", ...Array.from(creatorsSet).sort()]
  }, [])

  const filteredAndSortedShows = useMemo(() => {
    const filtered = showsData.filter((show) => {
      const matchesCategory = filters.category === "Todos" || show.category === filters.category
      // Check if the selected creator is included in the show's creators array
      const matchesCreator = filters.creator === "Todos" || show.details.creator.includes(filters.creator)
      const matchesDecade = filters.decade === "Todos" || show.decade === filters.decade
      const matchesSearch =
        filters.searchTerm === "" ||
        show.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        show.details.creator.some((c) => c.toLowerCase().includes(filters.searchTerm.toLowerCase())) // Search within creators array

      return matchesCategory && matchesCreator && matchesDecade && matchesSearch
    })

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "year":
          return Number.parseInt(b.details.year.split("–")[0]) - Number.parseInt(a.details.year.split("–")[0])
        case "creator":
          // Sort by the first creator in the array
          return a.details.creator[0].localeCompare(b.details.creator[0])
        case "category":
          return a.category.localeCompare(b.category)
        default:
          return 0
      }
    })

    return filtered
  }, [filters])

  return (
    <div className="space-y-8">
      <ShowFilters
        filters={filters}
        onFiltersChange={setFilters}
        categories={showCategories}
        creators={allUniqueCreators} // Pass dynamically generated creators
        decades={decades}
        totalShows={filteredAndSortedShows.length}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {filteredAndSortedShows.map((show) => (
          <ShowCard key={show.id} show={show} onSelect={() => setSelectedShow(show)} />
        ))}
      </div>

      {filteredAndSortedShows.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-600 mb-2">Nenhum desenho encontrado</h3>
          <p className="text-gray-500">Tente ajustar os filtros ou termo de busca</p>
        </div>
      )}

      <ShowDetailsModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  )
}