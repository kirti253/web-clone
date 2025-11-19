export default function SoftwareDevelopment() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h3 className="text-4xl font-bold text-cyan-500 mb-4">Software</h3>
            <h3 className="text-4xl font-bold text-cyan-500 mb-8">Development</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Adore Technosoft provides solution for software development, software maintenance and support,
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We work as a team with client to understand client's requirements and transform them into high quality software products and services. It includes web-based application, desktop application, embedded system solutions etc.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center">
            <img 
              src="/software-development-compass-technology.jpg"
              alt="Software Development"
              className="max-w-md w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
