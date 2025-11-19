export default function ExecutiveSearch() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-12 items-center">
          {/* Left side with text */}
          <div className="flex-1">
            <p className="text-blue-600 font-semibold text-sm mb-2">Recruitment</p>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-600">Executive</span>
              <span className="text-gray-900"> Search</span>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As the name suggests here, Adore conduct recruitment processes for highly qualified candidate's top-level jobs which can be Vice President, CEO, MD and Director in the public and private sectors, as well as not-for-profit organizations.
              </p>
              <p>
                We make sure our experts interact and understand the strategic brand vision, mission, goals, personality traits which the new executive-level person has to comply.
              </p>
            </div>
          </div>

          {/* Right side with background image */}
          <div className="flex-1 h-96 relative rounded-lg overflow-hidden">
            <img
              src="/business-professionals-silhouette-background.jpg"
              alt="Executive Search"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
