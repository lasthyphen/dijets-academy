import { Card, CardContent } from "components/ui/card"
import { Book, PenLine, ListOrderedIcon as AlphabeticalSort } from 'lucide-react'
import Image from "next/image"

export default function ExploreSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:py-18">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-card hover:shadow-md transition-shadow duration-300">
          <a href="/course/glossary">
          <CardContent className="flex items-start gap-4 p-6">
        <div className="relative w-12 h-12 flex-shrink-0 flex">
          <Book strokeWidth="1" stroke="#18d57e" className="w-8 h-8 mx-auto my-auto" />
          <div className="absolute inset-0 bg-[#d4d4d4] opacity-10 rounded" />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Topics</h2>
          <p className="text-gray-600">
            150+ articles on everything you need to know about crypto
          </p>
        </div>
      </CardContent>
          </a>
        </Card>
        <Card className="bg-card hover:shadow-md transition-shadow duration-300">
        <CardContent className="flex items-start gap-4 p-6">
        <div className="relative w-12 h-12 flex-shrink-0 flex">
          <PenLine strokeWidth="1" stroke="#18d57e" className="w-8 h-8 mx-auto my-auto" />
          <div className="absolute inset-0 bg-[#d4d4d4] opacity-10 rounded" />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Experts</h2>
          <p className="text-gray-600">
            Meet industry leaders and learn about their projects
          </p>
        </div>
      </CardContent>
        </Card>

        <Card className="bg-card hover:shadow-md transition-shadow duration-300">
        <CardContent className="flex items-start gap-4 p-6">
        <div className="relative w-12 h-12 flex-shrink-0 flex">
          <AlphabeticalSort strokeWidth="1" stroke="#18d57e" className="w-8 h-8 mx-auto my-auto" />
          <div className="absolute inset-0 bg-[#d4d4d4] opacity-10 rounded" />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Glossary</h2>
          <p className="text-gray-600">
            1000+ terms to help you speak the lingo
          </p>
        </div>
      </CardContent>
        </Card>
      </div>
    </div>
  )
}

