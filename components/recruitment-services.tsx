export default function RecruitmentServices() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
              <img
                src="/professional-search-icon.jpg"
                alt="Professional search"
                className="w-10 h-10"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">Executive Search</h3>
              <p className="text-gray-700">
                Senior management and CxO level recruitment for strategic business roles requiring specialized industry experience.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-20 h-20 bg-cyan-100 rounded-lg flex items-center justify-center">
              <img
                src="/team-hiring-icon.jpg"
                alt="Team hiring"
                className="w-10 h-10"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-600 mb-2">Team Recruitment</h3>
              <p className="text-gray-700">
                Build and scale teams efficiently with our specialized recruitment process for mid-level and senior talent acquisition.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center">
              <img
                src="/contract-icon.jpg"
                alt="Contract staffing"
                className="w-10 h-10"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Contract Staffing</h3>
              <p className="text-gray-700">
                Flexible staffing solutions for temporary and contract positions across various departments and skill levels.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center">
              <img
                src="/consulting-icon.jpg"
                alt="Consulting"
                className="w-10 h-10"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-2">RPO Consulting</h3>
              <p className="text-gray-700">
                Recruitment Process Outsourcing with strategic consulting to optimize your entire talent acquisition function.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
