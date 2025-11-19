export default function RecruitmentHero() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-8 mb-12">
          {/* Circular image with JOB text */}
          <div className="relative w-64 h-64 flex-shrink-0">
            <div className="absolute inset-0 rounded-full border-8 border-gray-300 overflow-hidden">
              <img
                src="/hands-holding-job-cubes.jpg"
                alt="Job placement"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-3xl font-bold text-white drop-shadow-lg">JOB</div>
            </div>
          </div>

          {/* Main heading with red and cyan text */}
          <div className="flex-1">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full border-4 border-red-600 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-red-600"></div>
                </div>
                <h1 className="text-5xl font-bold">
                  <span className="text-gray-900">Your Job</span>
                  <br />
                  <span className="text-cyan-500">Search</span>
                </h1>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 ml-16">Ends Here</h2>
            </div>
          </div>
        </div>

        {/* Large RECRUITMENT text background */}
        <div className="text-center mt-8">
          <h2 className="text-8xl font-bold text-gray-200 opacity-50 tracking-wider">RECRUITMENT</h2>
        </div>
      </div>
    </section>
  )
}
