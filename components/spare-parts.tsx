"use client"

import { useState } from "react";
import { partsData } from "@/lib/parts-data";

export default function SearchPart() {
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [results, setResults] = useState<any[]>([])

  const handleSearch = () => {
    const filtered = partsData.filter((item) => {
      return (
        (make ? item.make.toLowerCase().includes(make.toLowerCase()) : true) &&
        (model ? item.model.toLowerCase().includes(model.toLowerCase()) : true) &&
        (year ? item.year === Number(year) : true)
      )
    })

    // Flatten all matching spare parts
    const allParts = filtered.flatMap((data) => data.parts)

    setResults(allParts)
  }

  return (
    <section id="search-part" className="py-20 sm:py-32">
    <div className="p-6 border rounded-lg shadow bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-black">Search Spare Parts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          className="border p-3 rounded text-black"
          placeholder="Make (e.g., Tata Motors)"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />

        <input
          className="border p-3 rounded text-black"
          placeholder="Model (e.g., Prima)"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />

        <input
          className="border p-3 rounded text-black"
          placeholder="Year (e.g., 2025)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <button
        onClick={handleSearch}
        className="bg-primary text-white px-6 py-2 rounded hover:opacity-90"
      >
        Search
      </button>

      {/* Results section */}
      {results?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Matching Spare Parts</h3>

          <ul className="space-y-3">
            {results.map((part) => (
              <li key={part.id} className="p-4 border rounded shadow-sm flex justify-between">
                <span>{part.name}</span>
                <span className="font-medium">₹{part.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {results.length === 0 && (
        <p className="text-gray-500 mt-4">No parts found — refine your search.</p>
      )}
    </div>
    </section>
  )
}


