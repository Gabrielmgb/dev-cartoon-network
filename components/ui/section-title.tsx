import type { ReactNode } from "react"

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-yellow-400 pl-4">{children}</h2>
)
