export default function SeniorMiddleHiring() {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">
          <span className="text-blue-600">Senior & Middle Level</span>
          <span className="text-blue-900"> Hiring</span>
        </h2>

        {/* Illustration and text with we're hiring background */}
        <div className="mb-8 sm:mb-12 flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
          {/* Icons/Illustrations */}
          <div className="flex gap-4 sm:gap-6 flex-1 justify-center md:justify-start">
            <div className="text-center">
              <img
                src="/woman-with-megaphone-illustration.jpg"
                alt="Woman with megaphone"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-2 sm:mb-4 rounded-lg"
              />
            </div>
            <div className="text-center">
              <img
                src="/happy-person-jumping-illustration.jpg"
                alt="Happy person"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-2 sm:mb-4 rounded-lg"
              />
            </div>
            <div className="text-center">
              <img
                src="/person-with-megaphone-illustration.jpg"
                alt="Person with megaphone"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-2 sm:mb-4 rounded-lg"
              />
            </div>
          </div>

          {/* "We're hiring!" text background */}
          <div className="flex-1 relative text-center md:text-right">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200 opacity-40 leading-tight">
              we're<br />hiring!
            </div>
          </div>
        </div>

        {/* Description text */}
        <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed mb-8 sm:mb-12 text-sm sm:text-base">
          <p>
            Senior and Middle-level enlisting is an essential and smart task as these are the mainstays and pillars of the organization. Looking at its importance, we have an imperative and decent enrolment group with a well-defined procedure to enlist individuals at this level.
          </p>
          <p>
            Before finalizing a candidate for any client, we always start with a detailed understanding of what clients want and document each need with clarity.
          </p>
          <p>
            Savekey Technology consultants shortlist the candidates to ensure that candidates meet the comprehensive job description and the required standards for clients.
          </p>
        </div>

        {/* Cards section */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="bg-blue-900 text-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Recruitment<br />Process Outsourcing
            </h3>
            <p className="leading-relaxed text-sm sm:text-base">
              Savekey Technology's outsourcing program blends dedicated recruiters, skilled consultants, technology and best practice hiring processes to transform an organization's talent acquisition function.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Global<br />Sourcing
            </h3>
            <p className="leading-relaxed text-sm sm:text-base">
              Outsourcing is now no longer just a short term quick-fix to achieve cost reduction. At Savekey Technology, outsourcing uses a blend of onsite, offshore and nearshore outsourcing solutions to attain strategic business goals for the outsourcing company.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}