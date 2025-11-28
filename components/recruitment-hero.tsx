export default function RecruitmentHero() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Circular image with JOB text */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 flex-shrink-0">
            <div className="absolute inset-0 rounded-full border-4 sm:border-6 lg:border-8 border-gray-300 overflow-hidden">
              <img
                src="/hands-holding-job-cubes.jpg"
                alt="Job placement"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">JOB</div>
            </div>
          </div>

          {/* Main heading with red and cyan text */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 sm:border-3 lg:border-4 border-blue-600 flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-blue-600"></div>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Your Job</span>
                </h1>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-cyan-500 md:ml-10 lg:ml-16">
                Search
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 md:ml-10 lg:ml-16">
                Ends Here
              </h2>
            </div>
          </div>
        </div>

        {/* Large RECRUITMENT text background */}
        <div className="text-center mt-6 sm:mt-8 overflow-hidden">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-200 opacity-50 tracking-wider">
            RECRUITMENT
          </h2>
        </div>
      </div>
    </section>
  )
}