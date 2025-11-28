export default function CareersContent() {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with background text */}
        <div className="relative mb-8 sm:mb-10 md:mb-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-6 sm:mb-8">CAREERS</h2>
          </div>
        </div>

        {/* Main content */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            We are known for our best work environment, friendly staff, positive attitude, and continuous learning is our mantra. We help you build your career growth with our expertise and your hands-on experiences.
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            Join us today, and we will be happy to take you on the next step in your professional life.
          </p>
        </div>

        {/* Call to action section */}
        <div className="bg-brand-light rounded-lg p-6 sm:p-8 md:p-12 text-center mb-8 sm:mb-10 md:mb-12 border border-brand-light">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
            Become a part of our big family to inspire and get inspired by
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-brand-accent mb-6 sm:mb-8">
            Professional Experts.
          </p>
        </div>
      </div>
    </div>
  )
}
