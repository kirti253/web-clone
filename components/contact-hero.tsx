export default function ContactHero() {
  return (
    <div className="relative w-full h-64 md:h-80 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
      {/* Keyboard keys background */}
      <div className="absolute inset-0 opacity-40">
        <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Decorative keyboard elements */}
          <g fill="none" stroke="#999" strokeWidth="2">
            <rect x="50" y="50" width="80" height="80" rx="8" />
            <rect x="150" y="80" width="80" height="80" rx="8" />
            <rect x="250" y="100" width="80" height="80" rx="8" />
            <rect x="350" y="60" width="80" height="80" rx="8" />
            <rect x="450" y="120" width="80" height="80" rx="8" />
            <rect x="550" y="90" width="80" height="80" rx="8" />
            <rect x="650" y="70" width="80" height="80" rx="8" />
            <rect x="750" y="110" width="80" height="80" rx="8" />
            <rect x="850" y="85" width="80" height="80" rx="8" />
            <rect x="950" y="100" width="80" height="80" rx="8" />
          </g>
        </svg>
      </div>

      {/* Colorful contact icons */}
      <div className="absolute inset-0 flex items-center justify-center gap-8">
        <div className="w-20 h-20 bg-pink-500 rounded-lg flex items-center justify-center shadow-lg transform -rotate-12 hover:rotate-0 transition">
          <span className="text-3xl">📞</span>
        </div>
        <div className="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-3xl">📱</span>
        </div>
        <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition">
          <span className="text-3xl">✉️</span>
        </div>
        <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-3xl">📧</span>
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute inset-0 flex items-end justify-center pb-8 bg-black/20">
        <h1 className="text-5xl md:text-6xl font-bold text-white opacity-50">CONTACT US</h1>
      </div>
    </div>
  )
}
