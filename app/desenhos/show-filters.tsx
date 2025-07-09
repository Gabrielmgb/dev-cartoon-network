"use client"

import { useState } from "react"
import { Search, Filter, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { FilterState } from "@/lib/types"

interface ShowFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  categories: string[]
  creators: string[]
  decades: string[]
  totalShows: number
}

export default function ShowFilters({
  filters,
  onFiltersChange,
  categories,
  creators,
  decades,
  totalShows,
}: ShowFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const updateFilter = (key: keyof FilterState, value: string) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const clearAllFilters = () => {
    onFiltersChange({
      category: "Todos",
      creator: "Todos",
      decade: "Todos",
      sortBy: "name",
      searchTerm: "",
    })
  }

  const hasActiveFilters =
    filters.category !== "Todos" ||
    filters.creator !== "Todos" ||
    filters.decade !== "Todos" ||
    filters.searchTerm !== ""

  const getActiveFiltersCount = () => {
    let count = 0
    if (filters.category !== "Todos") count++
    if (filters.creator !== "Todos") count++
    if (filters.decade !== "Todos") count++
    if (filters.searchTerm !== "") count++
    return count
  }

  return (
    <div className="space-y-4">
      {/* Search Bar - Always Visible */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Buscar por nome do desenho ou criador..."
          value={filters.searchTerm}
          onChange={(e) => updateFilter("searchTerm", e.target.value)}
          className="pl-10 h-12"
        />
      </div>

      {/* Filter Button and Results Counter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Filtros
                {hasActiveFilters && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 ml-1">
                    {getActiveFiltersCount()}
                  </Badge>
                )}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-blue-600" />
                  Filtrar Desenhos
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 py-4">
                {/* Filter Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Categoria</label>
                    <Select value={filters.category} onValueChange={(value) => updateFilter("category", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Creator Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Criador</label>
                    <Select value={filters.creator} onValueChange={(value) => updateFilter("creator", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {creators.map((creator) => (
                          <SelectItem key={creator} value={creator}>
                            {creator}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Decade Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Década</label>
                    <Select value={filters.decade} onValueChange={(value) => updateFilter("decade", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {decades.map((decade) => (
                          <SelectItem key={decade} value={decade}>
                            {decade === "Todos" ? "Todas" : decade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sort Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Ordenar por</label>
                    <Select value={filters.sortBy} onValueChange={(value) => updateFilter("sortBy", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">Nome (A-Z)</SelectItem>
                        <SelectItem value="year">Ano (Mais recente)</SelectItem>
                        <SelectItem value="creator">Criador (A-Z)</SelectItem>
                        <SelectItem value="category">Categoria (A-Z)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Active Filters Display */}
                {hasActiveFilters && (
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Filtros ativos:</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={clearAllFilters}
                        className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Limpar todos
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {filters.category !== "Todos" && (
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {filters.category}
                          <button
                            onClick={() => updateFilter("category", "Todos")}
                            className="ml-1 hover:text-blue-900"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      )}
                      {filters.creator !== "Todos" && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {filters.creator}
                          <button
                            onClick={() => updateFilter("creator", "Todos")}
                            className="ml-1 hover:text-green-900"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      )}
                      {filters.decade !== "Todos" && (
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                          {filters.decade}
                          <button
                            onClick={() => updateFilter("decade", "Todos")}
                            className="ml-1 hover:text-purple-900"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      )}
                      {filters.searchTerm && (
                        <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                          "{filters.searchTerm}"
                          <button onClick={() => updateFilter("searchTerm", "")} className="ml-1 hover:text-orange-900">
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {/* Apply Button */}
                <div className="flex justify-end pt-4 border-t border-gray-200">
                  <Button onClick={() => setIsOpen(false)} className="bg-blue-600 hover:bg-blue-700">
                    Aplicar Filtros
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-red-600 hover:bg-red-50">
              <X className="h-4 w-4 mr-1" />
              Limpar
            </Button>
          )}
        </div>

        <div className="text-sm text-gray-600">
          {totalShows} desenho{totalShows !== 1 ? "s" : ""} encontrado{totalShows !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Active Filters Display - Outside Modal */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {filters.category !== "Todos" && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              {filters.category}
              <button onClick={() => updateFilter("category", "Todos")} className="ml-1 hover:text-blue-900">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.creator !== "Todos" && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              {filters.creator}
              <button onClick={() => updateFilter("creator", "Todos")} className="ml-1 hover:text-green-900">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.decade !== "Todos" && (
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              {filters.decade}
              <button onClick={() => updateFilter("decade", "Todos")} className="ml-1 hover:text-purple-900">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.searchTerm && (
            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
              "Busca: {filters.searchTerm}"
              <button onClick={() => updateFilter("searchTerm", "")} className="ml-1 hover:text-orange-900">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
