export default function SolutionsHero() {
  return (
    <section className="w-full bg-gradient-to-r from-slate-700 to-slate-900 py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center min-h-96">
          <div className="grid grid-cols-4 gap-8 w-full">
            {/* Question Mark */}
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-6xl font-bold text-slate-700">?</span>
              </div>
            </div>
            {/* Gears */}
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
                <span className="text-5xl">⚙️</span>
              </div>
            </div>
            {/* Light Bulb */}
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32 bg-orange-300 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-5xl">💡</span>
              </div>
            </div>
            {/* Exclamation */}
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-6xl font-bold text-slate-700">!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
