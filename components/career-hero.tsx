export default function CareerHero() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 400">
          {/* Decorative career-related icons and patterns */}
          <rect x="50" y="50" width="80" height="80" fill="none" stroke="currentColor" opacity="0.3" />
          <circle cx="200" cy="100" r="40" fill="none" stroke="currentColor" opacity="0.3" />
          <path d="M 300 50 L 350 150 L 300 200" fill="none" stroke="currentColor" opacity="0.3" strokeWidth="2" />
          <rect x="400" y="80" width="100" height="100" fill="none" stroke="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto w-full px-6">
        <div className="flex-1">
          <h1 className="text-6xl font-bold text-white mb-4">CAREER</h1>
        </div>
        <div className="flex-1 flex justify-center">
          {/* Hand holding pencil illustration - represented as SVG */}
          <div className="w-48 h-48 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <div className="text-6xl">✏️</div>
          </div>
        </div>
      </div>
    </div>
  )
}
