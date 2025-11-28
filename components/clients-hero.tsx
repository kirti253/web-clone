export default function ClientsHero() {
  return (
    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center overflow-hidden">
      {/* Background with tech pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=400&width=1200&query=tech pattern dark blueprint)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Colorful overlaid text */}
      <div className="relative z-10 text-center px-3 w-full">
        <div className="flex items-center justify-center gap-0 sm:gap-0.5 md:gap-1 flex-wrap leading-none">
          <span className="text-2xl xs:text-2.5xl sm:text-4xl md:text-5xl lg:text-7xl font-black" style={{ color: '#FF6B6B' }}>O</span>
          <span className="text-2xl xs:text-2.5xl sm:text-4xl md:text-5xl lg:text-7xl font-black" style={{ color: '#E8E8E8' }}>U</span>
          <span className="text-2xl xs:text-2.5xl sm:text-4xl md:text-5xl lg:text-7xl font-black" style={{ color: '#FFA500' }}>R</span>
          <span className="text-2xl xs:text-2.5xl sm:text-4xl md:text-5xl lg:text-7xl font-black" style={{ color: '#4ECDC4' }}>C</span>
          <span className="text-2xl xs:text-2.5xl sm:text-4xl md:text-5xl lg:text-7xl font-black" style={{ color: '#5E72E4' }}>L</span>
          <span className="text-2xl xs:text-2.5xl sm:text-4xl md:text-5xl lg:text-7xl font-black" style={{ color: '#7B68EE' }}>I</span>
          <span className="text-2xl xs:text-2.5xl sm:text-4xl md:text-5xl lg:text-7xl font-black" style={{ color: '#FF6B6B' }}>E</span>
          <span className="text-2xl xs:text-2.5xl sm:text-4xl md:text-5xl lg:text-7xl font-black" style={{ color: '#FF6B6B' }}>N</span>
          <span className="text-2xl xs:text-2.5xl sm:text-4xl md:text-5xl lg:text-7xl font-black" style={{ color: '#FF6B6B' }}>T</span>
          <span className="text-2xl xs:text-2.5xl sm:text-4xl md:text-5xl lg:text-7xl font-black" style={{ color: '#FF6B6B' }}>S</span>
        </div>
      </div>
    </div>
  )
}
